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

  elfCalList;

  // 3 iterations of selection sort
  for (let i = 0; i < 3; i++) {
    let maxIndex = i;
    let maxVal = elfCalList[i];

    for (let j = i; j < elfCalList.length; j++) {
      if (elfCalList[j] > maxVal) {
        maxVal = elfCalList[j];
        maxIndex = j;
      }
    }

    let tmp = elfCalList[i];
    elfCalList[i] = elfCalList[maxIndex];
    elfCalList[maxIndex] = tmp;
  }

  elfCalList;

  return elfCalList[0] + elfCalList[1] + elfCalList[2];
};

module.exports = main;
