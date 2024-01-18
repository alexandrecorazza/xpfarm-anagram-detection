const { anagram } = require("../src/index");

test("should return true if 'foefet' is anagram of 'toffee'", () => {
    expect(anagram('foefet', 'toffee')).toBe(true);
})