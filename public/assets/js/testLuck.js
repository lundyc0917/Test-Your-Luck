$(function () {
  $(".generate_bet").on("submit", function (event) {
    event.preventDefault();
    console.log("WORKS");
  });

  $(".newBetForm").on("submit", function (event) {
    event.preventDefault();
    let betAmount = $("#newBet_input").val().trim();
    if (betAmount != "") {
      var new_bet = {
        betAmount: $("#newBet_input").val().trim(),
      };

      //  Send POST request
      $.ajax("/api/luck", {
        type: "POST",
        data: new_bet,
      }).then(function () {
        console.log(new_bet, "New Bet Placed!");
        location.reload();
      });
    } else {
      alert("Please enter a numerical bet!");
    }
  });
});

// var newBetOdds = {
//     team1: $('#team1').val().trim(),
//     team2: $('#team2').val().trim(),
//     selections: $('#selections').val().trim(),
//     result: $('#result').val().trim(),
//     betAmount: $('#betAmount').val().trim(),
//     newAmount: $('#newAmount').val().trim(),
// };
