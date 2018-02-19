// where your node app starts
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

require('dotenv').config();
//connect to db
const db = require('./server/config/db.js');
db.setupConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Configure passport middleware
app.use(passport.initialize());

// load passport strategies
passport.use('local-register', require('./server/passport/local-register'));
passport.use('local-login', require('./server/passport/local-login'));

// pass the authenticaion checker middleware
app.use('/api', require('./server/middleware/auth-check'));

// routes
app.use('/auth', require('./server/routes/auth'));
app.use('/api', require('./server/routes/api'));

app.use('/', (req, res) => { res.redirect('/') });


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
