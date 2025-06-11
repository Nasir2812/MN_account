const { Pool } = require('pg');
const { Sequelize } = require('sequelize');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'civil_db',
  password: 'nasir7010',
  port: 5432
}
);

const sequelize = new Sequelize('civil_db', 'postgres', 'nasir7010', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,  
  pool: {
    max: 5,       
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = {pool,sequelize};