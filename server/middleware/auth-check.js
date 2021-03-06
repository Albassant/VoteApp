const jwt = require('jsonwebtoken');
const User = require('../models/user');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  console.log('checking...');
  if (!req.headers.authorization) {
    //console.error('no authorisation header found');
    const error = new Error('No Authorization Header');
    error.name = 'No authorization header found';
    return next(error);//res.status(401).json({ message: 'Unauthorized user!' });
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  //console.log('token', token);
  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      console.log(err);
      //console.error('verification error');
      const error = new Error('Verification Error');
      error.name = 'Authentication failed. Try to log in again';
      return next(error);//res.status(401).json({ message: 'Authentication failed. Try to log in again.' });
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        //console.error('no such user found error');
        const error = new Error('No User Found');
        error.name = 'Authentication failed. User not found';
        return next(error);//res.status(401).json({ message: 'Authentication failed. User not found.' });
      }

      req.user = {
        id: userId
      };

      console.log('authorisation successful');
      return next();
    });
  });
};