/// <reference types="cypress"/>

describe('Testar as funcionalidades da calculadora na build Prototype', () => {

    // considerei esse teste como negativo pois não seria possível realizar o calculo sem valor informado no segundo campo
    it ('Testar a calculadora aceita fazer o calculo com considerando nenhum valor no campo como 0', () => {
        var primeiro = Math.floor(Math.random() * 10000);
        var segundo;
        var result = (primeiro + segundo);
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Add');
        cy.get('#number1Field').type(primeiro);
        cy.get('#integerSelect').check();
        cy.get('#calculateButton').click();
        cy.get('#numberAnswerField').invoke('text').should('match', /^[0-9]*$/);       

    })

    // teste negativo para valor invalido
    it ('Testar operação de multiplicação com um dígito inválido', () => {
        var primeiro = Math.floor(Math.random() * 10000);
        var segundo = 'invalido';
        var result = primeiro + segundo;
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Multiply');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#calculateButton').click();
        cy.get('h3').should('contain.text', 'Number 2 is not a number');       

    })


    it ('Testar operação de soma', () => {
        var primeiro = Math.floor(Math.random() * 10000);
        var segundo = Math.floor(Math.random() * 10000);
        var result = primeiro + segundo;
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Add');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#calculateButton').click();
        cy.get('#numberAnswerField').should('contain.value', result);

    })


    it ('Testar operação de divisão com apenas numeros inteiros na resposta', () => {
        var primeiro = Math.floor(Math.random() * 10000);
        var segundo = Math.floor(Math.random() * 100)
        var result = (primeiro / segundo);
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Divide');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#integerSelect').check();
        cy.get('#calculateButton').click();
        cy.get('#numberAnswerField').should('contain.value', Math.floor(result));       

    })

    it ('Testar operação de concatenação com qualquer digito', () => {
        var primeiro = Math.random().toString(36).substr(2, 5);
        var segundo = Math.random().toString(36).substr(2, 5);
        var result = primeiro + segundo;
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Concatenate');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#calculateButton').click();
        cy.get('#numberAnswerField').should('contain.value', result);       

    })

    it ('Testar se a calculadora continua funcionando apos dividimos por 0', () => {
        var primeiro = Math.floor(Math.random() * 10000);
        var segundo = 0
        var result = primeiro / segundo;
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
        cy.get('#selectBuild').select('Prototype');
        cy.get('#selectOperationDropdown').select('Divide');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#calculateButton').click();
        cy.get('#selectOperationDropdown').select('Add');
        cy.get('#number1Field').type(primeiro);
        cy.get('#number2Field').type(segundo);
        cy.get('#calculateButton').should('be.enabled');
    })



        


})
