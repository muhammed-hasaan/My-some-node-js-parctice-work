const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded())
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'view')); // Use 'views' instead of 'view'

app.get('/demo', (req, res) => {
  res.render('demo', { title: 'Hey', message: 'Hello there!' });
});

app.get('/de', (req, res) => {
  const description = "This is running successfully";
  const params = {'title' : "This is running successfully", "content" : description}
  res.status(200).render('index.pug' , params);
});

app.listen(port, () => {
  console.log('Server is running');
});
