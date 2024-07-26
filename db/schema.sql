\c postgres;

DROP DATABASE IF EXISTS student_app_db;

CREATE DATABASE student_app_db;

\c student_app_db;

CREATE TABLE courses (
	id SERIAL PRIMARY KEY,
	course_name VARCHAR(250),
	course_type VARCHAR(250)
);

CREATE TABLE groups (
	id SERIAL PRIMARY KEY,
	group_name VARCHAR(200)
);

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	course_id INT NOT NULL,
	group_id INT,
	group_leader_id INT,
	FOREIGN KEY(course_id) REFERENCES courses(id),
	FOREIGN KEY(group_id) REFERENCES groups(id),
	FOREIGN KEY(group_leader_id) REFERENCES students(id)
);

-- a id of another student who is their leader


-- SELECT * FROM students

-- UPDATE students SET last_name = 'Durmala' WHERE last_name = 'Reber'

-- DELETE FROM students WHERE first_name = 'Kevin'

-- INSERT INTO students (first_name, last_name) VALUES
-- 	('Julie', 'Olsen'),
-- 	('Sara','Brown'),
-- 	('Kevin', 'Durmala')