
'use strict'

var { Given } = require('cucumber')
var { When } = require('cucumber')
var { Then } = require('cucumber')
let create_currency_page = require('./pages/currency_page');

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

Given(/^I fill the api key "([^"]*)" as administrator$/, function (apiKey, callback) {
    create_currency_page.setAdministratorApiKey(apiKey)
    callback()
})

When(/^I fill the "([^"]*)" as code, "([^"]*)" as country and (-?\d+) value$/, function (code, country, value, callback) {
    create_currency_page.setPostParams(code, country, value)
    callback()
})

When(/^I send the request to API at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.sendPostRequest(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(body).to.have.property("id")
        expect(body.id > 0).to.be.true
        create_currency_page.setCurrency(body)
        callback()
      })
})

Then(/^I validate the Id of currency that not null$/, function (callback) {
    var currency = create_currency_page.getCurrency()
    expect(currency).to.have.property("id")
    expect(currency.id > 0).to.be.true
    callback()
})

When(/^I retrieve the currency Id$/, function (callback) {
    create_currency_page.retrieveCurrencyId()
    callback()
})

When(/^I send the delete currency request at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.sendDeleteCurrencyRequest(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(response && response.statusCode === 204).to.be.true
        callback()
      })
})

Then(/^I verify that currency was not found using Get request at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.getCurrencyById(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(response && response.statusCode === 404).to.be.true
        callback()
      })
})

Then(/^I verify that currency was found using Get request at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.getCurrencyById(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(response && response.statusCode === 200).to.be.true
        callback()
      })
})

Then(/^I retrieve the all currencies and count at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.getAllCurrencies(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(response && response.statusCode === 200).to.be.true
        create_currency_page.setPreviousCountCurrencies(body._collection.length)
        callback()
      })
})

When(/^I retrieve again current all currencies at "([^"]*)"$/, function (endpoint, callback) {
    create_currency_page.getAllCurrencies(endpoint, function (error, response, body) {
        if (error) throw new Error(error)
        
        expect(response && response.statusCode === 200).to.be.true
        create_currency_page.setCurrentCountCurrencies(body._collection.length)
        callback()
      })
})

When(/^I validate that number of currencies is greater that previous one$/, function (callback) {
    expect(create_currency_page.getCurrentCountCurrencies() >= create_currency_page.getPreviousCountCurrencies()).to.be.true
    callback()
})
