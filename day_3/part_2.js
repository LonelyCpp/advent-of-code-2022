/**
 * @param {string} input
 * @returns {number}
 */
const main = (input) => {
  let prioritySum = 0;

  const sacks = input.split("\n");
  for (let i = 0; i < sacks.length; i += 3) {
    const c1 = sacks[i];
    const c2 = sacks[i + 1];
    const c3 = sacks[i + 2];

    let mistake = "";
    c1.split("").some((c) => {
      if (c2.includes(c) && c3.includes(c)) {
        mistake = c;
        return true;
      }

      return false;
    });

    const ord = mistake.charCodeAt(0);
    const sub = ord > 96 ? 96 : 38;
    const priority = ord - sub;

    prioritySum += priority;
  }

  return prioritySum;
};

module.exports = main;
