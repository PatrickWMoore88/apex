module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "apex",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres"
  }
};
