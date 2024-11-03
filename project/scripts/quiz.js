const form = document.querySelector("#law-quiz");
const resultBox = document.querySelector("#result");

form.addEventListener('submit', callbackFunction);


// resource: https://stackabuse.com/convert-form-data-to-javascript-object/


// pull from local storage
const quizInviteDisplay = document.querySelector("#quizInvite");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let scoreStore = Number(window.localStorage.getItem("score-ls")) || 0;




function callbackFunction(event) {
    event.preventDefault();
    // prevent default prevents the form from reloading after the submit button is clicked (which is the default behavior)
    const formData = new FormData(event.target);

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    compareQuizAnswers(formDataObj, answers);
    
}


// const quizFormData = {};
// formData.forEach((value, key) => (quizFormData[key] = value));



const answers = {
q1: 'false', // correct answer for question 1
q2: 'license',      // correct answer for question 2
q3: 'yield',
q4: 'police', 
q5: 'use',
q6: 'b'
};
   

function compareQuizAnswers(userAnswers, quizAnswers) {
    let score = 0;
    for (let key in userAnswers) {
        if (userAnswers[key] === quizAnswers[key]) {
            score++;
        }
    }
        // print results

        const printScore = document.createElement('h1');
        printScore.textContent = `Your score is: ${score} out of 6`;
        resultBox.appendChild(printScore);
        console.log('printScore is {printScore}');
        localStorage.setItem("score-ls", score);
    

}
const tryAgain = document.createElement('h2');
tryAgain.className = 'quizAction';

if (scoreStore !== 0) {
    const inviteScore = document.createElement('h1')
    inviteScore.textContent = 'Your score: '+ scoreStore + ' out of 6';
    quizInviteDisplay.appendChild(inviteScore);
    if (scoreStore < 6) {
        tryAgain.textContent = 'Would you like to try again?'
        quizInviteDisplay.appendChild(tryAgain);
    } else {
        tryAgain.textContent = 'Congratulations! You passed the quiz!🥳';
        quizInviteDisplay.appendChild(tryAgain);}
} else {
            tryAgain.textContent = 'Check out our Quiz Below!';
            quizInviteDisplay.appendChild(tryAgain);
	
}



