const express = require('express');
const path  = require('path');
const app = express();
const port  = 80;
const fs = require('fs');

app.use(express.urlencoded());
app.set('view engine' , 'pug');
app.set('views' ,path.join(__dirname, 'view'));

app.post('/todo' , (req , res)=>{
  const name = req.body.name
  //  console.log(name)
   fs.writeFileSync('todoData.txt' , name)
   const dat = fs.readFileSync('todoData.txt' , 'utf-8')
   console.log( 'get file data -->',dat)
   const params = {'data':dat}
   res.status(200).render('index.pug' , params)
  })


app.listen(port , ()=>{
    console.log("ok the server is running on port 80")
})