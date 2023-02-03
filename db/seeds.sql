USE team_db;

INSERT INTO department(department_name)
VALUES
("Sales"),
("Legal"),
("HR"),
("Enineering"),
("Finanace");

INSERT INTO roles(title, salary, department_id)
VALUES
("Software Engineer", 110000, 4),
("Account Manager", 8000, 5),
("Accountant", 90000, 5),
("Lawyer", 100000, 2),
("Salesperson", 75000, 1),
("HR Specialist", 75000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("James", "Bond", 1, NULL),
("Indiana","Jones", 3, NULL),
("Ricky","Bobby", 2, NULL),
("Mike","Wazowski", 5, NULL),
("Wendy","Wu", 4 ,NULL),
("Hermione","Granger", 6, NULL);


