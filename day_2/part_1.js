const signScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

const gameScore = {
  win: 6,
  draw: 3,
  lose: 0,
};

const winningCombos = {
  A: "Y",
  B: "Z",
  C: "X",
};

const drawCombos = {
  A: "X",
  B: "Y",
  C: "Z",
};

/**
 * @param {string} input
 * @returns {number}
 */
const main = (input) => {
  const plays = input.split("\n").map((item) => item.split(" "));

  let score = 0;

  plays.forEach((turn) => {
    const [opponent, self] = turn;

    score += signScore[self];

    if (winningCombos[opponent] === self) {
      score += gameScore.win;
    } else if (drawCombos[opponent] === self) {
      score += gameScore.draw;
    }
  });

  return score;
};

module.exports = main;
