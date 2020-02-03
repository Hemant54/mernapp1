var mongoose = require('mongoose');
var { Schema } = mongoose;

var clientSchema = new Schema({
  client_api_key: {
    type: String,
    required: true,
    unique: true
  },
  client_name: {
    type: String,
    required: true,
    unique: true
  }
});

mongoose.model('clients', clientSchema);
