const express = require('express');
const { join } = require('path');

require('dotenv').config();

const postsRouter = require('./routes/posts');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));

app.use('/posts', postsRouter);

app.get('/', async (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
