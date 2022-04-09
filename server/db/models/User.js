const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

const SALT_ROUNDS = 10;

const User = db.define('user', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
  },
});

// User prototype to generate token
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

User.prototype.checkPassword = function (passwordToVerify) {
  return bcrypt.compare(passwordToVerify, this.password);
};

const hashPassword = async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
};

User.beforeCreate(hashPassword);

module.exports = User;
