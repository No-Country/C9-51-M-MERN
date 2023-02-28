const express = require('express');
const app = express();
const cors = require('cors')
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
const productRoutes = require('./routes/products.route')
const categoryRouter = require('./routes/category.route')
//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/users',usersRoutes)
app.use('/products',productRoutes)
app.use('/category',categoryRouter)


app.listen(8000,()=>{
    console.log("servidor puerto 8000")
})
