// Initialize variables for the current card index and state of flashcard
let currentCard = 0; // Index of the currently displayed card
let showingBack = false; // Track whether the back of the card is shown

// Arrays to store correct and incorrect flashcards
let correct = []; // Array for correct answers
let wrong = []; // Array for wrong answers
let vocabCards = []; // Array to hold vocabulary cards loaded from CSV

// Load CSV data and parse it into vocabCards array
fetch('csv/web_dev_vocab.csv')
    .then(response => response.text()) // Read CSV file as text
    .then(data => {
        vocabCards = parseCSV(data); // Convert CSV text to array of cards
        shuffleCards(); // Randomize the order of flashcards
        displayCard(currentCard); // Display the first card
    });

// Shuffle the flashcards array using Fisher-Yates algorithm
function shuffleCards() {
    for (let i = vocabCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocabCards[i], vocabCards[j]] = [vocabCards[j], vocabCards[i]]; // Swap cards
    }
}

// Display the front of the card (term) based on the current index
function displayCard(index) {
    const flashcard = document.getElementById('flashcard'); // Get flashcard div
    flashcard.innerText = vocabCards[index].term; // Set term as the flashcard text
    showingBack = false; // Set to show the front side
}

// Toggle between showing the front (term) and back (definition) of the card
document.getElementById('show-back').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard'); // Get flashcard div
    if (showingBack) {
        displayCard(currentCard); // Show front if back is currently displayed
    } else {
        flashcard.innerText = vocabCards[currentCard].definition; // Show back (definition)
    }
    showingBack = !showingBack; // Toggle the state
});

// Add event listener to mark the card as correct and go to the next card
document.getElementById('correct-btn').addEventListener('click', () => {
    correct.push(vocabCards[currentCard]); // Add current card to correct array
    nextCard(); // Move to the next card
});

// Add event listener to mark the card as incorrect and go to the next card
document.getElementById('wrong-btn').addEventListener('click', () => {
    wrong.push(vocabCards[currentCard]); // Add current card to wrong array
    nextCard(); // Move to the next card
});

// Function to move to the next card in the array
function nextCard() {
    currentCard = (currentCard + 1) % vocabCards.length; // Increment index, loop back if at the end
    displayCard(currentCard); // Display the next card
}

// Event listeners for sorting the flashcards by type (HTML, CSS, General)
document.getElementById('show-html').addEventListener('click', () => filterCards('HTML'));
document.getElementById('show-css').addEventListener('click', () => filterCards('CSS'));
document.getElementById('show-general').addEventListener('click', () => filterCards('General'));
document.getElementById('show-all').addEventListener('click', () => displayAllCards());

// Filter the cards by the selected type and display the first filtered card
function filterCards(type) {
    vocabCards = vocabCards.filter(card => card.type === type); // Filter cards by type
    currentCard = 0; // Reset to the first card in the filtered list
    displayCard(currentCard); // Display the first filtered card
}

// Reset and display all cards by reloading the CSV data
function displayAllCards() {
    fetch('/csv/web_dev_vocab.csv')
        .then(response => response.text())
        .then(data => {
            vocabCards = parseCSV(data); // Reload all cards
            shuffleCards(); // Reshuffle the cards
            displayCard(currentCard); // Display the first card
        });
}

// Show the progress report when the "Show Report" button is clicked
document.getElementById('show-report').addEventListener('click', () => {
    const reportContent = document.getElementById('report-content'); // Get report div
    const report = `
        <p>Total Correct: ${correct.length}</p>
        <p>Total Wrong: ${wrong.length}</p>
        <h4>Incorrect by Category</h4>
        <ul>
            ${generateReport(wrong)} <!-- Generate a report of wrong cards by category -->
        </ul>
    `;
    reportContent.innerHTML = report; // Display the report content
    document.getElementById('report').style.display = 'block'; // Show the report section
});

// Generate a report of incorrect cards grouped by category
function generateReport(cards) {
    const categories = {}; // Object to store count of incorrect cards by category
    cards.forEach(card => {
        if (!categories[card.type]) {
            categories[card.type] = 0; // Initialize category count
        }
        categories[card.type]++; // Increment category count
    });

    // Convert category counts to a list of HTML list items
    return Object.entries(categories) // Convert object to array of key-value pairs
        .map(([category, count]) => `<li>${category}: ${count} wrong</li>`) // Create list items
        .join(''); // Join list items into a single string
}

// Parse the CSV file content into an array of flashcard objects
function parseCSV(data) {
    const lines = data.split('\\n'); // Split CSV text into lines
    const cards = [];
    lines.forEach(line => {
        const [term, definition, type] = line.split(','); // Split each line into term, definition, type
        cards.push({ term, definition, type }); // Create card object and add to array
    });
    return cards;
}
