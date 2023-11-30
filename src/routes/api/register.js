import express from 'express';
import { getConnection } from '../../connection.js';

const register = express.Router();

register.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    await registerUser(username, password);
  } catch (err) {
    res.status(500).send({error: String(err)})
  }
});

/**
 * Returns true if the {@link username} already exists, false otherwise
 * @param {string} username name of an user 
 * @returns {Promise<boolean>} true if the {@link username} already exists, false otherwise
 */
function usernameExists(username) {
  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
      connection.query(`SELECT * FROM Users WHERE username = '${username}'`, (err, result) => {
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
async function registerUser(username, password) {
  if (await usernameExists(username)) {
      throw new Error(`The following user ${username} already exists`);
  }

  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
    connection.query(`INSERT INTO Users(username, password) VALUES ('${username}', '${password}')`, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

export default register;