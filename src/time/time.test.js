const { describe } = require('yargs');
const plainLanguageTime = require('./time');

test('Handles the hour', () => {
  expect(plainLanguageTime(1, 0)).toBe('one o\'clock');
});
