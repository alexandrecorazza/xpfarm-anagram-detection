const { anagram } = require("../src/index");

test("should return true if 'foefet' is anagram of 'toffee'", () => {
    expect(anagram('foefet', 'toffee')).toBe(true);
})

test("should return false if 'Buckethead' is not anagram of 'DeathCubeK'", () => {
    expect(anagram('Buckethead', 'Anything')).toBe(false);
})

test("should return true if 'Listen' is a anagram of 'Silent'", () => {
    expect(anagram('Listen', 'Silent')).toBe(true);
})

test("should return true if 'cat' is a anagram of 'act'", () => {
    expect(anagram('cat', 'act')).toBe(true);
})