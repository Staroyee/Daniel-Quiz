//HOME PAGE HTML DOC VARIABLES
var highscoreButton = document.getElementById("view-highscore");
var timerDiv = document.getElementById("timer");
var titleH1 = document.getElementById("title");
var paragraph = document.getElementById("rules");
var startButton = document.getElementById("start-button");

//QUIZ PAGE HTML DOC VARIABLES
var quizContainerEl = document.getElementById("quizContainer")
var questionsEl = document.getElementById("question");
var choice1El = document.getElementById("choice-1");
var choice2El = document.getElementById("choice-2");
var choice3El = document.getElementById("choice-3");
var choice4El = document.getElementById("choice-4");
var wrongRightEl = document.getElementById("wrong-right");
var quizDivEl = document.getElementById("quizDiv")
var score = 0;
var timeLeft = 75;
var timerInterval = 0;
var currentQuestion = 0;

//HIGHSCORES PAGE HTML DOC VARIABLES
var initials = document.getElementById("enter-initials");
var clearScores = document.getElementById("clear-scores");
var highscores = document.getElementById("highscores");

var hsArray = JSON.parse(localStorage.getItem("hsArray")) || [];

//OBJECT VARIABLE TO STORE OBJECTS CONTAINING QUESTIONS, CHOICES, AND ANSWERS.
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

//CALLING THE FUNCTION TO INITIALISE THE PAGE WHEN THE QUIZ.HTML DOC IS OPENED.
init();

//FUNCTION CALLS UPON THE START QUIZ FUNCTION TO BEGIN THE QUIZ.
function init() {
    startQuiz();
    quizDivEl.addEventListener("click", function(e) {
        var buttonClicked = e.target;
        checkAnswer(buttonClicked.innerText)
    })
};

/*FUNCTION CALLS UPON THE 'DISPLAYQUESTIONS' AND 'DECREASETIMER' FUNCTIONS TO START THE QUIZ AND THE TIMER COUNTDOWN.*/
function startQuiz() {
    displayQuestions(questions[0]);
    decreaseTimer();
};

/*FUNCTION TO DISPLAY THE QUESTIONS ALONG SIDE THE CHOICES IN ORDER OF FIRST TO LAST.*/
function displayQuestions(questionList) {
    questionsEl.innerText = questionList.askQuestion[0];
    choice1El.textContent = questionList.choices[0];
    choice2El.textContent = questionList.choices[1];
    choice3El.textContent = questionList.choices[2];
    choice4El.textContent = questionList.choices[3];
};

/*A FUNCTION TO MAKE THE TIMER TICK DOWN AT A RATE OF 1 EVERY 1 SECOND. IF THE TIMER RUNS OUT THE FUNCTION WILL CALL UPON THE 'ENDQUIZ' FUNCTION.*/
function decreaseTimer() {
    timerDiv.innerHTML = "Time: " + timeLeft;
    timeLeft --;
    if (timeLeft < 0) {
         endQuiz();
    } else {
        timerInterval = setTimeout(decreaseTimer, 1000);
    }
};

/*A FUNCTION TO CHECK IF THE ANSWER VARIABLE WAS PICKED OUT OF THE QUESTIONS OBJECT. REDUCING THE TIMER BY 10 SECONDS IF NOT CORRECT, ADDING 1 TO THE SCORE IF CORRECT, AND DISPLAYING THE NEXT QUESTION.*/
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score += 1;
    } else {
        timeLeft -= 10;
    }
    assignNextQuestion()
};

/*THE FUNCTION TO DISPLAY THE NEXT QUESTION EACH TIME CHOICE IS PICKED. WILL CALL UPON THE 'ENDQUIZ' FUNCTION IF THERE ARE NO QUESTIONS LEFT TO CHOOSE FROM.*/
function assignNextQuestion() {
    if (currentQuestion === questions.length - 1) {
        endQuiz();
    } else {
        currentQuestion++;
        displayQuestions(questions[currentQuestion]);
    }
};

/*A FUNCTION TO RESET THE TIMER.*/
function clearTimer() {
    clearTimeout(timerInterval);
};

/*THIS FUNCTION ENDS THE GAME, REMOVES THE QUIZ ELEMENTS AND REPLACES THEM WITH A FORM WITH AN INPUT SO THAT THE USER MAY ENTER THEIR INITIALS.
IT DISPLAYS THE SCORE THEY RECEIVED.

AN EVENT LISTENER IS ADDED TO THE BUTTON TO COLLECT THE USERS INPUT AND SCORE, WHICH THEN TAKES THE USER TO THE 'HIGHSCORE.HTML' PAGE.
WHEN THE BUTTON IS CLICKED THE USER INPUT AND SCORE IS SAVED INTO THE LOCAL STORAGE ON THE HIGHSCORE.HTML DOC USING THE 'WINDOW.LOCATION.ASSIGN' METHOD. */
function endQuiz() {
    quizDivEl.remove()
    questionsEl.textContent = "All done!";
    var userScore = document.createElement("p");
    userScore.textContent = ["Your final score is: " + score];
    userScore.setAttribute("style", "padding: 10px 10px 10px 0px; font-size: 15px;");
    questionsEl.appendChild(userScore);
    var form = document.createElement("form");
    questionsEl.appendChild(form);
    var initials = document.createElement("p");
    initials.innerText = "Enter initials: ";
    initials.setAttribute("style", "display: inline-flex; font-size: 15px; padding-right: 5px;");
    form.appendChild(initials);
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("style", "font-size: 15px; padding: 5px; margin: 5px;");
    initialsInput.type = "text";
    form.appendChild(initialsInput);
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("style", "font-size: 15px; margin: 5px; padding-right: 7px;");
    form.appendChild(submitButton);
    clearTimer();

    //EVENT LISTENER ON THE SUBMIT BUTTON TO COLLECT THE SCORE AND INPUT.
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
            saveScore(initialsInput.value, score);
        });
    }

    //A FUNCTION TO SAVE THE SCORE AND INPUT TO LOCAL STORAGE ON THE HIGHSCORE.HTML PAGE.
    function saveScore(savedInitials, savedScore) {
        var userObj = {
            initials: savedInitials,
            score: savedScore
        }

        hsArray.push(userObj)

        localStorage.setItem('hsArray', JSON.stringify(hsArray))
        
        window.location.assign("highscore.html");
    }