const mongoose = require('mongoose');
const questions = mongoose.model('questions');
const users = mongoose.model('users');
const fs = require('fs');
const path = require('path');
const mime = require("mime");
const mkdirp = require("mkdirp");
const s3Zip = require("s3-zip");
const keys = require("../keys/keys.js");
const AWS = require("aws-sdk");
const template = require('../utilities/mailTemplate.js');
var utility = require('../utilities/utility');
const s3Bucket = new AWS.S3({
  accessKeyId: keys.aws_access_key_id,
  secretAccessKey: keys.aws_secret_access_key,
  region: keys.aws_region
});

var creds = new AWS.Credentials();
creds.accessKeyId = keys.aws_access_key_id;
creds.secretAccessKey = keys.aws_secret_access_key;
AWS.config.credentials = creds;

module.exports = (app) => {
    app.get('/api/getalltest', (req, res) => {
        questions.find({}).then(result => {
            const data = JSON.parse(JSON.stringify(result));
            return res.send(data);
        }).catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
    });

    app.get("/api/test/:name", (req,res) => {
    	questions.find({ testname: req.params.name }).then(result => {
    		const data = JSON.parse(JSON.stringify(result));
    		return res.send(data);
    	})
    	.catch(err => {
    		console.log(err);
    		return res.sendStatus(500).json({ message: "Test not available!" });
    	})
    });
   
    app.post('/api/uploadVideo', (req, res) => {
        const fileName = req.files.file_;
        if(req.session._id) {
          users.findOne({_id:req.session._id}, function(err, user) {
            if(err) {
              console.log(err);
            }
            if(user.test > 0) {
              var testNumber = user.module - user.test + 1;
              console.log("Test" + testNumber);
              const videoKey = "video/" + user.name + "/" + req.body.testname + "/Test" + testNumber + "/" + req.body.filename; 
              var params = {
                Bucket: keys.bucket_name,
                Key: videoKey,
                Body: fileName.data,
                ContentType: fileName.mimetype,
                ACL: "public-read"
              }
              s3Bucket.upload(params, function(err,data) {
                if(err) {
                  res.sendStatus(500).json({ error: true, Message: err });
                } else {
                  console.log("video uploaded");
                  return res.send({ data });
                }
              });
            } else {
              res.sendStatus(500).json({ message: "Tests exceeded!" });
            }
          });
        }
    });

    app.post('/api/interviewanalyzer/analysis/result', function(req,res) {
      console.log("in result of interview analyzer");
      var html = "<h1>Hi there</h1><p>Mail with attachment</p>";
      utility.sendMailWithAttachment("iliyasattarwala007@gmail.com", "Innovative Labs", "Innovvative Labs", html);
      console.log("after mail sent");
    })

    app.get('/api/downloadVideo/:name/:testname/:testNumber', function(req, res){
      const file1 = "Part1.mp4";
      const file2 = "Part2.mp4";
      const file3 = "Part3.mp4";
      const folder = `video/${req.params.name}/${req.params.testname}/Test${req.params.testNumber}/`;
      var params = {Bucket: keys.bucket_name, Key: folder + "Part1.mp4"};
      if(req.params.testname === "Interview Test") {
        s3Bucket.getObject(params).on('success', function(response) {
          res.writeHead(200, {
              'Content-Type': 'application/zip',
              'Content-disposition': `attachment; filename=InterviewSimulatorTest${req.params.testNumber}.zip`
          });
          s3Zip
            .archive({ region: keys.aws_region , bucket: keys.bucket_name, debug: true }, folder, [file1,file2,file3])
            .pipe(res);
        }).on('error',function(error){
          var redirect_url;
          if(process.env.NODE_ENV === 'production') {
            redirect_url = req.headers.host;
          } else {
            redirect_url = "http://localhost:3000";
          }
          res.redirect(`${redirect_url}/interviewsimulator/test/complete?error=true&url=/api/downloadVideo/${req.params.name}/${req.params.testname}/${req.params.testNumber}`);
        }).send();
      } else if (req.params.testname === "Interview Analyzer") {
        // add file 4 like pdf to download and so in future
        s3Bucket.getObject(params).on('success', function(response) {
          res.writeHead(200, {
              'Content-Type': 'application/zip',
              'Content-disposition': `attachment; filename=InterviewAnalyzerTest${req.params.testNumber}.zip`
          });
          s3Zip
            .archive({ region: keys.aws_region , bucket: keys.bucket_name, debug: true }, folder, [file1,file2,file3])
            .pipe(res);
        }).on('error',function(error){
          var redirect_url;
          if(process.env.NODE_ENV === 'production') {
            redirect_url = req.headers.host;
          } else {
            redirect_url = "http://localhost:3000";
          }
          res.redirect(`${redirect_url}/interviewanalyzer/test/complete?error=true&url=/api/downloadVideo/${req.params.name}/${req.params.testname}/${req.params.testNumber}`);
        }).send();
      }
    }); 
}
