USE employee_db;

SELECT department.name AS department, deparment_id FROM role
JOIN department ON department_id=department.id;