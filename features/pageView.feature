Feature: Main

@pageView
  Scenario: As a user, I can use buttons on menu

    Given Main page
    When I click on logo
    Then I see main blocks

@pageView-negative
  Scenario: As a user, I can use buttons on menu

    Given Main page-n
    When I click on logo-n
    Then I see main blocks-n