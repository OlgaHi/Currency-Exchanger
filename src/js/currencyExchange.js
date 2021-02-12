export default class CurrencyExchange {
  static getExchange() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const apiURL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };

      request.open("GET", apiURL, true);
      request.send();
    });
  }
}