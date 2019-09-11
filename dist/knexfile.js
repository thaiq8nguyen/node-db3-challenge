"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.knexConfig = void 0;
// Update with your config settings.
const knexConfig = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    // needed for sqlite
    connection: {
      filename: "./src/data/schemes.db3"
    },
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  }
};
exports.knexConfig = knexConfig;
