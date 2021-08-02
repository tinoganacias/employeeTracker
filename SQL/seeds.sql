INSERT INTO department (NAME)
VALUES ("Engineeering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO ROLE (title,salary,department_id)
VALUES
("Lead Engineer",150000,001),
("Software Engineer",120000,001),
("Account Manager",160000,002),
("Accountant",125000,002),
("Legal Team Lead",250000,003),
("Lawyer",190000,003),
("Sales Lead",100000,004),
("Salesperson",80000,004);

INSERT INTO EMPLOYEE (id,first_name,last_name,role_id,manager_id)
VALUES(1,"Tino","Ganacias",1,4),
(2,"Terra","Luthi",3,5),
(3,"Ella","Luthi",8,NULL),
(4,"Caden","Luthi",2,NULL),
(5,"Malia","Pinder",4,NULL),
(6,"Athina","Blesoff-Ganacias",6,NULL),
(7,"Margot","Arellano",7,3),
(8,"Philip","Christofides",5,6);






