
// Initialize variables for progress tracking
let currentCard = 0;
let showingBack = false;
let definitionFirst = false;

// New variables for detailed tracking
let correctStreak = 0;
let masteryLevel = {}; // Track mastery level for each card
let lastAttempted = {}; // Track last attempted date for each card

// Load and parse the CSV data
fetch('csv/web_dev_vocab.csv')
    .then(response => response.text())
    .then(data => {
        vocabCards = parseCSV(data);
        totalCards = vocabCards.length;
        loadProgressFromLocalStorage(); // Load previous progress
        shuffleCards(); // Shuffle the cards
        displayCard(currentCard); // Show the first card
        updateProgressBar(); // Initialize progress bar
    });

// Modified function to track streaks and mastery level
document.getElementById('correct-btn').addEventListener('click', () => {
    vocabCards[currentCard].right++;
    vocabCards[currentCard].lastCorrect = new Date().toISOString(); // Store the timestamp
    vocabCards[currentCard].streak = (vocabCards[currentCard].streak || 0) + 1; // Increment the streak
    vocabCards[currentCard].mastery = calculateMastery(vocabCards[currentCard]); // Update mastery
    saveProgressToLocalStorage();
    nextCard();
});

document.getElementById('wrong-btn').addEventListener('click', () => {
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
    vocabCards.forEach((card, index) => {
        csvContent += `${card.term},${card.definition},${card.type},${card.right},${card.wrong},${card.streak || 0},${card.lastCorrect || ''},${card.lastWrong || ''},${card.mastery || ''}\n`;
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
