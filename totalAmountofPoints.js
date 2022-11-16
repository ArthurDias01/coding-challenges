function points(games) {
  // let total = 0;

  // games.forEach((game) => {
  //   const [x, y] = game.split(":").map(Number);
  //   if (x > y) {
  //     total += 3;
  //   } else if (x === y) {
  //     total += 1;
  //   }
  // });

  // return total;

  return games.reduce((total, game) => {
    const [x, y] = game.split(":").map(Number);
    if (x > y) {
      return (total += 3);
    } else if (x === y) {
      return (total += 1);
    }
    return Number(total);
  }, 0);
}

const gameInput = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

console.log(points(gameInput));
