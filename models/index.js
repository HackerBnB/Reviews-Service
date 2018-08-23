const { Pool } = require('pg');

const config = {
  host: 'ec2-54-193-12-133.us-west-1.compute.amazonaws.com',
  user: 'postgres',
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
*/

// 