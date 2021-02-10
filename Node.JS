const axios = require('axios')

const api_key = process.argv[2] || '5afb384791ae190052806206a60c381b'

const sport_key = 'soccer_england_league1' // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

const region = 'uk'

const market = 'spreads' // h2h | spreads | totals


/*
    First get a list of in-season sport
        the sport 'key' from the response can be used to get odds in the next request
*/
// axios.get('https://api.the-odds-api.com/v3/sports', {
//     params: {
//         api_key: api_key
//     }
// })
// .then(response => {
//     console.log(response.data.data)
// })
// .catch(error => {
//     console.log('Error status', error.response.status)
//     console.log(error.response.data)
// })


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
})
.then(response => {
    // response.data.data contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(response.data.data)

    // Check your usage
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})