// // Dependencies
// // =============================================================
// const db = require("../models");
// // Routes
// // =============================================================
// module.exports = function(app) {

//   // GET route for getting all of the odds
//   app.get("/api/odds", function(req, res) {
//     db.Odds.findAll({
//       include: [db.Post]
//     }).then(function(dbOdds) {
//       res.json(dbOdds);
//     });
//   });

//   app.post("/api/odds", function(req, res) {
//     db.Odds.create(req.body).then(function(dbOdds) {
//       res.json(dbOdds);
//     });
//   });

//   // DELETE route for deleting odds. You can access the odds's id in req.params.id
//   app.delete("/api/odds/:id", function(req, res) {

//   });

//   // PUT route for updating odds. The updated odds will be available in req.body
//   app.put("/api/odds", function(req, res) {

//   });
// };
