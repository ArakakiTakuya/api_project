const knex = require("knex");
const config = require("./config.js");

const db = knex(config.db);

module.exports = db;
