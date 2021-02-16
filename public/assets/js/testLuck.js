$(document).ready(function () {
  $(".generate_bet").on("click", function (event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "/odds",
    }).then(function (data) {
      console.log("It Works", data);
      // location.reload();

      const header = document.createElement("th");
      header.innerHTML = [
        `<tr>
         <th>ID</th>
         <th>Team 1</th>
         <th>Team 2</th>
         <th>Bet Amount</th>
         <th>Possible Reward</th>
         </tr>`,
      ];
      $(".table").append(header);

      for (let i = 0; i < data.length; i++) {
        const tableData = document.createElement("td");
        // string literal
        tableData.innerHTML = [
          `<tr>
           <td>${data[i].id}</td>
           <td>${data[i].team1}</td> 
           <td>${data[i].team2}</td>
           <td>${data[i].bet_amount}</td>
           <td> ${data[i].new_amount}</td>
           </tr>`,
        ];
        // `${data[i].id} ${data[i].team1} ${data[i].team2} ${data[i].bet_amount} ${data[i].new_amount}`
        $("#pastWagers").append(tableData);
        // $("tr").append(`${tableData}`);
      }
    });
  });

  $(".newBetForm").on("submit", function (event) {
    event.preventDefault();

    var newBet_input = $(this).children("[name=bet_amount]").val();
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
        method: "POST",
        url: "/api/odds/create",
        data: new_bet,
      }).then(function (data) {
        location.reload();
      });
    }
  });
});
