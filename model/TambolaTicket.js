const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const TambolaTicket = sequelize.define('TambolaTicket', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ticketNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  rows: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = TambolaTicket;
