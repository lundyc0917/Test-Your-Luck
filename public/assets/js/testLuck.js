$(function () {
    ".generate_bet".on("click", function (event) {
      console.log("WORKS");
    });
    $('.betAmount').on('submit', function (event) {
        event.preventDefault();
        var newBetOdds = {
            team1: $('#team1').val().trim(),
            team2: $('#team2').val().trim(),
            selections: $('#selections').val().trim(),
            result: $('#result').val().trim(),
            betAmount: $('#betAmount').val().trim(),
            newAmount: $('#newAmount').val().trim(),
        };
      //  Send POST request
      $.ajax("/api/luck", {
          type: "POST",
          data: newBetOdds,
      }).then(function () {
          console.log("New Bet Placed!");
          location.reload();
      });
    });
  });