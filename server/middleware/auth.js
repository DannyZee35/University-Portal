const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const dotenv = require('dotenv').config();

// Modify the authMiddleware function to add the decoded token to the req object
const authMiddleware = (allowedRoles) => {
  return async (req, res, next) => {
    let token;

    // Set response headers to allow CORS
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    // Check if the Authorization header exists in the request
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        // Get the token from the request header
        token = req.headers.authorization.split(' ')[1];

        // Verify the token using the secret key
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        // Store the decoded token in the request object
        req.decodedToken = decodedToken;

        // Get the user's role from the decoded token
        const userRole = decodedToken.user.role;

        // Check if the user's role is allowed
        if (!allowedRoles.includes(userRole)) {
          return res.status(403).send('Access denied');
        }

        // Get the user object from the database using the decoded token's id field
        const user = await User.findById(decodedToken.id);

        if (!user) {
          return res.status(401).send('Unauthorized');
        }

        // Store the user object in the request object
        req.user = user;

        // Continue to the next middleware function
        next();
      } catch (error) {
        console.error(error);
        return res.status(401).send('Unauthorized');
      }
    } else {
      return res.status(401).send('Unauthorized');
    }
  };
};

module.exports = {
  authMiddleware,
};
