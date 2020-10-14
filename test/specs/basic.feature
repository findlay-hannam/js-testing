Feature: Search page

  Scenario: Gets search results
    Given I open the search page
    When I search for data
    Then I see search results are displayed
    Then there are 10 results
