const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(401).json({ message: 'Authentication failed. User not found.' });
      }

      // Compare the password
      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      }

      // Generate and sign the JWT token
      const token = jwt.sign({ sub: user._id }, config.secretKey, { expiresIn: config.expiresIn });
      res.json({ token: token });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    }

  } catch (error) {
    //res.status(500).json({ error: 'Internal Server Error' });
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is already taken
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email is already taken.' });
    }

    // Create a new user
    const newUser = await User.createUser(email, password);
    res.status(201).json({ message: 'User created successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
    //res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
