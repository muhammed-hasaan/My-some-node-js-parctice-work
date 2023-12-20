const express = require('express');
const path  = require('path');
const app = express();
const port  = 80;
const fs = require('fs');

app.use(express.urlencoded());

app.set('view engine' , 'pug');
app.set('views' ,path.join(__dirname, 'views'));

app.post('/form' , (req , res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const text = req.body.text
    const formdata = `The Client name is : ${name}. client email : ${email}
    client password : ${password} and some things more about client : ${text}`
    fs.writeFileSync('FormData.txt' , formdata)
    const params = {'message' : 'Your form has been submitted seccessfully !'}
    res.status(200).render('form.pug' , params)
})


app.listen(port , ()=>{
    console.log("ok the server is running on port 80")
})