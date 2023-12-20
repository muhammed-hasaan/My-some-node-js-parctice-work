const express = require('express');
const port  = 80;
const app = express();
const page = require("./static/StaticText.js")

console.log(page);


// app.use('/static', express.static('static'))

app.get('/home' , (req , res)=>{
    res.status(200).send('this is running for home page')
})
 

app.listen(port , ()=>{
console.log("server is running");
})