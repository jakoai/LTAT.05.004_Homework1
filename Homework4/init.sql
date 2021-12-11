CREATE DATABASE wad;

\c wad

CREATE USER wad WITH PASSWORD 'wad';
GRANT ALL PRIVILEGES ON DATABASE wad TO wad;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  url TEXT,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Sample posts

INSERT INTO posts (title, body, url) VALUES ('First post', 'Have a nice day!', 'https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_960_720.png');
INSERT INTO posts (title, body, url) VALUES ('Second post', 'WE ARE DOOMED!', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Doom_Cover.jpg/220px-Doom_Cover.jpg');
INSERT INTO posts (title, body, url) VALUES ('Post #3', 'What tree is it?', 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Eucalyptus_Rainbow_4_650x.jpg?v=1627506621');
INSERT INTO posts (title, body, url) VALUES ('NEED HELP', 'I am moving out, so two cute puppies needs new home. Call 900 2255 for adoption.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e7AaWXpeIn8xyWSAb0zZUBgu7oRI6vWDMw&usqp=CAU');
INSERT INTO posts (title, body, url) VALUES ('Dogs', 'Dogs are the best!', 'https://www.dogbreedinfo.com/images23c/Pug-Puppy-Dog-Pictures.jpg');
