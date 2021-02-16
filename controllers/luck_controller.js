// Dependencies
const express = require('express');
// const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models');


// Create all the routes and set up logic.
router.get('/', (req, res) => {
  res.redirect('/odds');
});

router.get('/odds', async (req, res) => {
  try {
    const dbOdds = await db.Odds.findAll({
      include: [
        {
          model: db.Odds,
          attributes: ['team1', 'team2'],
        },
      ],
    }).map((el) => el.get({ plain: true })); 
  
  const hbsObject = {
    odds: dbOdds,
  };
  // console.log(hbsObject);
  return res.render('index', hbsObject);
} catch (err) {
  return res.status(500).json(err);
}
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
