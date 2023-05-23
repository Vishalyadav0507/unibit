const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/login');

// Handle user login
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    // If user not found or password doesn't match, return error
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    // Return the token as the response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
