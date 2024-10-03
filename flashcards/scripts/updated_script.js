
// Initialize variables for progress tracking
let currentCard = 0;
let showingBack = false;
let definitionFirst = false;

// New variables for detailed tracking
let correctStreak = 0;
let masteryLevel = {}; // Track mastery level for each card
let lastAttempted = {}; // Track last attempted date for each card

// Load and parse the CSV data
fetch('updated_flashcards_swap_ready.csv')  // Changed the fetch path to correct the file location
    .then(response => response.text())
    .then(data => {
        console.log("CSV Data:", data);  // Debugging the CSV content
        vocabCards = parseCSV(data);
        totalCards = vocabCards.length;
        loadProgressFromLocalStorage(); // Load previous progress
        shuffleCards(); // Shuffle the cards
        displayCard(currentCard); // Show the first card
        updateProgressBar(); // Initialize progress bar
    });

// Function to display the current card
function displayCard(index) {
    const card = vocabCards[index];
    const flashcardElement = document.getElementById('flashcard');

    // Display the term or definition based on the current mode (definition first or term first)
    if (definitionFirst) {
        flashcardElement.textContent = card.definition;
    } else {
        flashcardElement.textContent = card.term;
    }
}

// Function to flip the card (show the back or front)
document.getElementById('show-back').addEventListener('click', () => {
    const flashcardElement = document.getElementById('flashcard');
    showingBack = !showingBack;
    
    // Flip logic: toggle between showing the front (term) and back (definition)
    if (showingBack) {
        flashcardElement.textContent = vocabCards[currentCard].definition;
    } else {
        flashcardElement.textContent = vocabCards[currentCard].term;
    }
});

// Function to go to the next card
function nextCard() {
    currentCard = (currentCard + 1) % vocabCards.length; // Move to the next card, loop back to the start
    displayCard(currentCard); // Display the new card
    updateProgressBar(); // Update the progress bar
}

// Function to update the progress bar with debug logging
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progress = Math.floor((currentCard / vocabCards.length) * 100);
    progressBar.value = progress;
    progressText.textContent = `${progress}% completed`;
    console.log(`Progress updated: ${progress}%`); // Debug log to check progress value
}

// Parse CSV file and add right/wrong columns
function parseCSV(data) {
    const lines = data.split('\n'); // Split CSV into lines
    const cards = [];
    lines.forEach(line => {
        const [term, definition, type, right, wrong, streak, lastCorrect, lastWrong, mastery] = line.split(','); // Include all fields
        if (term && definition && type) {
            cards.push({ 
                term, 
                definition, 
                type, 
                right: parseInt(right) || 0, 
                wrong: parseInt(wrong) || 0,
                streak: parseInt(streak) || 0,
                lastCorrect: lastCorrect || '',
                lastWrong: lastWrong || '',
                mastery: mastery || ''
            });
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

// Shuffle function to randomize flashcard order
function shuffleCards() {
    for (let i = vocabCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocabCards[i], vocabCards[j]] = [vocabCards[j], vocabCards[i]]; // Swap elements
    }
}

// Modified function to track streaks and mastery level
document.getElementById('correct-btn').addEventListener('click', () => {
    console.log("Correct button clicked");
    vocabCards[currentCard].right++;
    vocabCards[currentCard].lastCorrect = new Date().toISOString(); // Store the timestamp
    vocabCards[currentCard].streak = (vocabCards[currentCard].streak || 0) + 1; // Increment the streak
    vocabCards[currentCard].mastery = calculateMastery(vocabCards[currentCard]); // Update mastery
    saveProgressToLocalStorage();
    nextCard();
});

document.getElementById('wrong-btn').addEventListener('click', () => {
    console.log("Wrong button clicked");
    vocabCards[currentCard].wrong++;
    vocabCards[currentCard].lastWrong = new Date().toISOString(); // Store the timestamp
    vocabCards[currentCard].streak = 0; // Reset streak on wrong answer
    saveProgressToLocalStorage();
    nextCard();
});

// Function to calculate mastery based on performance
function calculateMastery(card) {
    if (card.right >= 5) {
        return "Mastered";
    } else if (card.right >= 3) {
        return "Learning";
    } else {
        return "Needs Work";
    }
}

// CSV download function modified to include new data
function downloadCSV() {
    let csvContent = "data:text/csv;charset=utf-8,term,definition,type,right,wrong,streak,lastCorrect,lastWrong,mastery\n";
    for (let card of vocabCards) {
        csvContent += `${card.term},${card.definition},${card.type},${card.right},${card.wrong},${card.streak},${card.lastCorrect},${card.lastWrong},${card.mastery}
`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "flashcard_progress.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Enhanced progress report generation with streaks and mastery level
document.getElementById('show-report').addEventListener('click', () => {
    const reportContent = document.getElementById('report-content');
    const correctCards = vocabCards.filter(card => card.right > 0);
    const wrongCards = vocabCards.filter(card => card.wrong > 0);

    const masteryReport = vocabCards.reduce((acc, card) => {
        acc[card.mastery] = (acc[card.mastery] || 0) + 1;
        return acc;
    }, {});

    const report = `
        <p>Total Correct: ${correctCards.length}</p>
        <p>Total Wrong: ${wrongCards.length}</p>
        <h4>Mastery Levels</h4>
        <ul>
            <li>Mastered: ${masteryReport.Mastered || 0}</li>
            <li>Learning: ${masteryReport.Learning || 0}</li>
            <li>Needs Work: ${masteryReport['Needs Work'] || 0}</li>
        </ul>
    `;

    reportContent.innerHTML = report;
    document.getElementById('report').style.display = 'block';
});

// Filter function example: showing only HTML tags
document.getElementById('show-html').addEventListener('click', () => {
    console.log("HTML filter button clicked");
    vocabCards = vocabCards.filter(card => card.type === 'HTML');
    currentCard = 0;  // Reset to the first card
    displayCard(currentCard);  // Show the first filtered card
});
