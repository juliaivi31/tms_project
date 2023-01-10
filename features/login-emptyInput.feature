Feature: Main

@login-emptyInput
  Scenario: As a user, I can't log in without email/password

    Given I am on the main page
    When I click the button
    Then I should see a flash message

@login-emptyInput-negative
  Scenario: As a user, I can't log in without email/password

    Given I am on the main page-n
    When I click the button-n
    Then I should see a flash message-n