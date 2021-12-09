const express = require('express');
const { join } = require('path');

require('dotenv').config();

const { getPosts } = require('./database');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.render('index', {
    val: await getPosts(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
