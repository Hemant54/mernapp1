var mongoose = require('mongoose');
var { Schema } = mongoose;
const bcrypt = require('bcryptjs')
var addressSchema = require("./addressModel");

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    mobile : {
      type : String,
      required : true
    },
    admin: {
      type: Boolean,
      default: false
    },
    brainMirrorTaken: {
      type: Boolean,
      default: false
    },
    gender: {
      type: String,
      default: ""
    },
    address: addressSchema,
    tests_opted: {
    	type: Array
    },
    tests_taken:[{
      testname: String
    }],
    isVerified: {
      type: Boolean,
      default: false
    },
    age : {
      type : String,
      default: ""
    },
    company : {
      id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"authorities"
      },
      name:String
    },
    format : {
      type : String,
      default: ""
    },
    module : {
      type : Number,
      default: 10
    },
    test:{
      type : Number,
      default: 0
    },
    avatar: {
      type: String,
      default: "https://image.flaticon.com/icons/svg/149/149452.svg"
    },
    interested_tests: {
      type: Array
    }
});

mongoose.model('users', userSchema);
