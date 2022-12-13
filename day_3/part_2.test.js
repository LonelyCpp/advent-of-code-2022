const solution = require("./part_2");
const fs = require("fs");

describe("day 3 problem 2", () => {
  test("sample input", () => {
    const input = fs.readFileSync("./day_3/input_sample.txt").toString();
    expect(solution(input)).toBe(70);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_3/input.txt").toString();
    expect(solution(input)).toBe(2752);
  });
});
