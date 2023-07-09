var hsList = document.getElementById("highscore-list");
var clearHighscores = document.getElementById("clear-scores");
var hsArray = JSON.parse(localStorage.getItem("hsArray")) || [];


function createLi() {
    hsArray.sort(function (a, b) {return b.savedScore - a.savedScore});
    for (var i = 0; i < hsArray.length; i++) {
        var index = i+1
        var liItem = document.createElement("li");
        liItem.textContent =index + '. ' + hsArray[i].initials + ' ' + hsArray[i].score;
        hsList.append(liItem)
    }
}
createLi()

function clearHsArray() {
    localStorage.clear();
    window.location.reload();
}

clearHighscores.addEventListener("click", clearHsArray);