DROP DATABASE IF EXISTs xinstagram;
CREATE DATABASE xinstagram;

\c xinstagram

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  phone VARCHAR(15),
  email VARCHAR NOT NULL,
  profile_pic VARCHAR,
  private BOOLEAN NOT NULL);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  url VARCHAR NOT NULL);

CREATE TABLE follows (
  follow_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  follows_user INTEGER);

CREATE TABLE photo_likes (
  photo_likes_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  photo_id INTEGER REFERENCES photos);

CREATE TABLE comments (
  comments_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  comment_by INTEGER);

INSERT INTO users (username, password, phone, email, profile_pic, private) VALUES ('Xavier', '$2a$10$9Qd8hOUaddxTBoh8EmzLnumDRTpj8Xsez4dtKvIBQ.uprt/z40t2K', '7187102625', 'gmail', 'https://icon2.kisspng.com/20180518/wby/kisspng-computer-icons-x-letter-clip-art-5aff5c67b7bdf6.5490574715266847757526.jpg', false),
('Matt','$2a$10$9Qd8hOUaddxTBoh8EmzLnumDRTpj8Xsez4dtKvIBQ.uprt/z40t2K', '7187102625', 'hotmail', 'https://icon2.kisspng.com/20180518/wby/kisspng-computer-icons-x-letter-clip-art-5aff5c67b7bdf6.5490574715266847757526.jpg', false),
('Reed','$2a$10$9Qd8hOUaddxTBoh8EmzLnumDRTpj8Xsez4dtKvIBQ.uprt/z40t2K', '3475673782', 'mail', 'https://icon2.kisspng.com/20180518/wby/kisspng-computer-icons-x-letter-clip-art-5aff5c67b7bdf6.5490574715266847757526.jpg', false),
('Lev','$2a$10$9Qd8hOUaddxTBoh8EmzLnumDRTpj8Xsez4dtKvIBQ.uprt/z40t2K', '7187102625', 'hotmail', 'https://icon2.kisspng.com/20180518/wby/kisspng-computer-icons-x-letter-clip-art-5aff5c67b7bdf6.5490574715266847757526.jpg', false);

INSERT INTO follows (user_id, follows_user) VALUES (1,2),(1,4),(2,1),(2,3),(2,4),(3,4),(4,2),(4,3);
