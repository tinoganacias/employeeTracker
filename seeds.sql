INSERT INTO department (NAME)
VALUES ("Engineeering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO title (title,salary,department_id)
VALUES
("Lead Engineer",150000,001),
("Software Engineer",120000,001),
("Account Manager",160000,002),
("Accountant",125000,002),
("Legal Team Lead",250000,003),
("Lawyer",190000,003),
("Sales Lead",100000,004),
("Salesperson",80000,004);

INSERT INTO EMPLOYEE (first_name,last_name,title,department,pay,manager_id)
VALUES("Tino","Ganacias","Lead Engineer","Engineering",150000, NULL),
("Terra","Luthi","Account Manager","Finance",160000, NULL),
("Ella","Luthi","Salesperson","Sales",80000, 7),
("Caden","Luthi","Software Engineer","Engineering",120000, 1),
("Malia","Pinder","Accountant","Finance",125000, 2),
("Athina","Blesoff-Ganacias","Lawyer","Legal",190000,8),
("Margot","Arellano","Sales Lead","Sales",100000,NULL),
("Philip","Christofides","Legal Team Lead","Legal",250000,NULL);






