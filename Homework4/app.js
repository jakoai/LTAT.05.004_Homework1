const express = require('express');
const { join } = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    val: 'ok',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
