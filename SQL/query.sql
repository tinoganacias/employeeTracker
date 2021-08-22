SELECT employee.id,employee.first_name,employee.last_name,department.name,title,salary,manager_id 
FROM department
JOIN title ON department.id = title.department_id
JOIN employee ON title.id = employee.title_id;

