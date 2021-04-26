const { Model, DataTypes, Sequelize } = require('sequelize')
// const { sequelize } = require('../models/index.js')
const db = require('../models/index.js')

const sequelize = db.sequelize

class Users extends Model { }
Users.init({
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize, modelName: 'Users' });

module.exports = Users
