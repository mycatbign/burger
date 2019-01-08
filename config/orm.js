// ==================================================================
// set up ORM (Object Relational Mapper) 
// ==================================================================

// import MySQL connection and make connection
console.log("orm.js")
var connection = require('../config/connection.js');
console.log("orm.js > connection.js loaded")

// helper function for SQL syntax. If we need to pass 3 values into the mySQL query.
// function loops through and creates an array of question marks - ["?", "?", "?"] 
// - and turns it into a string ['?', '?', '?'].toString() => '?,?,?';
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// helper function converts object key/value pairs to SQL syntax
// by looping through the keys and push the key/value as a string into an array
    function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// set up ORM (Object Relational Mapper) for all of our SQL functions
var orm = {

    // ==================================================================
    // selectAll function
    // ==================================================================
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }, // end selectAll

    // ==================================================================
    // insertOne function
    // ==================================================================
    insertOne: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }, // end insertOne

    // ==================================================================
    // updateOne function
    // ==================================================================
    updateOne: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    } // end updateOne
};

console.log("orm.js > finished")

// export the orm object for the model (burger.js).
module.exports = orm;