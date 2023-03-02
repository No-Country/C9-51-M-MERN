const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { 
        type: String,
        require: true 

    },

    email: { 
         type: String,
         require: true 
    },

    password: { 
        type: String,
        require: true,
        minlength: 7 

    },

    isAdmin: { 
        type: Boolean,
        require: true , 
        default: false
    },

    status: {
        type: String,
		default: 'active'
    }

        
    
});

module.exports = mongoose.model('User', userSchema);
