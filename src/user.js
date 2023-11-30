import { getConnection } from './connection.js'
import jwt from 'jsonwebtoken';

/**
 * Returns true if the {@link username} already exists, false otherwise
 * @param {string} username name of an user 
 * @returns {Promise<boolean>} true if the {@link username} already exists, false otherwise
 */
export function userExists(username) {
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
export async function registerUser(username, password) {
  if (await userExists(username)) {
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

export async function getUser(username) {
  if (!await userExists(username)) {
    throw new Error("User does not exists");
  }

  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
    connection.query(`SELECT * FROM Users WHERE username = '${username}'`, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        username: result[0].username,
        password: result[0].password
      });
    });
  });
}

/**
 * Logins a new user and returns an access token
 * @param {string} username name of the user
 * @param {string} password password of the user
 * @returns 
 */
export async function loginUser(username, password) {
  const user = await getUser(username);
  if (password !== user.password) {
    throw new Error("Invalid password");
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  return accessToken;
}