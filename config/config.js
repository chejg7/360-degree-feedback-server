require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.MY_DB_USERNAME,
    "password": process.env.MY_DB_PASSWORD,
    "database": process.env.MY_DB_DBNAME,
    "host": process.env.MY_DB_HOST,
    "port": process.env.MY_DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
