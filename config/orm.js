// Import MySQL connection.
var connection = require("../config/connection.js");

function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
selectAll: function(input, cb) {
    var inputString = "SELECT * FROM " + input + ";";
    connection.query(inputString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
    });
},
create: function(table, cols, vals, cb) {
    var inputString = "INSERT INTO " + table;

    inputString += " (";
    inputString += cols.toString();
    inputString += ") ";
    inputString += "VALUES (";
    inputString += questionMarks(vals.length);
    inputString += ") ";

    console.log(inputString);

    connection.query(inputString, vals, function(err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    });
},
// An example of objColVals would be {name: panther, sleepy: true}
update: function(table, objColVals, condition, cb) {
    var inputString = "UPDATE " + table;

    inputString += " SET ";
    inputString += objToSql(objColVals);
    inputString += " WHERE ";
    inputString += condition;

    console.log(inputString);
    connection.query(inputString, function(err, result) {
    if (err) {
        throw err;
    }

    cb(result);
    });
},
delete: function(table, condition, cb) {
    var inputString = "DELETE FROM " + table;
    inputString += " WHERE ";
    inputString += condition;

    connection.query(inputString, function(err, result) {
    if (err) {
        throw err;
    }

    cb(result);
    });
}
};

// Export the orm object for the model
module.exports = orm;

