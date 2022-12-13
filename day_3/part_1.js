/**
 * @param {string} input
 * @returns {number}
 */
const main = (input) => {
  let prioritySum = 0;

  const sacks = input.split("\n");

  sacks.forEach((sack) => {
    const c1 = sack.substring(0, sack.length / 2);
    const c2 = sack.substring(sack.length / 2);

    let mistake = "";
    c1.split("").some((c) => {
      if (c2.includes(c)) {
        mistake = c;
        return true;
      }

      return false;
    });

    const ord = mistake.charCodeAt(0);
    const sub = ord > 96 ? 96 : 38;
    const priority = ord - sub;

    prioritySum += priority;
  });

  return prioritySum;
};

module.exports = main;
