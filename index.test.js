const { describe } = require('yargs');
const plainLanguageTime = require('.');

describe('Plain language time maker', () => {
  test('Handles the hour', () => {
    expect(plainLanguageTime(1, 0)).toBe('one o\'clock');
  });
});
