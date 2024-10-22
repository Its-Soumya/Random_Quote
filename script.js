const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.innerText = data.content;
        authorText.innerText = data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

// Event Listener
newQuoteButton.addEventListener('click', getRandomQuote);

// Initial Quote
getRandomQuote();