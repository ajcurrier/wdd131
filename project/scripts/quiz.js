submitTest = document.getElementById('submit-button');// get the law-quiz element
console.log(submitTest);
document.getElementById('law-quiz').addEventListener('submit', function(event) {    
    event.preventDefault();

    const answers = {
        q1: 'false', // correct answer for question 1
        q2: 'license',      // correct answer for question 2
        q3: 'yield',
        q4: 'police', 
        q5: 'use',
        q6: 'B'
    };

    let score = 0;
    // count how many questions
    const totalQuestions = Object.keys(answers).length;

    // check answers
    for (let question in answers) {
        const userAnswer = document.getElementById(question).value;
        console.log(`User answered: ${userAnswer}`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
            console.log(score);

            const passed = score === totalQuestions;
    
    // Store result in local storage
    localStorage.setItem('quizResult', JSON.stringify({ passed, score }));

    // Display result
    const resultText = passed ? 'You passed!' : 'You failed. Try again!';
    document.getElementById('result').innerText = `Score: ${score}/${totalQuestions}. ${resultText}`;
    }
}
});