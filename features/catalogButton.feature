Feature: Main

@catalogButton
  Scenario: Catalog button change color after click

    Given The main page
    When I click on catalog button
    Then It becomes active