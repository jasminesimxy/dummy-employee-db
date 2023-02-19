INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Finance"),
       ("Project Management");



INSERT INTO job_role (tile, salary, department_id)
VALUES ("Software Engineer" , "140000" , 1),
       ("Data Engineer" , "100000" , 1),
       ("Systems Engineer" , "150000" , 1),
       ("Aerospace Engineer" , "170000" , 1),
       ("Marketing Manager", "80000", 2),
       ("Junior Marketing", "60000",2),
       ("Marketing Coordinator", "55000",2),
       ("Media and Communications Coordinator", "70000",2),
       ("Chief Finance Officer", "150000",3),
       ("Procurement and Contracts Officer", "950000",3),
       ("Accounts Payable Officer", "750000",3);


INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Donald", "O'Connell", "11" , "124" , 1),
       ("Jennifer", "Whalen", "10" , "605" , 2),
       ("Neena", "Marvis", "9" , "181" , 1),
       ("Steven", "King", "8" , "908" , 3),
       ("Neena", "Ladwig", "7" , "665" , 1),
       ("Lex", "Fay", "6" , "452" , 2),
       ("Bruce", "Himuro", "5" , "198" , 3),
       ("Valli", "Vollman", "4" , "374" , 3),
       ("Daniel", "Nayer", "3" , "458" , 1),
       ("Laura", "Atkinson", "2" , "802" , 2),
       ("Stephen", "Marlow", "1" , "514" , 2);