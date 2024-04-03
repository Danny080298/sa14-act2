document.getElementById('converter-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let source = document.getElementById('source-currency').value;
    let target = document.getElementById('target-currency').value;
    let amount = document.getElementById('amount').value;

    let url = `https://api.exchangerate-api.com/v4/latest/${source}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        let rate = data.rates[target];
        let convertedAmount = (amount * rate).toFixed(2);

        document.getElementById('converted-amount').textContent = `${convertedAmount} ${target}`;
        document.getElementById('exchange-rate').textContent = `1 ${source} = ${rate} ${target}`;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
});
