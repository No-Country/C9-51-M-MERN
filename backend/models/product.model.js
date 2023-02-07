const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        allowNull: false,
      },
      description: {
        type: String,
        allowNull: false,
      },
      quantity: {
        type: INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
      },
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
      status: {
        type: String,
        default: 'active',
      },
});

module.exports = mongoose.model('Product', productSchema);