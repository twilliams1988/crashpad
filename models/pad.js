var Sequelize = require('sequelize');
var connection = require('../config/sequelize.js');

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

  Pad.hasMany(Booking);

  Pad.sync({force: false});

  module.exports = Pad;
