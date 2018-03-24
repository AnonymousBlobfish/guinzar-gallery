CREATE DATABASE test;

USE test;
/* Create other tables and define schemas for them here! */
CREATE TABLE photos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  photos JSON
);
CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  -- join_date VARCHAR(255) NOT NULL,
  pic VARCHAR(8)
);

-- mongoexport --db=wegot --collection=photos --type csv --fields id,name,photos --out photos.csv
-- mongoexport --db=wegot --collection=users --type csv --fields id,name,pic --out users.csv
-- load data infile '~/hr/guinzar-gallery/database/photos.csv' into table photos fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 lines;