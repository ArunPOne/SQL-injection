Run this code in MYSQL:

CREATE DATABASE testdb;

GRANT ALL PRIVILEGES ON testdb.* TO 'root'@'localhost' IDENTIFIED BY 'password';

FLUSH PRIVILEGES;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure you run these lines in Terminal VScode:

1) npm init -y
2) npm install express body-parser mysql2 sequelize