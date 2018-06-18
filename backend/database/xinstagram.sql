DROP DATABASE IF EXISTs xinstagram;
CREATE DATABASE xinstagram;

\c xinstagram

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  phone VARCHAR(15),
  email VARCHAR NOT NULL,
  private BOOLEAN NOT NULL);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users);

CREATE TABLE friends (
  friend_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  friends_with INTEGER);

CREATE TABLE photo_likes (
  photo_likes_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  photo_id INTEGER REFERENCES photos);

CREATE TABLE comments (
  comments_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  comment_by INTEGER);

INSERT INTO users (username, password, phone, email, private) VALUES ('Xavier', '$2a$10$9Qd8hOUaddxTBoh8EmzLnumDRTpj8Xsez4dtKvIBQ.uprt/z40t2K', '7187102625', 'gmail', false);
