const mongoose = require('mongoose');
const users = mongoose.model('users');
const keys = require("../keys/keys.js");
const AWS = require("aws-sdk");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const s3Bucket = new AWS.S3({
  accessKeyId: keys.aws_access_key_id,
  secretAccessKey: keys.aws_secret_access_key,
  region: keys.aws_region
});
var mailgun = require('mailgun-js')({ apiKey: keys.mailgun_api_key, domain: keys.mailgun_domain });
const template = require('../utilities/mailTemplate.js');
var middleware = require("../middlewares/index");
var utility = require('../utilities/utility');

module.exports = (app) => {
    app.post('/api/admin/user/register', middleware.checkAdmin ,async (req,res) =>{
      if(req.body.password === "") {
        req.body.password = await utility.randomPassword();
      }
      console.log(req.body.password);
      const hash = await bcrypt.hash(req.body.password, 10);
      const user = { ...req.body, test: req.body.module,password: hash };
      const User = new users(user);
      User.save()
        .then(data => {
            console.log("in saving and sending")
            //email to be sent with the credentials
            const html = template.generateWelcomeMail(data,req.body.password);
            utility.sendMail(req.body.email, "Innovative Labs Registration", "Welcome to Innovative Labs", html);
            return res.sendStatus(200);
        }).catch(err=>{
          console.log(err);
            res.status(500).send({ message: "Error in user registration, please select some other email and name and try again!" });
        })
    });
}
