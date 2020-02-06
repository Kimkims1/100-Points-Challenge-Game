//use arrays keep code clean
let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//document.querySelector("#current-" + activePlayer).textContent = dice;
document.querySelector(".dice").style.display = "none";

document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
  //Do sth here
  let dice = Math.floor(Math.random() * 6) + 1;

  //Display the result
  let diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";

  //Update roundScore
  if (dice !== 1) {
    //Add score
    roundScore += dice; //roundScore = roundScore + dice
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //Next Player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  //Add Current Score to GLOBAL Object

  scores[activePlayer] += roundScore;

  //Update the UI

  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  //Check if the Player won the game or not

  //Next Player
  nextPlayer();
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //if (activePlayer === 0) { Same thing as ternary Operator
  // activePlayer = 1;
  // } else {
  //  activePlayer = 0;
  // }
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector(".player-0-panel").classList.remove("active");
  //document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}
