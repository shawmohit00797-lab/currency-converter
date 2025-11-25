function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (!amount || amount < 0) {
    document.getElementById('result').textContent = 'Please enter a valid amount.';
    return;
  }
  if (!currencyRates[fromCurrency] || !currencyRates[fromCurrency][toCurrency]) {
    document.getElementById('result').textContent = 'Conversion rate not available for selected currencies.';
    return;
  }

  const rate = currencyRates[fromCurrency][toCurrency];
  const result = amount * rate;
  document.getElementById('result').textContent =
    `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
