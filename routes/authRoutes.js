const mongoose = require('mongoose');
const users = mongoose.model('users');
const authorities = mongoose.model('authorities');
const fs = require('fs');
const path = require('path');
const mkdirp = require("mkdirp");
const mime = require("mime");
const keys = require("../keys/keys.js");
const AWS = require("aws-sdk");
const axios = require("axios");
const s3Bucket = new AWS.S3({
  accessKeyId: keys.aws_access_key_id,
  secretAccessKey: keys.aws_secret_access_key,
  region: keys.aws_region
});
const bcrypt = require("bcryptjs");
const template = require('../utilities/mailTemplate.js');
var utility = require('../utilities/utility');

module.exports = (app) => {
    //login
    app.post('/api/login',(req, res) => {
        users.findOne({
            email: req.body.email,
            }).then(async result => {
                const isValid = await bcrypt.compare(req.body.password, result.password);
                if(isValid) {
                  req.session._id = result._id;
                  return res.sendStatus(200);
                } else {
                  return res.sendStatus(400);
                }
            }).catch(err => {
                console.log(err);
                return res.sendStatus(404);
        });
    });

    //register
    app.post('/api/login',(req, res)=>{
      
    })

    app.get('/api/getCurrentUser', (req, res)=> {
        if (req.session._id) {
            users.findOne({_id: req.session._id}).select('-password')
            .then(result => {
                const userData = JSON.parse(JSON.stringify(result));
                return res.send(userData);
            }).catch(err => {
                console.log(err);
                return res.send({})
            });
        } else {
            console.log('Session values are not present');
            return res.send({});
        }

    });
  //profile update
    app.post('/api/updateProfile/:_id', (req,res) =>{
      // update user profile based on session
      if (req.body.module < req.body.test) {
        req.body.test = req.body.module;
      }
      var body = req.body;
      users.findById(req.params._id,(err, user) => {
        if(req.body.mobile !== user.mobile) {
          body = { ...body, isVerified: false };
        } else {
          body = { ...body, isVerified: user.isVerified };
        }
        users.findOneAndUpdate({_id: req.params._id},body,function(err,updatedUser){
          if(err){
              console.log(err);
              return res.sendStatus(500);
          } else{
              console.log("user updated " + updatedUser.name);
              return res.sendStatus(200);
          }
        });
      }); 
    });

    //profile image upload
    app.post("/api/uploadProfile",(req,res) => {
        const fileName = req.files.upload;
        const s3FileUrl = keys.aws_link;
        const imageKey = "public/images/" + req.body._id + "/" + req.body.filename;
        var params = {
          Bucket: keys.bucket_name,
          Key: imageKey,
          Body: fileName.data,
          ContentType: fileName.mimetype,
          ACL: "public-read"
        }

        s3Bucket.upload(params, function(err,data) {
          if(err) {
            res.sendStatus(500).json({ error: true, Message: err });
          } else {
            const image_url = s3FileUrl + imageKey;
            users.findOneAndUpdate({_id:req.body._id},{$set: {avatar: image_url}},function(err,updated) {
              if(err){
                  console.log(err);
                  return res.sendStatus(500);
              } else{
                  console.log("user profile image updated " + updated.name);
                  return res.send({ data });
              }
            });
          }
        });
    });

    app.get("/api/institutes", (req,res) => {
      authorities.find({}, (err, elems) => {
        if(err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.send(elems);
      })
    });

    app.post("/api/user/interested/test", (req,res) => {
      users.findOneAndUpdate({ _id: req.body._id },{ $addToSet: { interested_tests: req.body.test } } ,(err, updated) => {
        if(err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.send({ status: "200", msg: "Test added to interested" });
      });
    })

    app.post("/api/profile/sendOtp", (req,res) => {
    	var senderId = "HRONAI";
    	var message = "%23%23OTP%23%23 is your verification code for innovative labs.";
    	var mobileNo = req.body.phone;
  		const URL = `http://control.msg91.com/api/sendotp.php?sender=HRONAI&message=${message}&mobile=${mobileNo}&authkey=${keys.msg91_authkey}`;
  		axios.post(URL)
  			.then(data => {
  				if(data.data.type === "success") {
            users.findOneAndUpdate({_id:req.session._id},{$set: {mobile: mobileNo}},(err,user) => {
              if(err) {
                return res.send({ status: "500", message: "Error in sending otp to number!" });
              }
              return res.send({ status: "200", message: "OTP was sent successfully on registered mobile no."});
            })
  				} else {
            return res.send({ status: "500", message: "Error in sending OTP, please try again" })
          }
  			})
  			.catch(err=> {
          console.log(err);
          return res.send({ status: "500", message: "Error in sending OTP, please try again" })
        });
    });

    app.post("/api/profile/verifyOtp", (req,res) => {
    	var phone = req.body.phone;
    	var otp = req.body.otp;
    	const verify_link = `http://control.msg91.com/api/verifyRequestOTP.php?authkey=${keys.msg91_authkey}&mobile=${phone}&otp=${otp}`;
   		axios.post(verify_link)
   			.then(data => {
   				if(data.data.type === "success") {
            users.findOneAndUpdate({_id:req.session._id},{$set: {isVerified: true}},(err,user) => {
              if(err) {
                return res.send({ status: "500", message: "Error in user verification!" });
              }
              return res.send({ status: "200", message: "OTP was verified successfully on registered mobile no."});
            })
  				} else {
            return res.send({ status: "500", message: "Error in OTP verification, please try again" })
          }
   			})
   			.catch(err => {
          console.log(err);
          return res.send({ status: "500", message: "Error in OTP verification, please try again" })
        });
    });

    app.post("/api/completeTest",(req,res) => {
        users.findOne({_id:req.body._id}, function(err,user) {
            var tests = user.test;
            tests = tests - 1;
            if(tests<0) {
              tests = 0;
            }
            user.test = tests;
            user.tests_taken.push({testname:req.body.testname})
            user.save()
              .then(data => {
                console.log("user updated with test left " + data.test);
                const html = template.generate(data,req.body.testname);
                const subject = req.body.testname === "Interview Test" ? "Interview Simulator" : "Interview Analyzer";
                const text = "Interview Test Completion";
                utility.sendMail(data.email, subject,text, html);
                return res.sendStatus(200);
              })
              .catch(err => {
                  console.log(err);
                  return res.sendStatus(500);
              });
        });
    });

    app.post("/api/test/complete",(req,res) => {
        users.findOne({_id:req.body._id}, function(err,user) {
            if(!user.admin) {
              user.brainMirrorTaken = true;
              if(typeof user.company === 'object') {
                authorities.findOne({ _id: user.company.id }, (err, authority) => {
                  if(err) {
                    return res.sendStatus(500);
                  }
                  var html = template.generateBrainMirrorMail(user, authority);
                  utility.sendMail(authority.email,`${user.name} completed Brain Mirror`,`${user.name} completed Brain Mirror`,html);
                });
              }
              user.save()
                .then(data => {
                  return res.sendStatus(200);
                })
                .catch(err => {
                    console.log(err);
                    return res.sendStatus(500);
                });
            }
        });
    });

    app.get('/api/logout', (req, res)=>{
        if (req.session._id) {
            req.session.destroy(err=>{
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }   else  {
                    return res.sendStatus(200);
                }
            });
        } else {
            console.log('Session values are not present');
            return res.sendStatus(500);
        }
    });
}
