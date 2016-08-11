var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

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


  Booking.belongsTo(Pad);

  Booking.sync({force: true});

  module.exports = Booking;
