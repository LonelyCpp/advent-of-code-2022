const solution = require("./part_1");
const fs = require("fs");

describe("day 2 problem 1", () => {
  test("sample input", () => {
    const input = fs.readFileSync("./day_2/input_sample.txt").toString();
    expect(solution(input)).toBe(15);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_2/input.txt").toString();
    expect(solution(input)).toBe(13005);
  });
});
