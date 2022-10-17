Feature: Application Login
  Login into application with credentials


  Scenario: External User logs into application with valid username and password
    Given User navigates to parkstreet login page "https://stgappnavigator.parkstreet.com/login"
    When User login into application with username and password
      | skajle@parkstreet.com | Test1234 |
    Then user should be redirect to "https://stgappnavigator.parkstreet.com/dashboard"
