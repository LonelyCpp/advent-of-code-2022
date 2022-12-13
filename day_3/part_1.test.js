const solution = require("./part_1");
const fs = require("fs");

describe("day 3 problem 1", () => {
  test("sample input", () => {
    const input = fs.readFileSync("./day_3/input_sample.txt").toString();
    expect(solution(input)).toBe(157);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_3/input.txt").toString();
    expect(solution(input)).toBe(7821);
  });
});
