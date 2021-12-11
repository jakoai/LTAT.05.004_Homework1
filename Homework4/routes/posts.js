const express = require('express');
const { getPosts, addPost } = require('../database');

const router = express.Router();

router.get('/', async (_req, res) => {
  res.json({
    posts: await getPosts(),
  });
});

module.exports = router;
