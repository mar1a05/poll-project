import { getConnection } from './connection.js'
import jwt from 'jsonwebtoken';

/**
 * Returns true if the {@link email} already exists, false otherwise
 * @param {string} email name of an user 
 * @returns {Promise<boolean>} true if the {@link email} already exists, false otherwise
 */
export function emailExists(email) {
  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
      connection.query(`SELECT * FROM Users WHERE email = '${email}'`, (err, result) => {
          if (err) {
              reject(err);
              return;
          }
          resolve(result.length !== 0);
      });
  })
}

/**
* Adds a new user with the specified email and password
* @param {string} email email of the user
* @param {string} password password of the user
*/
export async function registerUser(email, password) {
  if (await emailExists(email)) {
      throw new Error(`The following user ${email} already exists`);
  }

  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
    connection.query(`INSERT INTO Users(email, password) VALUES ('${email}', '${password}')`, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

export async function getUser(email) {
  if (!await emailExists(email)) {
    throw new Error("User does not exists");
  }

  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
    connection.query(`SELECT * FROM Users WHERE email = '${email}'`, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        id: result[0].id,
        email: result[0].email,
        password: result[0].password
      });
    });
  });
}

/**
 * Logins a new user and returns an access token
 * @param {string} email email of the user
 * @param {string} password password of the user
 * @returns 
 */
export async function loginUser(email, password) {
  const user = await getUser(email);
  if (password !== user.password) {
    throw new Error("Invalid password");
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  return accessToken;
}

export function authentificate(req, res) {
  console.log(req.headers);
}