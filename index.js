import express from "express";
import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    user: 'avnadmin',
    password: 'AVNS_HkTIUGPj4LIzet5XdCY',
    database: 'defaultdb',
    host: 'mysql-3226c7e5-marya-2bab.a.aivencloud.com',
    port: '19919',
})
connection.connect((err) => {
    console.log(err);
})

connection.query("SELECT * FROM Users", (err, result, fields) => {
    console.log("");
})

const app = express();

const port = 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});