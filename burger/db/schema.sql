CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100),
	devoured boolean,
	date timestamp DEFAULT 0,
	PRIMARY KEY (id)
)