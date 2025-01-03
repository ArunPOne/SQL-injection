Run this code in MYSQL:

CREATE DATABASE testdb;

GRANT ALL PRIVILEGES ON testdb.* TO 'root'@'localhost' IDENTIFIED BY 'password';

FLUSH PRIVILEGES;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure you run these lines in Terminal VScode:

1) npm init -y
2) npm install express body-parser mysql2 sequelize
3) After everything setup run -> " node app.js " in Terminal VScode
4) After successfully run the server, Go Chrome URL and paste this -> " http://localhost:3000/vulnerable-login?username=admin&password=admin123 " to test vulnerable-login
5) After that, try this URL in Chrome to see protected-login -> " http://localhost:3000/protected-login "