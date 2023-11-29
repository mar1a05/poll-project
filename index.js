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

/**
 * Returns true if the {@link username} already exists, false otherwise
 * @param {string} username name of an user 
 * @returns {Promise<boolean>} true if the {@link username} already exists, false otherwise
 */
function usernameExists(username) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM Users WHERE username = '${username}'`, (err, result, fields) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result.length !== 0);
        });
    })
}

/**
 * Adds a new user with the specified username and password
 * @param {string} username name of the user
 * @param {string} password password of the user
 */
async function addUser(username, password) {
    if (await usernameExists(username)) {
        throw new Error(`The following user ${username} already exists`);
    }

    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO Users(username, password) VALUES ('${username}', '${password}')`, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

app.post('/api/addUser', async (req) => {
    const username = req.body.username;
    const password = req.body.password;
    await addUser(username, password);
})

const port = 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});