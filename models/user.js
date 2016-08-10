var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

var User = connection.define('user', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  firstName: {type: Sequelize.STRING, validate: {notEmpty: true}},
  lastName: {type: Sequelize.STRING, validate: {notEmpty: true}},
  email: {type: Sequelize.STRING, unique: true, validate: {isEmail: true, notEmpty: true}},
  passwordEncrypt: {type: Sequelize.STRING, validate: {notEmpty: true}}});

User.sync({force: false});
module.exports = User;
