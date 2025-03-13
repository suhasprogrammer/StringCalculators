const StringCalculator = require("./stringCalculator");

describe("String Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns number itself for single input", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("returns sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
  });

  test("handles new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
});
