const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost/${process.env.POSTGRES_DATABASE}`, {
  logging: false
});

module.exports = db;
