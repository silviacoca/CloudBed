Feature: Exchange calculator REST API Test

  Scenario: Create currency using POST API
    Given I fill the api key "tR6TI49mh4fbKAuSjm9L" as administrator
    When I fill the "test" as code, "test" as country and 1 value
    When I send the request to API at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
    Then I validate the Id of currency that not null

  Scenario: Delete currency using DELETE API
      Given I fill the api key "tR6TI49mh4fbKAuSjm9L" as administrator
      When I fill the "test" as code, "test" as country and 2 value
      When I send the request to API at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      Then I validate the Id of currency that not null
      When I retrieve the currency Id
      When I send the delete currency request at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      Then I verify that currency was not found using Get request at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"

  Scenario: Get by id currency using GET API
      Given I fill the api key "tR6TI49mh4fbKAuSjm9L" as administrator
      When I fill the "test" as code, "test" as country and 2 value
      When I send the request to API at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      Then I validate the Id of currency that not null
      Then I verify that currency was found using Get request at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"

  Scenario: Get all currencies using GET ALL API
      Given I fill the api key "tR6TI49mh4fbKAuSjm9L" as administrator
      When I retrieve the all currencies and count at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      When I fill the "test" as code, "test" as country and 2 value
      When I send the request to API at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      Then I validate the Id of currency that not null
      When I retrieve again current all currencies at "http://qa-test.cloudbeds.com/app_dev.php/api/v1/currencies/"
      Then I validate that number of currencies is greater that previous one