const base_currencyE1 = document.getElementById('base_currency');
const base_amountE1 = document.getElementById('base_amount');
const quote_currencyE1 = document.getElementById('quote_currency');
const quote_amountE1 = document.getElementById('quote_amount');
const rateE1 = document.getElementById('rate');
const exchange = document.getElementById('exchange');

base_currencyE1.addEventListener('change', calculate);
base_amountE1.addEventListener('change', calculate);
quote_currencyE1.addEventListener('change', calculate);
quote_amountv.addEventListener('change', calculate);

exchange.addEventListener('click', () => {
const temp = base_currencyE1.value;
base_currencyE1.value = quote_currencyE1.value;
quote_currencyE1.value = temp;
calculate();
});

function calculate() {
    const base_currency = base_currencyE1.value;
    const quote_currency = quote_currencyE1.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    .then(res => res.json())
    .then(res => {
     const rate = res.rates[quote_currency];
     rateE1.innerText = `1 ${base_currency} = ${rate} ${quote_currency}`
     quote_amountE1.value = (base_amountE1.value * rate).toFixed(2);
    })
}

calculate();