import mysql from 'mysql2/promise';

// if (!process.env.DATABASE_OPTS) {
//   throw new Error('DATABASE_OPTS is not set');
// }
// const pool = mysql.createPool({
//   ...JSON.parse(process.env.DATABASE_OPTS),
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

export async function getConnection() {
  if (!process.env.DATABASE_OPTS) {
    throw new Error('DATABASE_OPTS is not set');
  }
  try {
    return await mysql.createConnection(JSON.parse(process.env.DATABASE_OPTS));
  } catch (error) {
    console.error('Error getting connection', error);
    throw error;
  }
}
