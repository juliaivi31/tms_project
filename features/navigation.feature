Feature: Main

@navigation
  Scenario: As a user, I can use buttons on menu

    Given On the main page
    When I use buttons
    Then I should see changing menu

@navigation-negative
  Scenario: As a user, I can use buttons on menu

    Given On the main page-n
    When I use buttons-n
    Then I should see changing menu-n