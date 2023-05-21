const config = require('./dbconfig');
const pgp = require('pg-promise')();

const connect = config.db_access;
const db= pgp(connect);

module.exports = db;