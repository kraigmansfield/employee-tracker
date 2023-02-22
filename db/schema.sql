DROP DATABASE IF EXISTS employee_db;

CREATE database employee_db;

USE employee_db;

CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(45) NOT NULL 
);

CREATE TABLE role (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(45) NOT NULL,
        salary DECIMAL(10,2) NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
        
);

CREATE TABLE employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(45) NOT NULL,
        last_name VARCHAR(45) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL,
        FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE,
        FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE CASCADE
);