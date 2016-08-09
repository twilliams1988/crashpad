var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/crashpad_development');

  var Space = sequelize.define('space', {
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

  // force: true will drop the table if it already exists
  Space.sync({force: true}).then(function () {
    // Table created
    return Space.create({
      name: 'Terry\'s House',
      description: 'This is a description',
      price: 200
    });
  });
