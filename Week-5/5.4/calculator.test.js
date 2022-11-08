const calculator = require("./Calculator");

describe("Test Cases for Addition", () => {
  it("adds 2 numbers pass case", () => {
    expect(calculator.sum(1, 2)).toBe(3);
    expect(calculator.sum(0.1, 2.2)).toBeCloseTo(2.3);
  });

  it("adds 2 numbers fail case", () => {
    expect(calculator.sum(1, 4)).not.toBe(3);
  });

  it("extra parameters", () => {
    expect(calculator.sum(1, 2, 3, 4)).toBe(10);
  });

  it("invalid input", () => {
    expect(calculator.sum(1, "poll", 3, 4)).toBe("invalid input");
  });
});

describe("Test Cases for Subraction", () => {
  it("subtracts 2 numbers pass case", () => {
    expect(calculator.diff(1, 2)).toBe(-1);
    expect(calculator.diff(2.5, 2.2)).toBeCloseTo(0.3);
  });

  it("subtracts 2 numbers fail case", () => {
    expect(calculator.diff(1, 4)).not.toBe(3);
  });

  it("extra parameters", () => {
    expect(calculator.diff(20,10,5)).toBe(5);
  });

  it("invalid input", () => {
    expect(calculator.diff(1, "poll", 3, 4)).toBe("invalid input");
  });
});


describe("Test Cases for Multiplication", () => {
    it("Multiply 2 numbers pass case", () => {
      expect(calculator.product(1, 2)).toBe(2);
      expect(calculator.product(1.2,1.1)).toBeCloseTo(1.32);
    });
  
    it("Multiply 2 numbers fail case", () => {
      expect(calculator.product(1, 4)).not.toBe(3);
    });
  
    it("extra parameters", () => {
      expect(calculator.product(20,10,5)).toBe(1000);
    });
  
    it("invalid input", () => {
      expect(calculator.product(1, "poll", 3, 4)).toBe("invalid input");
    });
  });