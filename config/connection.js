// ==================================================================
// connect to the mysql burgers_db database
// ==================================================================

// JBOND - NEED TO FIX BELOW
// ==================================================================
// figure out how to hide mysql password - use .env variable 
// use dotenv to load environment variables - namely mysql password
// expects .env file to be located in root of application 
// require('dotenv').config();
// now use the password
// var keys = require('keys.js');
// console.log(keys);
// ==================================================================

// set up the connection object to our mysql database
var mysql = require('mysql');   // use node.js driver for mysql
var connection = mysql.createConnection({
    host: 'localhost',          // hostname of burgers_db
    port: 3306,                 // mysql port if not 3306
    user: 'root',               // mysql username
    password: 'yourpswd',        // mysql password from .env using dotenv
    database: 'burgers_db'      // we are connecting to burgers_db
});

// connect to the burgers_db database (use err callback function)
connection.connect(function (err) {
    if (err) {
        // if we encounter any error connecting then display error info and return
        console.error('error connecting to burgers_db: ' + err.stack);
        return;
    }
    // if we successfully connect to burgers_db then display the following
    console.log('successfully connected to burgers_db as id: ' + connection.threadId);
});

// export the connection for use elsewhere
module.exports = connection;