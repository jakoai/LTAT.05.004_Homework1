const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const runQuery = (query, ...args) => {
  return pool.query(query, ...args).then((res) => res.rows);
};

module.exports.getPosts = () => {
  return runQuery('SELECT * FROM posts');
};

module.exports.addPost = (title, body, url) => {
  return runQuery("INSERT INTO posts(title, body, url, likes) values ($1, $2, $3, 0) RETURNING*", [title, body, url]);
};

module.exports.getSinglePost = (id) => {
  return runQuery('SELECT * FROM posts WHERE id=$1', [id]);
}

module.exports.deletePost = (id) => {
  return runQuery('DELETE FROM posts WHERE id=$1', [id])
}