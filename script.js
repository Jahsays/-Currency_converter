const base_currencyEl = document.getElementById('base_currency');
const base_amountEl = document.getElementById('base_amount');
const quote_currencyEl = document.getElementById('quote_currency');
const quote_amountEl = document.getElementById('quote_amount');
const rateEl = document.getElementById('rate');
const exchange = document.getElementById('exchange');

base_currencyEl.addEventListener('change', calculate);
base_amountEl.addEventListener('input', calculate);
quote_currencyEl.addEventListener('change', calculate);
quote_amountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	const temp = base_currencyEl.value;
	base_currencyEl.value = quote_currencyEl.value;
	quote_currencyEl.value = temp;
	calculate();
});

function calculate() {
	const base_currency = base_currencyEl.value;
	const quote_currency = quote_currencyEl.value;
	
	fetch(`https://api.exchangerate-api.com/v6/latest/${base_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[quote_currency];
		rateEl.innerText = `1 ${base_currency} = ${rate} ${quote_currency}`
		quote_amountEl.value = (base_amountEl.value * rate).toFixed(2);
	})
}

calculate();