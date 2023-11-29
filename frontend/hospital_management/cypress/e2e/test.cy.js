/// <reference types="cypress"/>

it("google search" ,()=>{

    cy.visit("https://google.com")
    cy.get('#APjFqb').type("haris in urdu walpaper")
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.get('.MUFPAc > :nth-child(2) > a').click()
})