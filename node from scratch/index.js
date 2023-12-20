const express = require('express');
const app = express()
const port  = 80;
const mongoose = require('mongoose');
const morgan  = require('morgan');
const userRoute = require('./Route/user');

// This is for connecting the mongo db //
mongoose.connect("mongodb+srv://test:test@cluster0.7clrshb.mongodb.net/").then(()=>{
    console.log("mongo db connected")
}).catch((err) => 
console.log(err)
)
// This is for connecting the mongo db //

//using morgan

app.use(morgan('tiny'))
app.use(express.json())
app.use('/user' , userRoute)


app.get('/' , (req , res)=>{
    res.send('App is running successfullly')
})

app.listen(port , (req , res)=>{
console.log('App is running on port 80')
})