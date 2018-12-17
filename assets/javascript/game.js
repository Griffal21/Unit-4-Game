// variable declorations

var userTotal = 0;
var randomNumber = 0;
var NewtonNum = 0;
var EulerNum = 0;
var LeibnizNum = 0;
var GaussNum = 0;
var wins = 0;
var losses = 0;



//JavaScript functin that wraps everything
//Going off of the Captain Planet Game which had this
$(document).startGame(function() {

  //Start button
  $(".start").on("click", function() {
    //resets for next round
    userNumber = 0;
    //Generate a random number
    randomNumber = Math.floor(Math.random() * (100 - 30) ) + 30;
    //Generate random numbers for the user buttons
    //return Math.floor(Math.random() * (max - min) ) + min; from w3
    NewtonNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
    EulerNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
    LeibnizNumber = Math.floor(Math.random() * (10 - 1) ) + 1;
    GaussNumber = Math.floor(Math.random() * (10 - 1) ) + 1;

    // This ensures at least one number is odd. In the case all buttons are even and the target number is odd the game is unwinable
     if ((Number.isInteger(NewtonNumber/2))&&
       (Number.isInteger(EulerNumber/2)) &&
       (Number.isInteger(LeibnizNumber/2)) &&
       (Number.isInteger(GaussNumber/2))) 
       {EulerNumber = 1};



    console.log("target " + randomNumber)
    console.log("Newton " + NewtonNumber)
    console.log("Euler " + EulerNumber)
    console.log("Leibniz " + LeibnizNumber)
    console.log("Gauss " + GaussNumber)
  });

  //Define action buttons
  $(".Newton").on("click", function() {
    userTotal = userTotal + NewtonNumber;
  });
  $(".Euler").on("click", function() {
    userTotal = userTotal + EulerNumber;
  });
  $(".Leibniz").on("click", function() {
    userTotal = userTotal + LeibnizNumber;
  });
  $(".Gauss").on("click", function() {
    userTotal = userTotal + Gauss;
  });

  //display the target and the user's total
    document.getElementById("randomNum").innerHTML = randomNumber;
    document.getElementById("userTotal").innerHTML = userTotal;


  //Determine if player wins or losers
  if (userTotal === randomNumber) {
    alert("You Win!")
    //displays wins correctly
    wins++;
    document.getElementById("wins").innerHTML = wins;
    //resets the game
    startGame();
  }

  if (userTotal > randomNumber) {
    alert("You Lose")
    //displays wins correctly
    losses++;
    document.getElementById("losses").innerHTML = losses;
    //resets the game
    startGame();
  }








})