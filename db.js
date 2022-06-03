const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'database',
    port: 3306,
    connectionLimit:20,
})

module.exports={
    pool,
}