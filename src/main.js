import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currencyExchange.js';

function clearFields() {
  $("#currency").val("");
  $("#amount").val("");
  $('#currency_not_selected').text("");
  $('#wrong_number').text("");
  $("#result").text("");
  $("#server_error").text("");

}


function displayResult(response, selectedCurrency, number) {
  if (response.result === "success") {
    const rates = Object.entries(response.conversion_rates);
    for (const [key, value] of rates) {
      if (key === selectedCurrency) {
        let result1 = (number * value).toFixed(2);
        $("#result").text(`${number} USD (US Dollars) = ${result1} ${selectedCurrency}`);
      }
    }
  } else {
    $("#server_error").text(`Sorry! ${response["error-type"]}`);
  }
}

$(document).ready(function() {
  $("form#exchanger").submit(function(event) {
    event.preventDefault();
    let selectedCurrency = $("#currency option:selected").val();
    let number = parseInt($("#amount").val());
    clearFields();
    if (number > 0 & selectedCurrency !== "- Select currency -") {
      CurrencyExchange.getExchange()
        .then(function(response) {
          displayResult(response, selectedCurrency, number);
        });
    } else if(selectedCurrency === '- Select currency -') {
      $("#currency_not_selected").text("Please select available currency");
    } else {
      $("#wrong_number").text("Please enter any number more than 0!");
    }
  });
});

