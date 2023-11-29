/// <reference types="cypress"/>



//the code below is to ignore unhandeled hydration errors
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  //Code to run tests
  it("empsearch",()=>{
    cy.visit("http://localhost:3000/dashboard/addEmployee")
    cy.wait(2000)
    //id me jhn jhn single slash h whn double slash legenge { eg = '#\:r1\:'   == '#\\:r1\\:' }
    cy.get('#\\:r1\\:').type("haris")
     cy.wait(2000)
    cy.get('#\\:r2\\:').type("haris@gmail.com")
     cy.wait(2000)
    cy.get('#\\:r3\\:').type("9770099834")
     cy.wait(2000)
    cy.get('#\\:r4\\:').type("Haris@123")
     cy.wait(2000)
    cy.get(':nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').click()
    cy.get('#\\:r5\\:-option-0').click()
     cy.wait(2000)

    cy.get(':nth-child(6) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]').click()
    cy.get('#\\:r7\\:-option-0').click()
     cy.wait(2000)
    cy.contains('Active').click()
     cy.wait(2000)
     cy.get(':nth-child(10) > .MuiButtonBase-root').click()
})
    
