const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        allowNull: false,
      },

    description: {
        type: String,
        require: true,
      },
    
    image: {
        type: String,
        require: true,
      },

    quantity: {
        type: Number,
        require: true,
      },

    price: {
        type: Number,
        require: true,
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
