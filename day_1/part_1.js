/**
 * @param {string} item
 * @returns {number}
 */
const mapToNumber = (item) => Number.parseInt(item, 10);

/**
 * @param {number[]} items
 * @returns {number}
 */
const arraySum = (items) => items.reduce((acc, curr) => acc + curr, 0);

/**
 * @param {string} input
 * @returns {number}
 */
const main = (input) => {
  const elfCalList = input
    .split("\n\n")
    .map((item) => item.split("\n").map(mapToNumber))
    .map(arraySum);

  return Math.max(...elfCalList);
};

module.exports = main;
