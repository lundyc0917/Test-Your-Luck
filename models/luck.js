const orm = require('../config/orm.js');

var luck = {
    selectAll: function(cb) {
      orm.selectAll("testLuck", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("testLuck", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("testLuck", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (luck_controller.js).
  module.exports = luck;