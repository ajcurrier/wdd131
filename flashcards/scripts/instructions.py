import os
import zipfile

# Recreating the folder structure and file writing steps

# Define folder structure
root_folder = '/mnt/data/flashcards_project'
styles_folder = os.path.join(root_folder, 'styles')
scripts_folder = os.path.join(root_folder, 'scripts')
csv_folder = os.path.join(root_folder, 'csv')

# Create necessary directories
os.makedirs(styles_folder, exist_ok=True)
os.makedirs(scripts_folder, exist_ok=True)
os.makedirs(csv_folder, exist_ok=True)

# Rewriting the files from previous content

# HTML content
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vocabulary Flashcards</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div class="flashcard-container">
        <div class="flashcard" id="flashcard"></div>
        <button id="show-back">Flip Card</button>
        <div class="buttons">
            <button id="correct-btn">Correct</button>
            <button id="wrong-btn">Wrong</button>
        </div>
        <div class="sort-buttons">
            <button id="show-html">Show HTML Tags</button>
            <button id="show-css">Show CSS Tags</button>
            <button id="show-general">Show General Terms</button>
            <button id="show-all">Show All</button>
        </div>
    </div>
    <div id="report">
        <h3>Progress Report</h3>
        <button id="show-report">Show Report</button>
        <div id="report-content"></div>
    </div>
    <script src="scripts/script.js"></script>
</body>
</html>
"""

# CSS content
css_content = """body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.flashcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.flashcard {
    width: 1000px;
    height: 500px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.buttons, .sort-buttons {
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin-top: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#report {
    margin-top: 20px;
    display: none;
}

#report-content {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 10px;
    width: 80%;
}
"""

# JavaScript content
js_content = """let currentCard = 0;
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
"""

# CSV content
csv_content = """
DOM,Document Object Model,HTML
concatenate,To join two or more strings together,General
instantiate,To create an instance of a class,General
implicit coercion,Automatic type conversion by JavaScript,General
explicit coercion,Manually converting data types in JavaScript,General
NaN,Not-a-Number value in JavaScript,General
initialize,Set a variable with an initial value,General
array,A collection of elements in an ordered list,General
element,A single part of an HTML document,HTML
tag,An HTML structure wrapped in angle brackets,HTML
grid,Defines a grid-based layout in CSS,CSS
flexbox,Defines a flexible box layout in CSS,CSS
border,Defines a border around an element,CSS
section,Defines a section of an HTML document,HTML
menu,Defines a list of commands in HTML,HTML
"""

# Write the files
with open(os.path.join(root_folder, 'index.html'), 'w') as html_file:
    html_file.write(html_content)

with open(os.path.join(styles_folder, 'style.css'), 'w') as css_file:
    css_file.write(css_content)

with open(os.path.join(scripts_folder, 'script.js'), 'w') as js_file:
    js_file.write(js_content)

with open(os.path.join(csv_folder, 'web_dev_vocab.csv'), 'w') as csv_file:
    csv_file.write(csv_content)

# Create the zip file
zip_file_path = '/mnt/data/flashcards_project.zip'

with zipfile.ZipFile(zip_file_path, 'w') as zipf:
    for folder_name, subfolders, filenames in os.walk(root_folder):
        for filename in filenames:
            file_path = os.path.join(folder_name, filename)
            zipf.write(file_path, os.path.relpath(file_path, root_folder))

zip_file_path  # Return the path of the zip file
