import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../.env' });

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!')
connection.end()