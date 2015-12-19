DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname varchar(30) DEFAULT 'LOBBY'
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  texts varchar(125) NOT NULL,
  username varchar(30) NOT NULL,
  roomId INT NOT NULL,
  roomname varchar(30) NOT NULL,
  userId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(id),
  FOREIGN KEY(roomId) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO messages(texts, username, userId, roomId) VALUES('Hello!!', 'John', '1', '1');
-- INSERT INTO users(username) VALUES('John');