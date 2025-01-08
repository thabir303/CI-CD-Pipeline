//test/index.test.js
const { add } = require('../index');

test('adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, "asdf")).toBe("Invalid Input");
});
