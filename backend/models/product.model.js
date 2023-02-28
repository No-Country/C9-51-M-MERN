const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        requiere: true,
        allowNull: false,
      },

    description: {
        type: String,
        requiere: true,
      },
    
    image: {
        type: String,
        requiere: true,
      },

    quantity: {
        type: Number,
        requiere: true,
      },

    price: {
        type: Number,
        requiere: true,
      },

    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
      },

    status: {
        type: String,
        default: 'active',
    },

});

module.exports = mongoose.model('Product', productSchema);
