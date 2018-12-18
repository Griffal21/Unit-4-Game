var randomNumber = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

$(document).ready(function game() {

  var userTotal = 0;


  //Generate a random number
  randomNumber = Math.floor(Math.random() * (100 - 30)) + 30;
  //Generate random numbers for the user buttons
  //return Math.floor(Math.random() * (max - min) ) + min; from w3
  var NewtonNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  var EulerNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  var LeibnizNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  var GaussNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  

  //Define action buttons
  $("#Newton").on("click", function () {
    userTotal = parseInt(userTotal) + parseInt(NewtonNumber);
    $("#userTotal").html("Your Number: " + userTotal);
    console.log("user " + userTotal);
    //Determine if player wins or losers
    if (userTotal === randomNumber) {
      alert("You Win!")
      //displays wins correctly
      wins++;
      //document.getElementById("wins").HTML = "Wins " + wins;
      $("#wins").html("Wins: " + wins);
      //resets the game
      game();
      userTotal = 0;
    }

    if (userTotal > randomNumber) {
      alert("You Lose!")
      //displays wins correctly
      losses++;
      //document.getElementById("losses").HTML = "Losses " + losses;
      $("#losses").html("Losses: " + losses);
      //resets the game
      game();
      userTotal = 0;
    } 
    
  });

  $("#Euler").on("click", function () {
    userTotal = parseInt(userTotal) + parseInt(EulerNumber);
    $("#userTotal").html("Your Number: " + userTotal);
    console.log("user " + userTotal);
    //Determine if player wins or losers
    if (userTotal === randomNumber) {
      alert("You Win!")
      //displays wins correctly
      wins++;
      //document.getElementById("wins").HTML = "Wins " + wins;
      $("#wins").html("Wins: " + wins);
      //resets the game
      game();
      userTotal = 0;
    }

    if (userTotal > randomNumber) {
      alert("You Lose!")
      //displays wins correctly
      losses++;
      //document.getElementById("losses").HTML = "Losses " + losses;
      $("#losses").html("Losses: " + losses);
      //resets the game
      game();
      userTotal = 0;
    } 
  });

  $("#Leibniz").on("click", function () {
    userTotal = parseInt(userTotal) + parseInt(LeibnizNumber);
    $("#userTotal").html("Your Number: " + userTotal);
    console.log("user " + userTotal);
    //Determine if player wins or losers
    if (userTotal === randomNumber) {
      alert("You Win!")
      //displays wins correctly
      wins++;
      //document.getElementById("wins").HTML = "Wins " + wins;
      $("#wins").html("Wins: " + wins);
      //resets the game
      game();
      userTotal = 0;
    }

    if (userTotal > randomNumber) {
      alert("You Lose!")
      //displays wins correctly
      losses++;
      //document.getElementById("losses").HTML = "Losses " + losses;
      $("#losses").html("Losses: " + losses);
      //resets the game
      game();
      userTotal = 0;
    } 
  });

  $("#Gauss").on("click", function () {
    userTotal = parseInt(userTotal) + parseInt(GaussNumber);
    $("#userTotal").html("Your Number: " + userTotal);
    console.log("user " + userTotal);
    //Determine if player wins or losers
    if (userTotal === randomNumber) {
      alert("You Win!")
      //displays wins correctly
      wins++;
      //document.getElementById("wins").HTML = "Wins " + wins;
      $("#wins").html("Wins: " + wins);
      //resets the game
      game();
      userTotal = 0;
    }

    if (userTotal > randomNumber) {
      alert("You Lose!")
      //displays wins correctly
      losses++;
      //document.getElementById("losses").HTML = "Losses " + losses;
      $("#losses").html("Losses: " + losses);
      //resets the game
      game();
      userTotal = 0;
    }
     
  });



  //display the target and the user's total
  //document.getElementById("#randomNum").html = randomNumber;
  //document.getElementById("#userTotal").HTML = userTotal;
  $("#randomNum").html("Target: " + randomNumber);
  $("#userTotal").html("Your Number: " + userTotal);

  console.log("target " + randomNumber);
  console.log("Newton " + NewtonNumber);
  console.log("Euler " + EulerNumber);
  console.log("Leibniz " + LeibnizNumber);
  console.log("Gauss " + GaussNumber);

});