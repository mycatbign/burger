// ==================================================================
// set up controllers 
// ==================================================================

var express = require("express");
var router = express.Router();

// import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// ==================================================================
// set up all of our routes 
// ==================================================================
// create get route that will select all of the burgers in the database
// and give them back
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var allburgersObject = {
      burgers: data
    };
    console.log(allburgersObject);
    res.render("index", allburgersObject);
  });
});

// create post route to add a new burger to our database
router.post("/", function(req, res) {
  console.log("postbody " + req.body);
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

// create post route to update a specific burger in the database
router.post("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

console.log("burger-controllers > finished");

// export routes for server.js to use.
module.exports = router;