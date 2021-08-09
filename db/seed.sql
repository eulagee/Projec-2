
DROP DATABASE meal_planner_db;
CREATE DATABASE meal_planner_db;

USE meal_planner_db;

DROP TABLE IF EXISTS user;

create table if not exists user(
                                   id int primary key auto_increment,
                                   name varchar(255)not null,
                                   email varchar(255)not null,
                                   password  varchar(255)not null
);
DROP TABLE IF EXISTS child;
create table if not exists child (
                                     id int primary key auto_increment,
                                     name varchar(255)not null,
                                     user_id int(1) not null default 0
);
DROP TABLE IF EXISTS meal;
create table if not exists meal (
                                     id int primary key auto_increment,
                                     title varchar(255)not null,
                                     user_id int(1) not null default 0
);
DROP TABLE IF EXISTS meal;
create table if not exists meal (
                                         id int primary key auto_increment,
                                         title varchar(255)not null,
                                         user_id int(1) not null default 0
);
DROP TABLE IF EXISTS child_meal;
create table if not exists child_meal (
                                         id int primary key auto_increment,
                                         name varchar(32)not null,
                                         user_id int(8) not null default 0,
                                         completed tinyint(1) not null,
                                         default_has_nuts boolean,
                                         has_meat boolean,
                                         has_gluten boolean,
                                         description varchar(99)
);
/*INSERT INTO child ( name ) VALUES ("Sam");*/

