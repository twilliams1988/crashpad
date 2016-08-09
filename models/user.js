var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

  var User = connection.define('user', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING
    }
  });
User.sync({force: false});
module.exports = User;
