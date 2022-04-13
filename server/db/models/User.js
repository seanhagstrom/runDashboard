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
// bcrypt docs: https://www.npmjs.com/package/bcrypt

User.prototype.checkPassword = function (passwordToVerify) {
  return bcrypt.compare(passwordToVerify, this.password);
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw 'No user found!';
    }
    return user;
  } catch (ex) {
    const error = Error('Nice Try..');
    error.status = 401;
    throw error;
  }
};

const hashPassword = async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
};

User.beforeCreate(hashPassword);

module.exports = User;
