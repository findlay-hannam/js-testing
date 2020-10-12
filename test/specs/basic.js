const SearchPage = require('../pageobjects/search.page');

describe('webdriver.io page', () => {
  it('should have the right title', () => {
      browser.url('https://mendeley.com/search');
      expect(browser).toHaveTitle('Search | Mendeley');
  });

  it('Searches and gets results', async () => {
    await SearchPage.open();
    await SearchPage.search('data');
    const url = await browser.getUrl();
    expect(url).toBe('https://www.mendeley.com/search/?page=1&query=data&sortBy=relevance');
    await (await SearchPage.resultsListItem).waitForDisplayed();
    const results = await SearchPage.resultsList;
    expect(results).toHaveLength(10);
  });
});