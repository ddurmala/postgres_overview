\c postgres;

DROP DATABASE IF EXISTS students_db;

CREATE DATABASE students_db;

\c students_db;

CREATE TABLE courses (
	id SERIAL PRIMARY KEY,
	course_name VARCHAR(250),
	course_type VARCHAR(250)
);

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(200),
	last_name VARCHAR(200),
	course_name VARCHAR(250)
);


-- SELECT * FROM students

-- UPDATE students SET last_name = 'Durmala' WHERE last_name = 'Reber'

-- DELETE FROM students WHERE first_name = 'Kevin'

-- INSERT INTO students (first_name, last_name) VALUES
-- 	('Julie', 'Olsen'),
-- 	('Sara','Brown'),
-- 	('Kevin', 'Durmala')