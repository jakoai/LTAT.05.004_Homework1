const express = require('express');
const { getPosts, addPost } = require('../database');

const router = express.Router();

router.get('/', async (_req, res) => {
  res.json({
    posts: await getPosts(),
  });
});

router.post('/', async (_req, res) => {
    console.log(_req.body)
    data = _req.body
    addPost(data.title,data.body, data.url);
    res.sendStatus(200);
});

module.exports = router;
