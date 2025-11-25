// Currency details and emojis for flags
const currencyDetails = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦" }
];

const currencyRates = {
  USD: { INR: 83, EUR: 0.92, GBP: 0.79, JPY: 150.5, AUD: 1.50, CAD: 1.37, CHF: 0.91, CNY: 7.10, SGD: 1.35, ZAR: 18.50, USD: 1 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.81, AUD: 0.018, CAD: 0.016, CHF: 0.011, CNY: 0.085, SGD: 0.016, ZAR: 0.22, INR: 1 },
  EUR: { USD: 1.09, INR: 90, GBP: 0.86, JPY: 163.2, AUD: 1.64, CAD: 1.49, CHF: 0.99, CNY: 7.70, SGD: 1.47, ZAR: 19.85, EUR: 1 },
  GBP: { USD: 1.26, INR: 104.7, EUR: 1.17, JPY: 190, AUD: 1.91, CAD: 1.73, CHF: 1.15, CNY: 8.96, SGD: 1.70, ZAR: 23, GBP: 1 },
  JPY: { USD: 0.0066, INR: 0.55, EUR: 0.0061, GBP: 0.0053, AUD: 0.010, CAD: 0.0091, CHF: 0.0061, CNY: 0.047, SGD: 0.0090, ZAR: 0.12, JPY: 1 },
  AUD: { USD: 0.67, INR: 56, EUR: 0.61, GBP: 0.52, JPY: 99.5, CAD: 0.91, CHF: 0.61, CNY: 4.73, SGD: 0.90, ZAR: 12.05, AUD: 1 },
  CAD: { USD: 0.73, INR: 61, EUR: 0.67, GBP: 0.58, JPY: 109.2, AUD: 1.10, CHF: 0.67, CNY: 5.20, SGD: 1.00, ZAR: 13.20, CAD: 1 },
  CHF: { USD: 1.10, INR: 91, EUR: 1.01, GBP: 0.87, JPY: 163.7, AUD: 1.65, CAD: 1.48, CNY: 7.76, SGD: 1.48, ZAR: 19.95, CHF: 1 },
  CNY: { USD: 0.14, INR: 11.8, EUR: 0.13, GBP: 0.11, JPY: 21.2, AUD: 0.21, CAD: 0.19, CHF: 0.13, SGD: 0.19, ZAR: 2.57, CNY: 1 },
  SGD: { USD: 0.74, INR: 62, EUR: 0.68, GBP: 0.59, JPY: 120.9, AUD: 1.11, CAD: 1.00, CHF: 0.68, CNY: 5.31, ZAR: 13.45, SGD: 1 },
  ZAR: { USD: 0.05, INR: 4.6, EUR: 0.050, GBP: 0.043, JPY: 8.68, AUD: 0.083, CAD: 0.076, CHF: 0.050, CNY: 0.39, SGD: 0.074, ZAR: 1 }
};

function populateCurrencySelectors() {
  const fromSelect = document.getElementById('fromCurrency');
  const toSelect = document.getElementById('toCurrency');
  fromSelect.innerHTML = '';
  toSelect.innerHTML = '';

  currencyDetails.forEach(currency => {
    const optionFrom = document.createElement('option');
    optionFrom.value = currency.code;
    optionFrom.text = `${currency.flag} ${currency.name} (${currency.code})`;
    fromSelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = currency.code;
    optionTo.text = `${currency.flag} ${currency.name} (${currency.code})`;
    toSelect.appendChild(optionTo);
  });

  fromSelect.value = 'USD';
  toSelect.value = 'INR';
}

window.onload = populateCurrencySelectors;
