const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      
      status: {
        type: String,
		default: 'active'
            
      },
});

module.exports = mongoose.model('Cart', cartSchema);