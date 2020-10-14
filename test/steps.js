const { Given, When, Then } = require('cucumber');
const SearchPage = require('./pageobjects/search.page');

Given('I open the search page', async () => {
  await SearchPage.open();
});

When(/^I search for (\w+)$/, async (query) => {
  await SearchPage.search(query);
});

Then('I see search results are displayed', async () => {
  const resultsListItem = await SearchPage.resultsListItem;
  await resultsListItem.waitForDisplayed();
});

Then(/^there are (\d+) results$/, async (number) => {
  const resultsList = await SearchPage.resultsList;
  expect(resultsList).toHaveLength(number);
});
