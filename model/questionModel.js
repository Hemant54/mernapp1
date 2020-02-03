var mongoose = require('mongoose');
var { Schema } = mongoose;

var questionSchema = new Schema({
    testname: {
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    },
    questionArray: [{
        question: {
            type: String,
            required: true
        },
        audio: {
            type: String
        },
    }]
});

mongoose.model('questions', questionSchema);