const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryShema = new Schema(
    {
        name: {
			type: String,
			required: [true, 'Please provide a title'],
		},
		
		status: {
			type: String,
			default: 'active',
		}, 

})

module.exports = mongoose.model('Category', categoryShema);