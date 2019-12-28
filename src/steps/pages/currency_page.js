var request = require("request");

'use strict';
module.exports = {

  CreateCurrencyPage: {
    apiKey: String,
    currencyId: String,
    currency: {},
    currencyCreated: {},
    previousCountCurrencies: String,
    currentCountCurrencies: String
  },

  setAdministratorApiKey: function(apiKey) {
    var page = this.CreateCurrencyPage
    page.apiKey = apiKey;
  },

  setPostParams: function(code, country, value){
    var page = this.CreateCurrencyPage
    var number = Math.random()
    page.currency = {
        'code': code + number,
        'country': country + number,
        'value': value
    }
  },

  sendPostRequest: function(endpoint, callback) {
    var page = this.CreateCurrencyPage
    var options = {
      method: 'POST',
      url: endpoint,
      headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: page.apiKey
        },
      body: page.currency,
      json: true
    };

    request(options, callback)
  },

  setCurrency: function (currency) {
    var page = this.CreateCurrencyPage
    page.currencyCreated = currency
  },

  getCurrency: function () {
    var page = this.CreateCurrencyPage
    return page.currencyCreated
  },

  retrieveCurrencyId: function() {
    var page = this.CreateCurrencyPage
    page.currencyId = page.currencyCreated.id
  },

  sendDeleteCurrencyRequest: function(endpoint, callback) {
    var page = this.CreateCurrencyPage
    
    var options = {
      method: 'DELETE',
      url: endpoint + page.currencyId,
      headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: page.apiKey
        },
      json: true
    };

    request(options, callback)
  },

  getCurrencyById: function(endpoint, callback) {
    var page = this.CreateCurrencyPage
    var options = {
      method: 'GET',
      url: endpoint + page.currencyId,
      headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: page.apiKey
        },
      json: true
    };

    request(options, callback)
  },

  getAllCurrencies: function(endpoint, callback) {
    var page = this.CreateCurrencyPage
    var options = {
      method: 'GET',
      url: endpoint,
      headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: page.apiKey
        },
      json: true
    };

    request(options, callback)
  },

  setPreviousCountCurrencies: function(count) {
    var page = this.CreateCurrencyPage
    page.previousCountCurrencies = count
  },

  getPreviousCountCurrencies: function() {
    return this.CreateCurrencyPage.previousCountCurrencies
  },

  setCurrentCountCurrencies: function(count) {
    var page = this.CreateCurrencyPage
    page.currentCountCurrencies = count
  },

  getCurrentCountCurrencies: function() {
    return this.CreateCurrencyPage.currentCountCurrencies
  }
}