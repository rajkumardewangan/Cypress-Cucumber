Feature: Bank Manager Login

    I want to validate Banking Scenarios

    Background:
        Given I navigate to the website

    @smoke
    Scenario: Login as Bank Manager
        When I click on Bank Manager Login Button
        And validate the page title

    @smoke
    Scenario: Add a Customer
        When I click on Bank Manager Login Button
        And validate the page title
        And I click on Add Customer Button
        And I entered
            | firstname | lastname | postcode |
            | Rahul     | Arora    | 110095   |
        And I click on submit button
        And I validate the alert text


    @bvt
    Scenario: Opening Account
        When I click on Bank Manager Login Button
        And validate the page title