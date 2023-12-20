const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('text.html' , 'utf-8');

const server = http.createServer((req , res)=>{
//    this is use for to read the file of html 4
// res.writeHead(200 , {'Content-type':'text/html'})
res.end(data)
})

server.listen(80 , ()=>{
    console.log("server is running on port 80")
})