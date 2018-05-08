const Sequelize = require("sequelize")
const sequelize = require("../db")

const Product = sequelize.define(
  "product",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: Sequelize.STRING
  },
  {
    tableName: "products",
    timestamps: false
  }
)

module.exports = Product
