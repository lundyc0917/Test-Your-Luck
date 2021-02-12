// Dependencies
// =============================================================
var path = require("path");

const axios = require('axios');

const api_key = process.argv[2] || '5afb384791ae190052806206a60c381b';

const sport_key = 'soccer_england_league1'; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const region = 'uk';

const market = 'spreads'; // h2h | spreads | totals



/*
    Now get a list of live & upcoming games for the sport you want, along with odds for different bookmakers
*/


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/main.html"));
    axios.get('https://api.the-odds-api.com/v3/odds', {
    params: {
        api_key: api_key,
        sport: sport_key,
        region: region,
        mkt: market,
    }
    // Hey =)
})
.then(response => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(JSON.stringify(response.data.data[Math.floor((Math.random() * 10)+1)],null,2))
    var gameData = response.data.data[Math.floor((Math.random() * 10)+1)]
    // Check your usage
    console.log('See',gameData)
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])
  res.render("index",gameData)
})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})
  });

  // // odds route loads odds.html
  app.get("/odds", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/odds.html"));
  });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};