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
  return runQuery(`INSERT INTO posts(title, body, url, likes) VALUES (${title}, ${body}, ${url}, 0)`);
};
