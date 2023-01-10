Feature: Main

@catalogButton
  Scenario: Catalog button change color after click

    Given The main page
    When I click on catalog button
    Then It becomes active

@catalogButton-negative
  Scenario: Catalog button change color after click

    Given The main page-n
    When I click on catalog button-n
    Then It becomes active-n