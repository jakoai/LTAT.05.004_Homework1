const express = require('express');
const { getPosts } = require('../database');

const router = express.Router();

router.get('/', async (_req, res) => {
  res.json({
    posts: await getPosts(),
  });
});

router.post('/', async (_req, res) => {
    addPost(req.body[title], req.body[content], req.body[url]);
    res.sendStatus(200);
});

module.exports = router;
