const { DataTypes } = require('sequelize');
const db = require('../db');

const Team = db.define('team', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  imageURL: {
    type: DataTypes.TEXT,
    validate: {
      isUrl: true,
    },
    defaultValue:
      'https://images.pexels.com/photos/6229271/pexels-photo-6229271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
});

module.exports = Team;
