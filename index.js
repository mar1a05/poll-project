import express from "express";
import mysql2 from 'mysql2';
import cors from 'cors';

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

const app = express();
app.use(cors())
app.use(express.json());

app.post('/api/addUser', (req) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query(`INSERT INTO Users(username, password) VALUES ('${username}', '${password}')`);
})

const port = 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});