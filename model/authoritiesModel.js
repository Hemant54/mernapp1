var mongoose = require('mongoose');
var { Schema } = mongoose;

var authoritiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  // any more info can be added
});

mongoose.model('authorities', authoritiesSchema);
