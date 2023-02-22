INSERT INTO department (department_name)
VALUES 
('Management'), 
('Assistants'), 
('Office Administrator');

INSERT INTO roles (title,salary,department_id)
VALUES
("Deputy Director", 100000, 1),
("Parks Director", 150000, 1),
("Executive Assistant", 80000, 2),
("Assistant", 60000, 2),
("Administrator", 75000, 3);

INSERT INTO employee (first_name,last_name,roles_id,manager_id)
VALUES
("Leslie", "Knope", 1, 1),
("Ron", "Swanson", 2, 1),
("April", "Ludgate", 3, 1),
("Tom", "Haverford", 4, 1),
("Donna", "Meagle", 5, 1);


