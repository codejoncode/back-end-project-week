// Update with your config settings.
require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: 'lambda',
  user: "jonathanH",
  password: 'pass',
  /*user: process.env.DB_USER
    password: process.env.DB_pass   */
};
const dbConnection = process.env.DATABASE_URL || localPg;
console.log(`\n\n ${dbConnection}\n\n`);


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./data/migrations",
    },
    seeds: {
      directory: './data/seeds',
    }
  }

};


