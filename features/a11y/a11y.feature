Feature: A11y test
Description: Test

    Scenario: A11y Test
        Given I perform a basic a11y test on 'https://angular.realworld.io/' and log the results to the console
        When I perform a basic a11y test on 'https://nymag.com/' and log the results to the console
        Then I perform a a11y test using selector '.social-icons__icon' on page 'https://www.cbsnews.com/miami/'