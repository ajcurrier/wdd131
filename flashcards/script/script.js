let currentCard = 0;
let showingBack = false;
let correct = [];
let wrong = [];
let vocabCards = [];

fetch('/csv/web_dev_vocab.csv')
    .then(response => response.text())
    .then(data => {
        vocabCards = parseCSV(data);
        shuffleCards();
        displayCard(currentCard);
    });

function shuffleCards() {
    for (let i = vocabCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vocabCards[i], vocabCards[j]] = [vocabCards[j], vocabCards[i]];
    }
}

function displayCard(index) {
    const flashcard = document.getElementById('flashcard');
    flashcard.innerText = vocabCards[index].term;
    showingBack = false;
}

document.getElementById('show-back').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    if (showingBack) {
        displayCard(currentCard);
    } else {
        flashcard.innerText = vocabCards[currentCard].definition;
    }
    showingBack = !showingBack;
});

document.getElementById('correct-btn').addEventListener('click', () => {
    correct.push(vocabCards[currentCard]);
    nextCard();
});

document.getElementById('wrong-btn').addEventListener('click', () => {
    wrong.push(vocabCards[currentCard]);
    nextCard();
});

function nextCard() {
    currentCard = (currentCard + 1) % vocabCards.length;
    displayCard(currentCard);
}

document.getElementById('show-html').addEventListener('click', () => filterCards('HTML'));
document.getElementById('show-css').addEventListener('click', () => filterCards('CSS'));
document.getElementById('show-general').addEventListener('click', () => filterCards('General'));
document.getElementById('show-all').addEventListener('click', () => displayAllCards());

function filterCards(type) {
    vocabCards = vocabCards.filter(card => card.type === type);
    currentCard = 0;
    displayCard(currentCard);
}

function displayAllCards() {
    fetch('/csv/web_dev_vocab.csv')
        .then(response => response.text())
        .then(data => {
            vocabCards = parseCSV(data);
            shuffleCards();
            displayCard(currentCard);
        });
}

document.getElementById('show-report').addEventListener('click', () => {
    const reportContent = document.getElementById('report-content');
    const report = `
        <p>Total Correct: ${correct.length}</p>
        <p>Total Wrong: ${wrong.length}</p>
        <h4>Incorrect by Category</h4>
        <ul>
            ${generateReport(wrong)}
        </ul>
    `;
    reportContent.innerHTML = report;
    document.getElementById('report').style.display = 'block';
});

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

function parseCSV(data) {
    const lines = data.split('\\n');
    const cards = [];
    lines.forEach(line => {
        const [term, definition, type] = line.split(',');
        cards.push({ term, definition, type });
    });
    return cards;
}
