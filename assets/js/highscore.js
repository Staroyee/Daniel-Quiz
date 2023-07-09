//VARIABLES TO GET ELEMENTS AND ITEMS.
var hsList = document.getElementById("highscore-list");
var clearHighscores = document.getElementById("clear-scores");
var hsArray = JSON.parse(localStorage.getItem("hsArray")) || [];

//FUNCTION TO CREATE A 'LI' ELEMENT FOR EACH SAVED HIGHSCORE.
function createLi() {
    hsArray.sort(function (a, b) {return b.savedScore - a.savedScore});
    for (var i = 0; i < hsArray.length; i++) {
        var index = i+1
        var liItem = document.createElement("li");
        liItem.textContent = index + '. ' + hsArray[i].initials + ' - ' + hsArray[i].score;
        liItem.setAttribute("style", "background-color: beige; text-align: left;  font-size: 20px; max-width: 500px; padding: 5px;")
        hsList.append(liItem)
    }
}

//CALLS THE 'CREATELI' FUNCTION TO DISPLAY THE SCORES ON THE PAGE.
createLi()

//A FUNCTION TO CLEAR THE LOCAL STORAGE AND RELOAD THE PAGE TO REMOVE THE HIGHSCORES LIST.
function clearHsArray() {
    localStorage.clear();
    window.location.reload();
}

//AN EVENT LISTENER ON THE 'CLEARHIGHSCORES' BUTTON TO RUN THE 'CLEARHSARRAY' FUNCTION.
clearHighscores.addEventListener("click", clearHsArray);