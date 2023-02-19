INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Finance");



INSERT INTO job_role (title, salary, department_id)
VALUES ("Software Engineer" , "140000" , 1),
       ("Data Engineer" , "100000" , 1),
       ("Systems Engineer" , "150000" , 1),
       ("Aerospace Engineer" , "170000" , 1),
       ("Marketing Manager", "80000", 2),
       ("Junior Marketing", "60000",2),
       ("Marketing Coordinator", "55000",2),
       ("Media Coordinator", "70000",2),
       ("Chief Finance Officer", "150000",3),
       ("Procurement Officer", "950000",3),
       ("Accounts Payable Officer", "750000",3);


INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Donald", "O'Connell", 1 , 1),
       ("Jennifer", "Whalen", 1 , 2),
       ("Neena", "Marvis", 1 , 3),
       ("Steven", "King", 1 ,  4),
       ("Neena", "Ladwig", 2 ,5),
       ("Lex", "Fay", 2 , 6),
       ("Bruce", "Himuro", 2 , 7),
       ("Valli", "Vollman", 2 ,8),
       ("Daniel", "Nayer", 3 , 9),
       ("Laura", "Atkinson",3 , 10),
       ("Stephen", "Marlow", 3, 11);