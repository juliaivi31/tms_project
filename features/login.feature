Feature: Main

@login
  Scenario: As a user, I can log in

    Given I'm on the main page
    When I login with <username> and <password>
    Then I should see bot-protection page

    Examples:
      | username            | password |
      | foobar              | barfoo   |

@login-negative
  Scenario: As a user, I can log in

    Given I'm on the main page-n
    When I login with <username> and <password>-n
    Then I should see bot-protection page-n

    Examples:
      | username            | password |
      | foobar              | barfoo   |