var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

var User = connection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true},
  firstName: {
    type: Sequelize.STRING,
    validate: {notEmpty: { msg: 'First name is required' }}},
  lastName: {
    type: Sequelize.STRING,
    validate: {notEmpty: { msg: 'Last name is required' }}},
  email: {
    type: Sequelize.STRING,
    unique: { msg: 'Email already registered' },
    validate: {isEmail: { msg: 'Invalid email.' }, notEmpty: { msg: 'The email is required' }}},
  passwordDigest: {
    type: Sequelize.STRING,
    validate: {notEmpty: true}
  }});

User.sync({force: false});
module.exports = User;
