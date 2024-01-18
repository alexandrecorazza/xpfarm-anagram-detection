const { anagram } = require("../src/index");

test("should return true if 'foefet' is anagram of 'toffee'", () => {
    expect(anagram('foefet', 'toffee')).toBe(true);
})

test("should return false if 'Buckethead' is not anagram of 'DeathCubeK'", () => {
    expect(anagram('Buckethead', 'Anything')).toBe(false);
})