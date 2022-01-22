const { Client, Pool } = require('pg');

const pool = new Pool({
  user: 'anna',
  password: 'jteowjfa1e41fk!$!@',
  host: 'ec2-44-201-154-96.compute-1.amazonaws.com',
  database: 'qaapi',
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err, client) => {
  console.error('ERROR: ', err);
  process.exit(-1);
});

module.exports = pool;

