const mongoose = require('mongoose');
const users = mongoose.model('users');
const clients = mongoose.model('clients');
var middleware = {};

const getClientDetails = (clientApiKey) => {
   return new Promise((resolve, reject) => {
      clients.find({ client_api_key: clientApiKey }, (err, client) => {
        if(err) {
          console.log(err);
          reject(false);
        }
        resolve(client);
      });
   });
}

//Middlewares

middleware.clientApiKeyValidation = async (req,res,next) => {
    let clientApiKey = req.query.api_key;
    if(!clientApiKey){
        return res.status(400).send({
            status: false,
            response:"Missing Api Key"
        });
    }
    try {
        let clientDetails = await getClientDetails(clientApiKey);
        if (clientDetails) {
            next();
        }
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            status: false,
            response: "Invalid Api Key"
        });
    }
}

middleware.checkAdmin = function(req,res, next) {
    if(req.session._id) {
        users.findById(req.session._id, function(err, user) {
            if(err) {
                res.status(403).send({ message: "Error please try again!" });
            }
            if(user.admin) {
                next();
            } else {
                res.status(403).send({ message: "You are not authorized to perform this" });
            }
        });
    } else {
         res.status(403).send({ message: "Please login!" });
    }
}

module.exports = middleware;