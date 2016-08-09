var Sequelize = require('sequelize');
var sequelize = new Sequelize('crashpad_development', null, null, {
        dialect: "postgres",
        port: 5432,
        sync: { force: false }
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var Space = sequelize.define('space', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL
    }
  });

  Space.sync({force: false});

  module.exports = Space;
