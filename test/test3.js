const assert = require("chai").assert;
const fibonacci = require("../fibonacci");

describe("Fibonacci", () => {
  it("Return 0 for Fibonacci of 0", () => {
    assert.equal(fibonacci(0), 0);
  });

  it("Return 1 for Fibonacci of 1", () => {
    assert.equal(fibonacci(1), 1);
  });

  it("Return 1 for Fibonacci of 2", () => {
    assert.equal(fibonacci(2), 1);
  });

  it("Return 2 for Fibonacci of 3", () => {
    assert.equal(fibonacci(3), 2);
  });

  it("Return 55 for Fibonacci of 10", () => {
    assert.equal(fibonacci(10), 55);
  });
});
