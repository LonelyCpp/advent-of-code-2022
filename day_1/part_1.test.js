const solution = require("./part_1");
const fs = require("fs");

describe("day 1 problem 1", () => {
  test("sample input", () => {
    const input = fs.readFileSync("./day_1/input_sample.txt").toString();
    expect(solution(input)).toBe(24000);
  });

  test("real input", () => {
    const input = fs.readFileSync("./day_1/input.txt").toString();
    expect(solution(input)).toBe(72511);
  });
});
