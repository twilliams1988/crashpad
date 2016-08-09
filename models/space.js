var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

  var Space = connection.define('space', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DECIMAL
    }
  });

  Space.sync({force: false});

  module.exports = Space;
