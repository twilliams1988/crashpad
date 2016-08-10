var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

  var Pad = connection.define('pad', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
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

  Pad.sync({force: false});

  module.exports = Pad;
