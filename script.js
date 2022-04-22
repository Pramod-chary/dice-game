
let randomNumber = 0;
let cScore1 = document.querySelector("#cScore-1");
let cScore2 = document.querySelector("#cScore-2");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let playing = true;
const winScore = 50;

let currentScore = 0;
let activeP = 0;
let totalScore = [0, 0];
const image = document.querySelector(".hide");
image.classList.add("hide");

document.querySelector(".dice").addEventListener("click", function () {
  if (playing === true) {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    image.classList.remove("hide");
    image.src = `dice${randomNumber}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`cScore-${activeP}`).textContent = currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`cScore-${activeP}`).textContent = currentScore;
      if (activeP === 0) {
        activeP = 1;
      } else activeP = 0;
      player1.classList.toggle("toggle1");
      player2.classList.toggle("toggle1");
    }
  }
  document.getElementById("foot").textContent = `Player ${activeP + 1} turn`;
});
document.querySelector(".add").addEventListener("click", function () {
  if (playing === true) {
    if (currentScore != 0) {
      totalScore[activeP] += currentScore;
      document.getElementById(`tScore-${activeP}`).textContent =
        totalScore[activeP];
      currentScore = 0;
      document.getElementById(`cScore-${activeP}`).textContent = currentScore;
      if (totalScore[activeP] >= winScore) {
        document.getElementById("won").textContent = `🎉PLAYER ${
          activeP + 1
        } WON THE GAME🎉`;
        playing = false;
        image.classList.add("hide");
      }
      if (activeP === 0) activeP = 1;
      else activeP = 0;
      player1.classList.toggle("toggle1");
      player2.classList.toggle("toggle1");
    } else {
      alert("please roll the dice");
    }
  }
  document.getElementById("foot").textContent = `Player ${activeP + 1} turn`;
});
document.querySelector(".reset").addEventListener("click", resetfun);
function resetfun() {
  playing = true;
  currentScore = 0;
  totalScore[0] = 0;
  totalScore[1] = 0;
  activeP = 0;
  document.getElementById("tScore-0").textContent = 0;
  document.getElementById("tScore-1").textContent = 0;
  document.getElementById("cScore-0").textContent = 0;
  document.getElementById("cScore-1").textContent = 0;
  document.getElementById("foot").textContent = `Player 1 turn`;
  image.classList.add("hide");
  document.getElementById("won").textContent = "";
  player1.classList.toggle("toggle1");
  player2.classList.toggle("toggle1");
}
document.querySelector(".playagain").addEventListener("click", resetfun);
