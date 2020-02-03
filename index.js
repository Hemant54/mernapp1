const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys/keys');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const path = require('path'); 
const PORT = process.env.PORT || 3000;
const app = express();
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const MongoStore = require('connect-mongo')(session);
const MONGOURI = 'mongodb+srv://innovativeAi:000@innovativeaiwebsite-3kw9l.mongodb.net/InnovativeAI?retryWrites=true&w=majority';

mongoose.connect(MONGOURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
require('./model/userModel');
require('./model/clientModel');
require('./model/authoritiesModel');
require('./model/questionModel');
const db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
    secret: keys.sessionKey,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));
app.use(fileUpload());
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

require('./routes/authRoutes')(app);
require('./routes/questionRoutes')(app);
require('./routes/adminRoutes')(app);
require('./routes/clientRoutes')(app);

app.get('/insecure', function (req, res) {
  res.send('Dangerous!');
});

/*if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}*/

app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log("Server listening on PORT :", PORT);
    }
});
