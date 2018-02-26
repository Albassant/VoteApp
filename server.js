// where your node app starts
const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

require('dotenv').config();
//connect to db
const db = require('./server/config/db.js');
db.setupConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// Configure passport middleware
app.use(passport.initialize());

// load passport strategies
passport.use('local-register', require('./server/passport/local-register'));
passport.use('local-login', require('./server/passport/local-login'));

// pass the authenticaion checker middleware
//app.use(/^\/poll(s)?/, require('./server/middleware/auth-check'));

app.get( /^\/(poll(s)?)|(login)|(register)/, function (req, res){
  console.log(req.path);
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.use('/api', require('./server/middleware/auth-check'));

// routes
app.use('/auth', require('./server/routes/auth'));
app.use('/api', require('./server/routes/api'));

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
