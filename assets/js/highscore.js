var hsList = document.getElementById("#highscore-list");
var clearHighscores = document.getElementById("#clear-scores");
var hsArray = JSON.parse(localStorage.getItem("hsArray")) || [];

var addScore = JSON.parse(localStorage.getItem("newHighScoreAdded"));



if (addScore) {
    createArray(addScore);
    console.log("new initials are", + addScore.savedInitials);
}

function createArray(savedScores) {
    hsArray.push(savedScores);
    hsArray.sort(function (a, b) {return b.savedScore - a.savedScore});
    console.log(hsArray);
    localStorage.setItem("hsArray", JSON.stringify(hsArray));
}

