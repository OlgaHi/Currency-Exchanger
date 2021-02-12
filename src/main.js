import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import CurrencyExchange from './js/currencyExchange.js';


// function displayResult() {
//   $("#result").text();
// }

$(document).ready(function() {
  $("form#exchanger").submit(function(event) {
    event.preventDefault();
    let currency = $("#currency option:selected").val();
    let number = parseInt($("#amount").val());
    console.log(number, currency);
    //CurrencyExchange.getExchange(currency, number)
    //.then(function(response) {
    // displayResult(response);
    //});
    
    
  });
})

