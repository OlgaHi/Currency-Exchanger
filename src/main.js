import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currencyExchange.js';


function displayResult(response, selectedCurrency, number) {
  
  const rates = Object.entries(response.conversion_rates);
  for (const [key, value] of rates) {
    if (key === selectedCurrency) {
      let result1 = (number * value).toFixed(2);
      $("#result").text(result1);
    }
  }
  
}

$(document).ready(function() {
  $("form#exchanger").submit(function(event) {
    event.preventDefault();
    let selectedCurrency = $("#currency option:selected").val();
    let number = parseInt($("#amount").val());
    
    CurrencyExchange.getExchange()
      .then(function(response) {
        displayResult(response, selectedCurrency, number);
      });
    
    
  });
})

