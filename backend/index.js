const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err.message)
        })



const usersRoutes = require('./routes/users.route')

//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',usersRoutes)


app.listen(8000,()=>{
    console.log("servidor puerto 3000")
})
