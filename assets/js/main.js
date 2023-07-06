var highscoreButton = document.getElementById("view-highscore");
var timerDiv = document.getElementById("timer");
var titleH1 = document.getElementById("title");
var paragraph = document.getElementById("rules");
var startButton = document.getElementById("start-button");

var quizContainerEl = document.getElementById("quizContainer")
var questionsEl = document.getElementById("question");
var choice1El = document.getElementById("choice-1");
var choice2El = document.getElementById("choice-2");
var choice3El = document.getElementById("choice-3");
var choice4El = document.getElementById("choice-4");
var wrongRightEl = document.getElementById("wrong-right");
var quizDivEl = document.getElementById("quizDiv")

var initials = document.getElementById("enter-initials");
var clearScores = document.getElementById("clear-scores");
var highscores = document.getElementById("highscores");

var score = 0;
var timeLeft = 75;
var timerInterval = 0;
var currentQuestion = 0;

var questions = [
    {
    askQuestion: ["Commonly used data types DO NOT include:"],
    choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts"
},
    {
    askQuestion: ["The condition in an if/else statement is enclosed within ____."],
    choices: ["1. Quotes", "2. Curly brackets", "3. Parentheses", "4. Square brackets"],
    answer: "3. Parentheses"
},
    {
    askQuestion: ["Arrays in JavaScript can be used to store ____."],
    choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    answer: "4. All of the above"
},
    {
    askQuestion: ["String values must be enclosed within ____ when being assigned to variables."],
    choices: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes"
},
    {
    askQuestion: ["A very useful tool used during development and debugging for printing content to the debugger is:"],
    choices: ["1. JavaScript", "2. Terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"
},
];

function displayQuestions(questionList) {
    questionsEl.innerText = questionList.askQuestion[0];
    choice1El.textContent = questionList.choices[0];
    choice2El.textContent = questionList.choices[1];
    choice3El.textContent = questionList.choices[2];
    choice4El.textContent = questionList.choices[3];
};

