const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryShema = new Schema(
    {
        name: {
			type: String,
			requiere: true,
		},
		
		status: {
			type: String,
			default: 'active',
		}, 

})

module.exports = mongoose.model('Category', categoryShema);