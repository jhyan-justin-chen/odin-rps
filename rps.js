function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function calcRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "tie";
    } else if (computerChoice === "paper") {
      return "lose";
    } else {
      return "win";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      return "tie";
    } else if (computerChoice === "scissors") {
      return "lose";
    } else {
      return "win";
    }
  } else {
    if (computerChoice === "scissors") {
      return "tie";
    } else if (computerChoice === "rock") {
      return "lose";
    } else {
      return "win";
    }
  }
}

function updateScore(roundResult) {
  if (roundResult == "win") {
    playerScore++;
  } else if (roundResult == "lose") {
    computerScore++;
  }

  const playerGameUI = document.querySelector(".game__player__result");
  const computerGameUI = document.querySelector(".game__computer__result");
  playerGameUI.textContent = playerScore;
  computerGameUI.textContent = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    finishGame(playerScore, computerScore);
  }
}

function showRound(playerChoice, computerChoice, roundResult) {
  const playerRoundUI = document.querySelector(".round__player__result");
  const computerRoundUI = document.querySelector(".round__computer__result");
  const roundResultUI = document.querySelector(".round__winner");
  playerRoundUI.textContent = playerChoice.toUpperCase();
  computerRoundUI.textContent = computerChoice.toUpperCase();
  roundResultUI.textContent = roundResult.toUpperCase();
}

function playRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  const roundResult = calcRound(playerChoice, computerChoice);

  updateScore(roundResult);

  showRound(playerChoice, computerChoice, roundResult);
}

function finishGame(playerScore, computerScore) {
  const winnerGameUI = document.querySelector(".game__winner");
  if (playerScore > computerScore) {
    winnerGameUI.textContent = "Player Wins";
  } else {
    winnerGameUI.textContent = "Computer Wins";
  }
}

let playerScore = 0;
let computerScore = 0;

const inputButtons = document.querySelectorAll(".controls__input");
inputButtons.forEach((button) => {
  button.addEventListener("mousedown", playRound);
});

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (i = 0; i < 5; i++) {
//     let playerChoice;
//     while (!["rock", "paper", "scissors"].includes(playerChoice)) {
//       console.log("Please type rock, paper, or scissors.");
//       playerChoice = prompt("Please choose a move.").toLowerCase();
//     }
//     let result = playRound(playerChoice, getComputerChoice());
//     let resultString = "You";
//     if (result === "win") {
//       playerScore++;
//       resultString = resultString + " win ";
//     } else if (result === "lose") {
//       computerScore++;
//       resultString = resultString + " lose ";
//     } else {
//       resultString = resultString + " tie ";
//     }
//     resultString = resultString + "the round.";
//     console.log(resultString);
//   }
//   if (playerScore > computerScore) {
//     console.log("You win the game.");
//     return "win";
//   } else if (playerScore === computerScore) {
//     console.log("You tie the game.");
//     return "tie";
//   } else {
//     console.log("You lose the game.");
//     return "loss";
//   }
// }
