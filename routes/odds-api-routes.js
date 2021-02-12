// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the odds
  app.get("/api/odds", function(req, res) {

  });

  // POST route for saving a new odds. You can create a odds using the data on req.body
  app.post("/api/odds", function(req, res) {

  });

  // DELETE route for deleting odds. You can access the odds's id in req.params.id
  app.delete("/api/odds/:id", function(req, res) {

  });

  // PUT route for updating odds. The updated odds will be available in req.body
  app.put("/api/odds", function(req, res) {

  });
};
