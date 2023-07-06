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

