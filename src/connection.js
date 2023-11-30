import mysql2 from 'mysql2';

let connection;

/**
 * Retrieves the MySql connection object instance
 * @returns MySql connection object instance
 */
export async function getConnection() {
  return new Promise((resolve, reject) => {
    if (connection) {
      resolve(connection);
      return;
    }

    connection = mysql2.createConnection({
      user: 'avnadmin',
      password: 'AVNS_HkTIUGPj4LIzet5XdCY',
      database: 'defaultdb',
      host: 'mysql-3226c7e5-marya-2bab.a.aivencloud.com',
      port: '19919',
    });
    connection.connect((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(connection);
    })
  });
};