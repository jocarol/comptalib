const config = {
  HOST: "remotemysql.com",
  USER: "w4aDjmQsli",
  PASSWORD: "mF7rcsiVZ6",
  DB: "w4aDjmQsli",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = config