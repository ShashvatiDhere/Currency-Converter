// Replace this with real API or static rates
const exchangeRates = {
    USD: { INR: 83.2, EUR: 0.91 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.10, INR: 91.5 },
};

document.getElementById('convert-btn').addEventListener('click', () => {
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(amount)) {
        resultDiv.innerText = "Please enter a valid number";
        return;
    }

    if (from === to) {
        resultDiv.innerText = `Same currency: ${amount}`;
    } else {
        const rate = exchangeRates[from][to];
        if (rate) {
            const converted = (amount * rate).toFixed(2);
            resultDiv.innerText = `${amount} ${from} = ${converted} ${to}`;
        } else {
            resultDiv.innerText = "Conversion rate not available.";
        }
    }
});