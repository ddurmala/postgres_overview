INSERT INTO courses (course_name, course_type) VALUES
    ('FSF', 'Web Dev'),
    ('DV', 'Data Visulaization'),
    ('Cyber', 'Cyber Security');

INSERT INTO groups (group_name) VALUES
    ('video gamers'),
    ('knitting'),
    ('soccer');

INSERT INTO students (
    first_name,
    last_name, 
    course_id, 
    group_id,
    group_leader_id
) VALUES
 ('John', 'Smith', 1, 2, 3),
 ('Devon', 'Dale', 2, NULL, 3),
 ('Kali', 'Jones', 1, 3, NULL),
 ('Alex', 'Reber', 3, NULL, 3);
