import inquirer from 'inquirer';
import mysql from 'mysql2';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_tracker_db',
    password: 'root'
})

