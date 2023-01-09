Feature: Main

@loginemptyinput
  Scenario: As a user, I can't log in without email/password

    Given I am on the main page
    When I click the button
    Then I should see a flash message