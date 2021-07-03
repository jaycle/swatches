module.exports = {
  "development": {
    "username": "postgres",
    "password": "mypass",
    "database": "postgres",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": "batyr.db.elephantsql.com",
    "dialect": "postgres"
  }
}
