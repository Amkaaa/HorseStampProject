const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lastname: {
      type: Sequelize.STRING
    },
    stamp_name: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    photo: {
      type: Sequelize.STRING
    },
    define:{
      type: Sequelize.STRING
    },
    aimag: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);