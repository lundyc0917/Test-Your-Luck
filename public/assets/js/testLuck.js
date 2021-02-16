$(document).ready(function () {
  // $(".generate_bet").on("submit", function (event) {
  //   event.preventDefault();
  //   console.log("WORKS");
  // });

  $(".newBetForm").on("submit", function (event) {
    event.preventDefault();

    var newBet_input = $(this).children('[name=bet_amount]').val();
    var odds = $("#odds > :first-child").text().split("Odds: ")[1];
    var result = newBet_input * parseFloat(odds);
    $("#userBet").text("Possible Reward: " + result.toFixed(2));
    console.log(newBet_input);
    console.log(result);
    console.log(odds);
    if (newBet_input) {
      var new_bet = {
        bet_amount: newBet_input,
        new_amount: result,
        team1: $(".teams")[0].textContent,
        team2: $(".teams")[1].textContent,
      };

      console.log(new_bet);
      // POST request
      $.ajax({
        method: 'POST',
        url: '/api/odds/create',
        data: new_bet,
      }).then(function(data) {
        location.reload();
      });
      }
    });
  })
