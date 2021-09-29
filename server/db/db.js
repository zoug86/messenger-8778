const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:123123h@localhost/messenger", {
  logging: false
});

module.exports = db;
