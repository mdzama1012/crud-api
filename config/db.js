const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'userdb',
    password: '@Zamazaidi110',
    port: 5432,
});

module.exports = pool;
