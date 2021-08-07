USE DATABASE meal_planner_dbõ
CREATE TABLE child (id int, name varchar(8), user_id int);
CREATE TABLE childmeal (id int auto_increment, user_id integer, PRIMARY KEY (id) );
CREATE TABLE meals (id int auto_increment, PRIMARY KEY (id), name varchar(8), has_nuts boolean, has_meat boolean, has_gluten boolean, description varchar(99), user_id integer  );
INSERT INTO child ( name ) VALUES ("Sam");