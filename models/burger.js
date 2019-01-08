// ==================================================================
// import ORM and create functions to interact with our database 
// ==================================================================
console.log("burger.js");
var orm = require('../config/orm.js');
console.log("burger.js > orm.js loaded");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
};

console.log("burger.js > finished");

// export the database functions for the controller (burgers_controller.js).
module.exports = burger;