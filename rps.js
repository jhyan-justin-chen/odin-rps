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

function playRound(playerChoice, computerChoice) {
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


const inputButtons = document.querySelectorAll(".controls__input");
inputButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    const playerChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    const playerRoundUI = document.querySelector(".results__player");
    const computerRoundUI = document.querySelector(".results__computer");
    const roundResultUI = document.querySelector(".results__round");
    playerRoundUI.textContent = playerChoice.toUpperCase();
    computerRoundUI.textContent = computerChoice.toUpperCase();
    roundResultUI.textContent = roundResult.toUpperCase();
  });
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
