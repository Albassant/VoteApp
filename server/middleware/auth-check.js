const jwt = require('jsonwebtoken');
const User = require('../models/user');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  console.log('checking...');
  if (!req.headers.authorization) {
    console.error('no authorisation header found');
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { 
      console.error('verification error'); 
      return res.status(401).end(); 
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        console.error('no such user found error'); 
        return res.status(401).end();
      }

      req.user = {
        id: userId
      };
      
      return next();
    });
  });
};