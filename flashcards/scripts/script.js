// Initialize variables for the current card index and state of flashcard
let currentCard = 0; // Index of the currently displayed card
let showingBack = false; // Track whether the back of the card is shown
let definitionFirstButton = document.getElementById('definition-first'); // Button to toggle definition first
let definitionFirst = false; // Track whether definition is shown first

// Arrays to store correct and incorrect flashcards
let vocabCards = []; // Array to hold vocabulary cards loaded from CSV
let filteredCards = []; // Array to hold filtered cards

// Track progress for flashcards
let totalCards = vocabCards.length; // Total number of flashcards
let completedCards = 0; // Track number of completed flashcards

// Load CSV data and parse it into vocabCards array
fetch('csv/web_dev_vocab.csv')
    .then(response => response.text()) // Read CSV file as text
    .then(data => {
        vocabCards = parseCSV(data); // Convert CSV text to array of cards
        totalCards = vocabCards.length; // Set totalCards AFTER vocabCards is populated
        loadProgressFromLocalStorage(); // Load any existing progress from localStorage
        shuffleCards(); // Randomize the order of flashcards
        displayCard(currentCard); // Display the first card
        updateProgressBar(); // Initialize progress bar on first load
    });

// Shuffle the flashcards array using Fisher-Yates algorithm
function shuffleCards() {
    for (let i = vocabCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocabCards[i], vocabCards[j]] = [vocabCards[j], vocabCards[i]]; // Swap cards
    }
}

// Add event listener for definition first toggle
definitionFirstButton.addEventListener('click', () => {
    definitionFirstButton.classList.toggle('definitionFirst');
    definitionFirst = !definitionFirst;
    displayCard(currentCard); // Redraw the current card based on the new state
});

// Display the card based on definitionFirst flag
function displayCard(index) {
    const flashcard = document.getElementById('flashcard');
    if (definitionFirst) {
        flashcard.innerText = vocabCards[index].definition; // Show definition first
        showingBack = true;
    } else {
        flashcard.innerText = vocabCards[index].term; // Show term first
        showingBack = false;
    }
}

// Toggle between showing front (term) and back (definition) of the card
document.getElementById('show-back').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    if (showingBack) {
        flashcard.innerText = vocabCards[currentCard].term;
    } else {
        flashcard.innerText = vocabCards[currentCard].definition;
    }
    showingBack = !showingBack;
});

// Event listener to mark card as correct
document.getElementById('correct-btn').addEventListener('click', () => {
    vocabCards[currentCard].right++; // Increment correct count
    saveProgressToLocalStorage(); // Save updated progress to localStorage
    nextCard(); // Move to the next card
});

// Event listener to mark card as incorrect
document.getElementById('wrong-btn').addEventListener('click', () => {
    vocabCards[currentCard].wrong++; // Increment incorrect count
    saveProgressToLocalStorage(); // Save updated progress to localStorage
    nextCard(); // Move to the next card
});

// Move to the next card
function nextCard() {
    currentCard++;
    if (currentCard >= vocabCards.length) {
        currentCard = 0; // Loop back to the first card
    }
    displayCard(currentCard);
}

// Parse CSV file and add right/wrong columns
function parseCSV(data) {
    const lines = data.split('\n'); // Split CSV into lines
    const cards = [];
    lines.forEach(line => {
        const [term, definition, type, right, wrong] = line.split(','); // Include right/wrong
        if (term && definition && type) {
            cards.push({ term, definition, type, right: parseInt(right) || 0, wrong: parseInt(wrong) || 0 });
        }
    });
    return cards;
}

// Save progress to localStorage
function saveProgressToLocalStorage() {
    localStorage.setItem('flashcardProgress', JSON.stringify(vocabCards)); // Save vocabCards with updated right/wrong counts
}

// Load progress from localStorage
function loadProgressFromLocalStorage() {
    const savedProgress = localStorage.getItem('flashcardProgress');
    if (savedProgress) {
        vocabCards = JSON.parse(savedProgress); // Load progress if available
    }
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const percentComplete = (completedCards / totalCards) * 100;
    progressBar.value = percentComplete;
    progressText.innerText = `${Math.round(percentComplete)}% (${completedCards} out of ${totalCards} completed)`;
}

// Function to download the CSV file with updated progress
function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,index,question,answer,right,wrong\n"; // CSV header
    vocabCards.forEach((card, index) => {
        csvContent += `${index},${card.term},${card.definition},${card.right},${card.wrong}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "flashcard_progress.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add event listener for save progress button
document.getElementById('save-csv-btn').addEventListener('click', downloadCSV);

// Add event listeners for filtering flashcards by type
document.getElementById('show-html').addEventListener('click', () => filterCards('HTML'));
document.getElementById('show-css').addEventListener('click', () => filterCards('CSS'));
document.getElementById('show-general').addEventListener('click', () => filterCards('General'));
document.getElementById('show-all').addEventListener('click', () => displayAllCards());

// Filter the cards by the selected type and display the first filtered card
function filterCards(type) {
    filteredCards = vocabCards.filter(card => card.type === type);
    currentCard = 0; // Reset to the first card in the filtered list
    if (filteredCards.length > 0) {
        displayFilteredCard(currentCard);
    }
}

// Display filtered card
function displayFilteredCard(index) {
    const flashcard = document.getElementById('flashcard');
    flashcard.innerText = filteredCards[index].term;
    showingBack = false; // Show front side initially
}

// Display all cards by reloading the CSV data
function displayAllCards() {
    filteredCards = [];
    currentCard = 0; // Reset to the first card
    displayCard(currentCard); // Display the first card from all cards
}

// Generate report of incorrect cards by category
function generateReport(cards) {
    const categories = {};
    cards.forEach(card => {
        if (!categories[card.type]) {
            categories[card.type] = 0;
        }
        categories[card.type]++;
    });
    return Object.entries(categories)
        .map(([category, count]) => `<li>${category}: ${count} wrong</li>`)
        .join('');
}

// Show report when the "Show Report" button is clicked
document.getElementById('show-report').addEventListener('click', () => {
    const reportContent = document.getElementById('report-content'); // Get the div for displaying the report
    
    const correctCards = vocabCards.filter(card => card.right > 0); // Filter flashcards with correct answers
    const wrongCards = vocabCards.filter(card => card.wrong > 0);   // Filter flashcards with wrong answers

    const report = `
        <p>Total Correct: ${correctCards.length}</p>
        <p>Total Wrong: ${wrongCards.length}</p>
        <h4>Incorrect by Category</h4>
        <ul>${generateReport(wrongCards)}</ul>
    `;

    reportContent.innerHTML = report; // Update the report content
    document.getElementById('report').style.display = 'block'; // Display the report section
});

// Function to generate a report of incorrect cards grouped by category
function generateReport(cards) {
    const categories = {}; // Object to store count of incorrect cards by category
    cards.forEach(card => {
        if (!categories[card.type]) {
            categories[card.type] = 0; // Initialize the category count
        }
        categories[card.type]++; // Increment the count for the specific category
    });

    // Convert category counts to HTML list items
    return Object.entries(categories)
        .map(([category, count]) => `<li>${category}: ${count} wrong</li>`)
        .join('');
}
