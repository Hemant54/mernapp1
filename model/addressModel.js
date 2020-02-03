const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressModel = new Schema({
    address: {
    	type:String,
    	default: ""
    },
    pincode: {
    	type: String,
    	default: ""
    },
    city: {
    	type: String,
    	defualt: ""
    },
    state: {
    	type: String,
    	defualt: ""
    },
    country: {
    	type: String,
    	default: ""
    }
});

mongoose.model("addressSchema", addressModel);