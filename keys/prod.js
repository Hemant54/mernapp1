var prod = {
    MongoURI: process.env.MONGOURI,
    sessionKey: process.env.SESSIONKEY,
    aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
    aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    aws_region: process.env.AWS_REGION,
    bucket_name: process.env.BUCKET_NAME,
    aws_link: process.env.AWS_LINK,
    msg91_authkey: process.env.MSG91_AUTHKEY,
    mailgun_api_key: process.env.MAILGUN_API_KEY,
    mailgun_domain: process.env.MAILGUN_DOMAIN
}
module.exports = prod;