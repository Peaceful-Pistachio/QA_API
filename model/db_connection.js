const { Client, Pool } = require('pg');

const pool = new Pool({
  user: 'annasarafanova',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err, client) => {
  console.error('ERROR: ', err);
  process.exit(-1);
});

module.exports = pool;

