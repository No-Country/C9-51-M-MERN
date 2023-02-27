const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productId: {
        type :mongoose.Schema.ObjectId,
        ref: "Product",

      },

    quantity: {
        type: Number,
        requiere: true,
    }, 
      
    status: {
        type: String,
		    default: 'active'
            
    },
});

module.exports = mongoose.model('Cart', cartSchema);
