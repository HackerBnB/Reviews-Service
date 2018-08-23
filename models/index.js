const Pool = require('pg').Pool;

const config = {
  host: 'localhost',
  user: 'priyasuresh',
  password: '',
  database: 'homelyre',
  port: 5432,
};

const pool = new Pool(config);

pool.connect();

console.log('connected database');
module.exports = {
  pool: pool,
};

/*
connect sql
*/

// 