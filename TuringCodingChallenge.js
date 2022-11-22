//Winning Card
// In a card game, each player will be given a set of random cards. Players will throw on the table their one winning card, the player with the highest card wins.
// A winning card ios the card that only exists once in the set of cards.
// given an array of sets of integers cards, return the card of the winning player. Return -1 if no such card is found.

// Example
// For cards = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], the output should be
// winningCard(cards) = 6.

// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.array.integer cards
// An array of sets of integers. Each set represents the cards of a player.
// Guaranteed constraints:
// 1 ≤ cards.length ≤ 10,
// 1 ≤ cards[i].length ≤ 10,
// 1 ≤ cards[i][j] ≤ 100.
// [output] integer
// The winning card. Return -1 if no such card is found.

function winningCard(cards) {
  let cardCount = {};
  let winningCard = -1;
  cards.forEach((cardSet) => {
    cardSet.forEach((card) => {
      cardCount[card] = cardCount[card] ? cardCount[card] + 1 : 1;
    });
  });

  console.log(cardCount);

  Object.keys(cardCount).forEach((card) => {
    if (cardCount[card] === 1) {
      if (card > winningCard) {
        winningCard = card;
      }
    }
  });
  return winningCard;
}

// Path: TuringCodingChallenge.js

console.log(
  winningCard([
    [5, 7, 8, 9, 9, 10, 10, 10, 10, 10],
    [1, 2, 2, 4, 4],
    [1, 2, 2, 1],
  ])
);
