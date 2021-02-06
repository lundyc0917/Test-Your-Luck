// Dependencies
const express = require("express");
const router = express.Router();
const luck = require("../models/luck.js");

// Create all the routes and set up logic.
router.get("/", (req, res) => {
  luck.selectAll((data) => {
    var hbsObject = {
      luck: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/luck", (req, res) => {
  luck.insertOne((result) => {
    res.json({ id: result.insertId });
    res.status(200).end();
  });
});


// Export routes for server.js to use.
module.exports = router;
