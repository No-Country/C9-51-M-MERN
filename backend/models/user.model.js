const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 7 }
    //colocar el estatus , super usuario
});
//Creo que seria bueno definir lo modelos con mayusculas al proncipip "User"
module.exports = mongoose.model('user', userSchema);