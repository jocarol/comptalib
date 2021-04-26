const DataTypes = require('sequelize')
const {Model} = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../models/index.js')

const sequelize = db.sequelize

class Companies extends Model {}
Companies.init({
  name: DataTypes.STRING,
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize, modelName: 'Companies' });

module.exports = Companies