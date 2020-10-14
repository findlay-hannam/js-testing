const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    get inputSearch () { return $('#search-mendeley'); }
    get btnSubmit () { return $('.qe-search-button'); }
    get resultsListItem () { return $('.qe-results-list'); }
    get resultsList () { return $$('.qe-results-list'); }
    get rhsPanel () { return $('.qe-rhs-panel'); }

    async search (query) {
        await (await this.inputSearch).setValue(query);
        await (await this.btnSubmit).click();
    }

    open () {
        return super.open('search');
    }
}

module.exports = new SearchPage();
