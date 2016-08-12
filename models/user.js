var Sequelize = require('sequelize');
var connection = require('../config/sequelize.js');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

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

  var Booking = connection.define('booking', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    bookingDate: {
      type: Sequelize.DATE
    }
  });

  var Pad = connection.define('pad', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DECIMAL
    },
    availableFrom: {
      type: Sequelize.DATE
    },
    availableTo: {
      type: Sequelize.DATE
    }
  });

  User.hasMany(Booking);
  User.hasMany(Pad);
  Pad.belongsTo(User);
  Pad.hasMany(Booking);
  Booking.belongsTo(Pad);
  Booking.belongsTo(User);


User.sync().then(function(user) {
Pad.sync().then(function(user) {
Booking.sync();
});
});



module.exports = User;
module.exports = Pad;
module.exports = Booking;


module.exports.createUser = function(newUser, callback) {
  bcrypt.hash(newUser.passwordDigest, salt, function(err, hash) {
    newUser.passwordDigest= hash;
    newUser.save(callback);
  });
};

module.exports.validPassword = function(password) {
  return bcrypt.compareSync(password, User.get('passwordDigest'));
};
