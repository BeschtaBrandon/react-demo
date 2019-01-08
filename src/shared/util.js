var stockAPIBase = 'https://api.iextrading.com/1.0/stock/';

export default function callAPI(stock) {
  return fetch(stockAPIBase + stock + '/quote')
}
