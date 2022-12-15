const {Sequelize} =require('sequelize')
const {db} = require("../config/db");

const userSchema =db.define(
  "USER",
  {
    id: {
      type: Sequelize.INTEGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allownull: false,
    },
    ex_date: {
      type: Sequelize.DATE,
      allownull: false,
      default:Date.now
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = userSchema;