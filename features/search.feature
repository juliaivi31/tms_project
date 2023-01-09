Feature: Main

@search
  Scenario: As a user, I can use search

    Given The main page2
    When I use search bar
    Then I go to the relevant request