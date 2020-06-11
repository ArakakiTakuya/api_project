require("dotenv").config();

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL || process.env.LOCAL_CONFIG,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seed",
  },
};
