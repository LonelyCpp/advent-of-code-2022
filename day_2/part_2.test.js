const solution = require("./part_2");
const fs = require("fs");

describe("day 2 problem 2", () => {
  test("sample input", () => {
    const input = fs.readFileSync("./day_2/input_sample.txt").toString();
    expect(solution(input)).toBe(12);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_2/input.txt").toString();
    expect(solution(input)).toBe(11373);
  });
});
