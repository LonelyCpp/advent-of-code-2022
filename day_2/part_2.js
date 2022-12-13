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

const resultCode = {
  lose: "X",
  draw: "Y",
  win: "Z",
};

const combos = {
  A: {
    win: "Y",
    draw: "X",
    lose: "Z",
  },
  B: {
    win: "Z",
    draw: "Y",
    lose: "X",
  },
  C: {
    win: "X",
    draw: "Z",
    lose: "Y",
  },
};

/**
 * @param {string} input
 * @returns {number}
 */
const main = (input) => {
  const plays = input.split("\n").map((item) => item.split(" "));

  let score = 0;

  plays.forEach((turn) => {
    const [opponent, result] = turn;

    let self;
    if (result === resultCode.win) {
      self = combos[opponent].win;
      score += gameScore.win;
    } else if (result === resultCode.draw) {
      self = combos[opponent].draw;
      score += gameScore.draw;
    } else {
      self = combos[opponent].lose;
      score += gameScore.lose;
    }

    score += signScore[self];
  });

  return score;
};

module.exports = main;
