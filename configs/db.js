const { Pool } = require('pg');

// Initiakize an instance of the pool library

const connection = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: process.env.DBPORT,
    host: process.env.DBHOST,
});


module.exports = {
    db: connection
}