require("dotenv").config();

module.exports = {
//   env: process.env.local.NODE_ENV,
//   port: process.env.local.PORT,
  db: process.env.DB_URI,
};
