const { getFibonacciIter, getFibonacciRec } = require('../fibonacci');

describe("getFibonacciIter()", function() {
  it("returns a value from the Fibonacci sequence by index", function() {
    let num = 4
    expect(getFibonacciIter(num)).toEqual(2);
  });
  it("returns a string if the index equals 0", function(){
    let num = 0
    expect(typeof(getFibonacciIter(num))).toBe(string);
  });
  it("", function(){
    // let num = 6
    // expect(getFibonacciIter(num)).toEqual();
  });
});

describe("getFibonacciRec()", function() {
  it("returns a value from the Fibonacci sequence by index", function() {
    let num = 4
    expect(getFibonacciRec(num)).toEqual(2);
  });
});