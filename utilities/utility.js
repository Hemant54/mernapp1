const keys = require("../keys/keys.js");
var mailgun = require('mailgun-js')({ apiKey: keys.mailgun_api_key, domain: keys.mailgun_domain });
var request = require('request');
module.exports = {
	randomPassword: function(passwordLength = 8,useUpperCase = true,useNumbers = true,useSpecialChars = true) {
	  const chars = 'abcdefghijklmnopqrstuvwxyz';
	  const numberChars = '0123456789';
	  const specialChars = '!@#$';
	  const usableChars = chars
	   + (useUpperCase ? chars.toUpperCase() : '')
	   + (useNumbers ? numberChars : '')
	   + (useSpecialChars ? specialChars : '');
	  let generatedPassword = '';
	  for(i = 0; i <= passwordLength; i++) {
	    generatedPassword += usableChars[Math.floor(Math.random() * (usableChars.length))]
	  }
	  return generatedPassword;
	},
	sendMail: function(to, subject, text, html) {
		var data = {
	      from: "Innovative Labs <support@hireonai.com>",
	      to: to,
	      subject: subject,
	      text: text,
	      html: html
	    };

	    mailgun.messages().send(data, function (error, body) {
	        if(error) {
	            console.log(error);
	        } else {
	          console.log("Mail sent to " + to);
	        }
	    });
	},
	sendMailWithAttachment: function(to, subject, text, html, attachment) {
		var file = request("https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
		var data = {
	      from: "Innovative Labs <support@hireonai.com>",
	      to: to,
	      subject: subject,
	      text: text,
	      html: html,
	      attachment: file
	    };

	    mailgun.messages().send(data, function (error, body) {
	        if(error) {
	            console.log(error);
	        } else {
	          console.log("Mail sent to " + to);
	        }
	    });
	}
}