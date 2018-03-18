CREATE DATABASE test;

USE test;
/* Create other tables and define schemas for them here! */
CREATE TABLE photos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  photos JSON
);
CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  join_date VARCHAR(255) NOT NULL,
  pic VARCHAR(255)
);

-- CREATE TABLE rooms (
--   room_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   room_name VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   msg_id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   msg_text VARCHAR(255) NOT NULL,
--   user_id INT(6) UNSIGNED NOT NULL,
--   room_id INT(6) UNSIGNED NOT NULL,
--   msg_date TIMESTAMP,
--   FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
--   FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO users (user_name) VALUES ('Mike');
-- INSERT INTO users (user_name) VALUES ('Andy');
-- INSERT INTO users (user_name) VALUES ('Steph');
-- INSERT INTO users (user_name) VALUES ('Pocahontes');
-- INSERT INTO rooms (room_name) VALUES ('Lobby');
-- INSERT INTO rooms (room_name) VALUES ('Hack Reactor');
-- INSERT INTO rooms (room_name) VALUES ('PoopClub');
-- INSERT INTO rooms (room_name) VALUES ('Bootyzone');
-- INSERT INTO messages (user_id, room_id, msg_text) VALUES (1, 1, 'this partner yo.');
-- INSERT INTO messages (user_id, room_id, msg_text) VALUES (2, 4, 'MIKE MIKE MIKE.');
-- INSERT INTO messages (user_id, room_id, msg_text) VALUES (3, 3, 'I love lamp.');
-- INSERT INTO messages (user_id, room_id, msg_text) VALUES (2, 3, 'Cheese is gud.');