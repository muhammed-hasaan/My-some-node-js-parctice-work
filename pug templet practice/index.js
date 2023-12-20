const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded())

// for pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view')); // Use 'views' instead of 'view'

app.get('/', (req, res) => {
  res.status(200).render('home.pug');
});
app.get("/base", (req, res)=>{ 
    res.status(200).render("base.pug");
});

app.listen(port, () => {
  console.log('Server is running');
});
