const express = require('express');
const { getPosts, addPost } = require('../database');

const router = express.Router();

router.get('/', async (_req, res) => {
    console.log("oleme siin getis kah")
  res.json({
    post: await getSinglePost(_req.params.id),
  });
});

router.post('/', async (_req, res) => {
    console.log(_req.body)
    data = _req.body
    console.log("oleme siin postis)")
    res.redirect("/singlepost");
});

module.exports = router;
