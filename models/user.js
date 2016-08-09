// var Sequelize = require('sequelize');
//
// var sequelize = new Sequelize('postgres://localhost:5432/crashpad_development');
//
//
//   var User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
//
//   // force: true will drop the table if it already exists
//   User.sync({force: true}).then(function () {
//     // Table created
//     return User.create({
//       firstName: 'Tommy',
//       lastName: 'Williams'
//     });
//   });
