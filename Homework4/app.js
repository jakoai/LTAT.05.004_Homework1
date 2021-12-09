const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
