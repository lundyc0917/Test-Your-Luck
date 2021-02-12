// Dependencies
// =============================================================
var db = require("../models");

const axios = require('axios');

const api_key = process.argv[2] || '5afb384791ae190052806206a60c381b';

const sport_key = 'soccer_england_league1'; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const region = 'uk';

const market = 'spreads'; // h2h | spreads | totals


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the odds
  app.get("/api/odds", function(req, res) {
    db.Odds.findAll({
      include: [db.Post]
    }).then(function(dbOdds) {
      res.json(dbOdds);
    });
  });

/*
    Now get a list of live & upcoming games for the sport you want, along with odds for different bookmakers
*/
axios.get('https://api.the-odds-api.com/v3/odds', {
    params: {
        api_key: api_key,
        sport: sport_key,
        region: region,
        mkt: market,
    }
    // Hey
})
.then(response => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(JSON.stringify(response.data.data[Math.floor((Math.random() * 10)+1)],null,2))

    // Check your usage
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})
  // POST route for saving a new odds. You can create a odds using the data on req.body
  app.post("/api/odds", function(req, res) {
    db.Odds.create(req.body).then(function(dbOdds) {
      res.json(dbOdds);
    });
  });

  // DELETE route for deleting odds. You can access the odds's id in req.params.id
  app.delete("/api/odds/:id", function(req, res) {

  });

  // PUT route for updating odds. The updated odds will be available in req.body
  app.put("/api/odds", function(req, res) {

  });
};
