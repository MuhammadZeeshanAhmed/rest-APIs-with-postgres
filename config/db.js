const { Client } = require('pg')

const postgreSQL = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: "postgres"
})

module.exports = postgreSQL