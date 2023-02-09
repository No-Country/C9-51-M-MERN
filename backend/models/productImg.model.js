const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productImgSchema = new Schema({
    imgUrl: {
        type: String,
        requiere: true,
        allowNull: false,
      },
      productId: {
        type: mongoose.Schema.ObjectId,
        requiere: true,
        ref: 'Product',
      },
      status: {
        type: String,
		   default: 'active',
      },
});

module.exports = mongoose.model('ProductImg', productImgSchema);

