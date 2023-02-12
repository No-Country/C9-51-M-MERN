const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        requiere: true,
        allowNull: false,
      },
      description: {
        type: String,
        requiere: true,
        allowNull: false,
      },
      quantity: {
        type: Number,
        requiere: true,
        allowNull: false,
      },
      price: {
        type: Number,
        requiere: true,
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
module.exports = { Product }