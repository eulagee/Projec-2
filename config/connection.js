const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('mysql:memory');
require('dotenv').config();



const sequelize = new Sequelize("meal_planner_db", "root", "cookies", { dialect: "mysql" })
    // if (process.env.JAWSDB_URL) {
    //   sequelize = new Sequelize(process.env.JAWSDB_URL);
    // } else {
    //   sequelize = new Sequelize(
    //      process.env.DB_NAME,
    //     process.env.DB_USER,
    //      process.env.DB_PASSWORD,
    //     {
    //       host: 'localhost',
    //       dialect: 'mysql',
    //       port: 3306
    //     }
    //   );
    // }

/**
 *
 * @type {{createConnection?: function((Object|string)): Connection, createPool?: function((Object|string)): Pool, createPoolCluster?: function(Object=): PoolCluster, createQuery?: function(string, Array=, Function=): Query, escape?: function(*, boolean=, string=): string, escapeId?: function(*, boolean=): string, format?: function(string, Array=, boolean=, string=): string, raw?: function(string): *, Types?: *}}
 */
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: process.env.DB_USER,
//   password:process.env.DB_PASSWORD,