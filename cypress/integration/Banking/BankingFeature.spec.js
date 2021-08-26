import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'

const homePage = new HomePageActions()
const addCustomer = new AddCustomerPageActions()

Given('I navigate to the website',()=>{

    //cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    homePage.navigateToURL()
    console.log("HELLO")
})

When('I click on Bank Manager Login Button',()=>{

    homePage.loginAsBankManager()
})

And('validate the page title',()=>{

    homePage.validateTitle().should('eq','Protractor practice website - Banking App')

})


And('I click on Add Customer Button',()=>{
    addCustomer.clickAddCustomerBtn()
})

And('I entered',(datatable)=>{
    datatable.hashes().forEach(element => {
        addCustomer.addCustomerDetails(element.firstname,element.lastname,element.postcode)
    });

})

And('I click on submit button',()=>{
    addCustomer.submitCustomerDetails
})

And('I validate the alert text',()=>{
    addCustomer.validateAlert('Customer added successfully')
})