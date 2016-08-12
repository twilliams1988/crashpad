// var Sequelize = require('sequelize');
// var connection = require('../config/sequelize.js');
//
//   var Pad = connection.define('pad', {
//     id: {
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//       autoIncrement: true
//     },
//     name: {
//       type: Sequelize.STRING
//     },
//     location: {
//       type: Sequelize.STRING
//     },
//     description: {
//       type: Sequelize.TEXT
//     },
//     price: {
//       type: Sequelize.DECIMAL
//     },
//     availableFrom: {
//       type: Sequelize.DATE
//     },
//     availableTo: {
//       type: Sequelize.DATE
//     }
//   });
//
//   var Booking = connection.define('booking', {
//     id: {
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//       autoIncrement: true
//     },
//     bookingDate: {
//       type: Sequelize.DATE
//     }
//   });
//
//   var bcrypt = require('bcrypt');
//   var salt = bcrypt.genSaltSync(10);
//
//   var User = connection.define('user', {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true},
//     firstName: {
//       type: Sequelize.STRING,
//       validate: {notEmpty: { msg: 'First name is required' }}},
//     lastName: {
//       type: Sequelize.STRING,
//       validate: {notEmpty: { msg: 'Last name is required' }}},
//     email: {
//       type: Sequelize.STRING,
//       unique: { msg: 'Email already registered' },
//       validate: {isEmail: { msg: 'Invalid email.' }, notEmpty: { msg: 'The email is required' }}},
//     passwordDigest: {
//       type: Sequelize.STRING,
//       validate: {notEmpty: true}
//     }});
//
//   Pad.hasMany(Booking);
//   Pad.belongsTo(User);
//
//
//   Pad.sync();
//
//   module.exports = Pad;
