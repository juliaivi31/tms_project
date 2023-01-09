Feature: Main

@changeCatalog
  Scenario: Catalog button change pictures

    Given The main page1
    When I click on button in catalog block
    Then Pictures change