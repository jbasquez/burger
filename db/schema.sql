DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers_db
(
    id int not null auto_increment primary key,
    burger_name varchar(30) NOT NULL,
    devoured BOOLEAN DEFAULT false
);