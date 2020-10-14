const flakyDependency = require('./flakyDependency');
const handleFlakyServer = require('./flaky');

jest.mock('./flakyDependency', () => jest.fn());
test('returns response from server', async () => {
  flakyDependency.mockResolvedValueOnce(5);
  const res = await handleFlakyServer();
  expect(res).toBe(5);
});
