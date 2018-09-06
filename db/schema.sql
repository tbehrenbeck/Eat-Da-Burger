
CREATE DATABASE item_db;
USE item_db;

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	need BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
