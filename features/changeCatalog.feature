Feature: Main

@changeCatalog
  Scenario: Catalog button change pictures

    Given The main page1
    When I click on button in catalog block
    Then Pictures change

@changeCatalog-negative
  Scenario: Catalog button change pictures

    Given The main page1-n
    When I click on button in catalog block-n
    Then Pictures change-n