const loadQuotas = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}

const displayQuote = quote => {
    const quateElement = document.getElementById('quote')
    quateElement.classList.add('quote');
    quateElement.innerText =quote.quote;
}