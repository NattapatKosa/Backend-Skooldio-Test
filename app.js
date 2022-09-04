const prompt = require("prompt-sync")();
const { deck } = require("./service");

let totalBet = 0;
let gameStart = true;

while (gameStart) {
  const bet = Number(prompt("Please enter a bet: "));

  const cards = deck.shuffleDeck();

  const playerCard = deck.draw(cards, 2);
  const playerScore = deck.totalScore(playerCard);
  console.log(`You got ${playerCard.join(",")}`);

  const dealerCard = deck.draw(cards, 2);
  const dealerScore = deck.totalScore(dealerCard);
  console.log(`The dealer get ${dealerCard.join(",")}`);

  if (playerScore > dealerScore) {
    totalBet += bet;
    console.log(`You won!!!, received ${bet} chips`);
  } else if (playerScore === dealerScore) {
    console.log("Tie!! , You recieved Nothing");
  } else if (playerScore < dealerScore) {
    console.log("You lose,You lose your bet");
  }

  const gameInput = prompt("Wanna play more (Yes/No)?: ").toLocaleLowerCase();
  switch(gameInput) {
    case "yes":
        break;
    case "no":
        console.log(`You got total ${totalBet} chips`)
        gameStart = false;
  }
}
