// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');


// Create all the routes and set up logic.
router.get('/', (req, res) => {
  res.redirect('/odds');
});

router.get('/odds', async (req, res) => {
 
const dbOdds = await db.Odds.findAll()
res.send(dbOdds);
console.log('Hi there',dbOdds)
});

// post route to create bet
router.post('/api/odds/create', async (req, res) => {
  const newBet = new db.Odds({
    team1: req.body.team1,
    team2: req.body.team2,
    bet_amount: req.body.bet_amount,
    new_amount: req.body.new_amount,
    
  });
  try {
    const dbOdds = await newBet.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
  });
  
// Export routes for server.js to use.
module.exports = router;
