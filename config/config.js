module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "apex",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"
  }
};

// {
//   "development": {
//     "username": "postgres",
//     "password": null,
//     "database": "apex",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "operatorsAliases": false
//   },
//   "production": {
//     "url": "process.env.DB_URL",
//     "username": "process.env.DB_USERNAME",
//     "password": "process.env.DB_PASSWORD",
//     "database": "process.env.DB_NAME",
//     "host": "process.env.DB_HOSTNAME",
//     "dialect": "postgres"
//   }
// }
