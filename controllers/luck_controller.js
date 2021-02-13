// Dependencies
const express = require('express');
// const Sequelize = require('sequelize');
const router = express.Router();
const db = require('../models');
// const axios = require('axios').default

// Create all the routes and set up logic.
router.get('/', (req, res) => {
  res.redirect('/odds');
});

router.get('/odds', async (req, res) => {
  try {
    const dbOdds = await db.Odds.findAll({});
  
  const hbsObject = {
    odds: dbOdds,
  };
  console.log(hbsObject);
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

router.put('/api/odds/update', async (req, res) => {
  // var condition = 'id = ' + req.params.id;
  // console.log(condition);
  const dbOdds = await db.Odds.update(
    { 
      bet_amount: dbOdds.new_amount,
      new_amount: req.body.new_amount
     },
     {
     where: {
       id: req.body.id,
     },
    },
  ).then((dbOdds) => {
    res.json('/');
  });
})


//     (result) => { 
//       if (result.changedRows === 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//     console.log('updated')


// Export routes for server.js to use.
module.exports = router;
