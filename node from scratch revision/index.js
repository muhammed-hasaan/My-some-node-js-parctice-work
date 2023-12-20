const express = require('express');
const app = express();
const port = 80;
const mongoose = require('mongoose')
const userRouter = require('./Register/user')
const path = require('path');

mongoose.connect("mongodb+srv://retest:retest@cluster0.7clrshb.mongodb.net/").then(()=>{
console.log("Mongo Db Connected")
}).catch((err)=>{
console.log(err)
})
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// for pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view')); // Use 'views' instead of 'view'

app.use(express.json())
app.use('/user' , userRouter)
// app.get('/form123' , (req , res)=>{
//     res.render('form.pug')
// })

app.listen(port , ()=>{
    console.log("your server is running on port 80")
})