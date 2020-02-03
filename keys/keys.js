var keys = {}
// if environment is production load the prod.js else load dev.js
if (process.env.NODE_ENV === 'production') {
    var prod = require('./prod');    
    keys = prod;
} else {
    var dev = require('./dev');
    keys = dev;
} 
module.exports = keys