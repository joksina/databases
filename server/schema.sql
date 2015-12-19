CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  Id INT NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY(Id)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  texts varchar(125) NOT NULL,
  username varchar(30) NOT NULL,
  userId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(Id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

