const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { 
        type: String,
        required: true 

    },

    email: { 
         type: String,
         required: true 
    },

    password: { 
        type: String,
        required: true,
        minlength: 7 

    },

    isAdmin: { 
        type: Boolean,
        required: true , 
        default: false
    },

    status: {
        type: String,
		default: 'active'
    }

        
    
});

module.exports = mongoose.model('User', userSchema);
