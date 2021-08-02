SELECT employee.id,first_name,last_name,department.name,title,salary,manager_id 
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id;

