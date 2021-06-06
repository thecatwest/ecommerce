// import Model class and DataTypes object from sequelize
// Model class is created on project models from using extends keyword so that Category inherits all functionality of Model class
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create Category model
class Category extends Model {}

// define table columns and configs
// use .init() method to initialize model's data and config, passing in two objects as arguments
Category.init(
  // first object defines columns and data types for columns
  {
    // define id column
    id: {
      // use special sequelize DataTypes object to provide what type of data it is
      type: DataTypes.INTEGER,
      // set not null
      allowNull: false,
      // set Primary Key
      primaryKey: true,
      // auto-increment
      autoIncrement: true
    },
    {
      define
    }
  },
  // second object configures certain options for table
  {
    // pass in imported sequelize connection (direct connection to db)
    sequelize,
    // don't auto-create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of db table
    freezeTableName: true,
    // use underscores instead of camelCasing
    underscored: true,
    // force model name to remain lowercase in db
    modelName: 'category',
  }
);

// export model to use in other part of app
module.exports = Category;
