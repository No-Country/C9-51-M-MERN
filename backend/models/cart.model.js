const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type :mongoose.Schema.ObjectId,
        ref: "User",

      },
      
      status: {
        type: String,
		    default: 'active'
            
      },
});

module.exports = mongoose.model('Cart', cartSchema);
