const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "stamp",{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stampname: {
      type: Sequelize.STRING
    },
    date1: {
      type: Sequelize.DATE
    },
    photo: {
      type: Sequelize.STRING,
      required: true
    },
    define:{
      type: Sequelize.STRING
    },
    userid:{
        type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
)