
const connection = require('./connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
      // var queryString = "SELECT * FROM ??";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    // Insert one into database
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      }); 
    },

    // Update devoured from false to true in database
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }

    
  };

  // Export the orm object for the model (burger.js).
  module.exports = orm;

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
all: function(input, cb) {
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

// Export the orm object for the model (cat.js).
module.exports = orm;
