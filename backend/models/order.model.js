const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderShema = new Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
        
    cartId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Cart',
      },
    totalPrice: {
        type: Number,
        allowNull: false,
      },
    status: {
        type: String,
        defaultValue: 'active',
      },
});

module.exports = mongoose.model('Order', orderShema);
