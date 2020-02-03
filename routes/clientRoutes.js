const mongoose = require('mongoose');
var middleware = require("../middlewares/index");

module.exports = (app) => {
    app.get("/api/client",middleware.clientApiKeyValidation,(req,res) => {
    	res.send("Ok");
    });
    app.post("/api/client/register", middleware.clientApiKeyValidation,(req,res) => {
    	console.log("in post request apikey:");
    	console.log(req.query.api_key);
    });
}

