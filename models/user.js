// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String
  },
  email_verified_at: {
    type: Date
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  pinCode: {
    type: String
  },
  city: {
    type: String
  },
  birthDate: {
    type: Date
  },
  image: {
    type: String
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    default: 'student'
  },
  department: {
    department: {
      type: String
    },
    program: {
      type: String
    },
    semester: {
      type: String
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

// Hash the password before saving it
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

// Compare password
userSchema.methods.comparePassword = function (password) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
};

// Static method to create a new user
userSchema.statics.createUser = async function (email, password) {
  const User = this;
  const newUser = new User({ email, password });
  await newUser.save();
  return newUser;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
