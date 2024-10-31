function rockPaperScissors(userChoice) {
  userChoice = userChoice.toLowerCase();

  const randomNum = Math.floor(Math.random() * 3);

  let computerChoice;
  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    return "I do not understand. Try entering rock, paper, or scissors.";
  }

  if (userChoice === computerChoice) {
    return `It's a tie! I chose ${computerChoice}.`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return `You win! I chose ${computerChoice}.`;
  } else {
    return `You lose! I chose ${computerChoice}.`;
  }
}

