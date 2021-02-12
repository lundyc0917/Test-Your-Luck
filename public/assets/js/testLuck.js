$(document).ready(function () {
  $(".generate_bet").on("submit", function (event) {
    event.preventDefault();
    console.log("WORKS");
  });

  $(".new_bet-btn").on("click", function (event) {
    event.preventDefault();

    // let bet_amount = $("#newBet_input").val().trim();
    // if (newBet_input != "") {
    //   var new_bet = {
    //     bet_amount: $("#newBet_input").val().trim(),
    var newBet_input = $(this).siblings('[name=bet_amount').val();
    if (newBet_input) {
      var bet_info = {
        bet_amount: newBet_input,
      };
      console.log(bet_info);
      // POST request
      $.ajax({
        method: 'POST',
        url: '/odds/create',
        data: bet_info,
      }).then(function(data) {
        location.reload();
      });
      };
    });
      //  Send POST request
    //   $.ajax("/api/luck", {
    //     type: "POST",
    //     data: new_bet,
    //   }).then(function () {
    //     console.log(new_bet, "New Bet Placed!");
    //     location.reload();
    //   });
    // } else {
    //   alert("Please enter a numerical bet!");
    // }
  })
