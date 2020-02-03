module.exports = {
    generate: function(user,testname){
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>  
              </head>
              <body>        
                  <div marginwidth="0" marginheight="0" style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;font-family:Helvetica;">
                    <table style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;max-width:600px;margin:auto;border-spacing:0" align="center" marginwidth="0" marginheight="0">
                      <tbody>
                        <tr>
                          <td colspan="2" style="padding-top:24px;padding-bottom: 24px; display: flex;align-items: center;">
                            <img style="height:50px;margin-right: 10px;" src="https://www.hireonai.com/favicon.png" class="CToWUd a6T" tabindex="0">
                              <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#121212;letter-spacing:2px;margin-right: 5px;">Innovative</span>
                              <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#26B897;letter-spacing:2px">Labs</span>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-radius:5px;padding-top:40px;padding-bottom:40px;text-align:left;background:#26B897;width:85%;padding-left:7.5%;padding-right:7.5%;">
                            <p style="margin-top:0;margin-bottom:32px;font-size:24px;font-weight:bold;color:#f7f7f7;">
                              Hi ${user.name},
                            </p>
                            <div style="margin:auto;font-family:Helvetica;text-align:justify;font-size:16px;font-weight:normal;color:#fff;">
                              <p style="color:#fff;margin-bottom: 15px;">This is to inform you that you have successfully completed the Interview ${testname === "Interview Test" ? "Simulator" : "Analyzer"} test.</p>
                              ${ generatePara(testname,user) }
                              <p style="color:#fff;">Tests Left: ${user.test}</p>
                              <p style="color:#fff;margin-bottom: 15px;">You can view your profile <a style="color:#fff;" href="https://hireonai.com/studentprofile">here</a></p>
                              <p style="color:#fff;margin-bottom: 15px;">For any query, drop us an email at <a style="color:#fff;" href="mailto:support@hireonai.com" target="_blank">support@hireonai.com</a>.</p>
                              <p style="color:#fff;">Regards,<br>
                              Team Innovative Labs</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style="color: #666; text-align:center;font-size: 12px;">This email is sent to ${user.email}, don't reply to the above email.</p>
                </div>
              </body>
              </html>
        `
    },
    generateBrainMirrorMail: function(user,authority) {
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>  
              </head>
              <body>        
                  <div marginwidth="0" marginheight="0" style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;font-family:Helvetica;">
                    <table style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;max-width:600px;margin:auto;border-spacing:0" align="center" marginwidth="0" marginheight="0">
                      <tbody>
                        <tr>
                          <td colspan="2" style="padding-top:24px;padding-bottom: 24px; display: flex;align-items: center;">
                            <img style="height:50px;margin-right: 10px;" src="https://www.hireonai.com/favicon.png" class="CToWUd a6T" tabindex="0">
                              <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#121212;letter-spacing:2px;margin-right: 5px;">Innovative</span>
                              <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#26B897;letter-spacing:2px">Labs</span>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border-radius:5px;padding-top:40px;padding-bottom:40px;text-align:left;background:#26B897;width:85%;padding-left:7.5%;padding-right:7.5%;">
                            <p style="margin-top:0;margin-bottom:32px;font-size:24px;font-weight:bold;color:#f7f7f7;">
                              Hi ${authority.name},
                            </p>
                            <div style="margin:auto;font-family:Helvetica;text-align:justify;font-size:16px;font-weight:normal;color:#fff;">
                              <p style="color:#fff;margin-bottom: 15px;">This is to inform you that you that ${user.name} have successfully completed the Brain Mirror test from your organization.</p>
                              <p style="color:#fff;margin-bottom: 15px;">For any query, drop us an email at <a style="color:#fff;" href="mailto:support@hireonai.com" target="_blank">support@hireonai.com</a>.</p>
                              <p style="color:#fff;">Regards,<br>
                              Team Innovative Labs</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p style="color: #666; text-align:center;font-size: 12px;">This email is sent to ${user.email}, don't reply to the above email.</p>
                </div>
              </body>
              </html>
        `
    },
    generateWelcomeMail: function(user, password){
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>  
            </head>
            <body>        
                <div marginwidth="0" marginheight="0" style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;font-family:Helvetica;">
                  <table style="background:#fff;margin:0;padding:0;min-height:100%;width:100%;color:white;max-width:600px;margin:auto;border-spacing:0" align="center" marginwidth="0" marginheight="0">
                    <tbody>
                      <tr>
                        <td colspan="2" style="padding-top:24px;padding-bottom: 24px; display: flex;align-items: center;">
                          <img style="height:50px;margin-right: 10px;" src="https://www.hireonai.com/favicon.png" class="CToWUd a6T" tabindex="0">
                            <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#121212;letter-spacing:2px;margin-right: 5px;">Innovative</span>
                            <span style="font-family:Helvetica;font-size:32px;font-weight:bold;color:#26B897;letter-spacing:2px">Labs</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="border-radius:5px;padding-top:40px;padding-bottom:40px;text-align:left;background:#26B897;width:85%;padding-left:7.5%;padding-right:7.5%;">
                          <p style="margin-top:0;margin-bottom:16px;font-size:16px;font-weight:bold;color:#f7f7f7;">
                            Hey ${user.name},
                          </p>
                          <div style="margin:auto;font-family:Helvetica;text-align:justify;font-size:16px;font-weight:normal;color:#fff;">
                            <p style="color:#fff;margin-bottom: 15px;">Thank you for registering with Innovative Labs. We have granted you the access for your account, you can log in with the following email id and password :</p>
                            <p style="color:#fff;margin-bottom: 15px;">Email: <a style="color:#fff;" href="mailto:${user.email}">${user.email}</a><br>Password: ${password}</p>
                            <p style="color:#fff;margin-bottom: 15px;">Before accessing the portal, we suggest you read all the instructions for a seamless experience during the test. Please read the below-mentioned test instructions:</p>
                            <ul>
                              <li style="margin-bottom: 10px;">We recommend you to use the latest and updated Google Chrome web browser (do not support mobile /tablet browsers).</li>
                              <li style="margin-bottom: 10px;">When you open the test link, please use the same login id and password as given above.</li>
                              <li style="margin-bottom: 10px;">Remember your id and password as you need to login using it in future.</li>
                              <li style="margin-bottom: 10px;">It will request your access to webcam, kindly grant the access, and if the access is denied, the test won’t start.</li>
                              <li style="margin-bottom: 10px;">If your webcam is not working or is not available, please arrange an external one.</li>
                              <li style="margin-bottom: 10px;">There should be no obstacle in front of a Webcam.</li>
                              <li style="margin-bottom: 10px;">During the test, only you should be in the view of a webcam and not anyone else.</li>
                              <li style="margin-bottom: 10px;">Do not open multiple tabs before and during the test. Also, do not switch tabs during the test.</li>
                              <li style="margin-bottom: 10px;">Please do not make any unusual head movements during the test.</li>
                              <li style="margin-bottom: 10px;">Make sure that you have a good and stable internet connection.</li>
                              <li style="margin-bottom: 10px;">At the end of the test, it will close automatically, and your submitted answers will be evaluated.</li>
                            </ul>
                            <p style="color:#fff;margin-bottom: 15px;">Drop us a mail on <a style="color: #fff;" href="mailto:support@hireonai.com">support@hireonai.com</a> if you face any difficulty in accessing the test.</p>
                            <p style="color:#fff;">Good Luck!<br>
                            Team Innovative Labs</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p style="color: #666; text-align:center;font-size: 12px;">Please don't reply to the above email.</p>
              </div>
            </body>
            </html>
        `
    }
}


function generatePara(testname, user) {
  if(testname === "Interview Test") {
    return `<p style="color:#fff;">Test Download Link is: <a style="color:#fff;" href="https://hireonai.com/api/downloadVideo/${user.name}/${testname}/${user.test !== 0 ? user.module-user.test: 14}">here</a></p>`;
  } else {
    return `<p style="color:#fff;">Your Analysis report will be sent to you on this mail.</p>`;
  }
}