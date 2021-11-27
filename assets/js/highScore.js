// variables to grab the container to display the scores and the user's current score/initials
var hScoresEl = document.querySelector("#scoreList");
var currentScore = localStorage.getItem("currentScore");
var currInitials = localStorage.getItem("userInitials");

//to create a list for the items in highscores
var scoreListItem;

// max amount of high scores to be kept
const MAX_HIGHSCORE = 5;

// gets in the high scores or starts a new array if none
var highScores = JSON.parse(localStorage.getItem("highScores")) ?? [];

// sets and sorts scores
function saveAndDisplayScores(){
    // object of current score
    var scores =
    {
        'score': currentScore,
        'initials': currInitials
    };

    // puts the current score into highScores and sorts it, cutting the list to the top 5 high scores
    highScores.push(scores);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGHSCORE);

    // sets the new high score list into local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // for each item in high scores, it creates a list item and displays it on the scores.html page
    highScores.forEach(curr => {
        var temp = document.createElement('li');
        temp.appendChild(document.createTextNode(curr.initials + ': ' + curr.score));
        hScoresEl.appendChild(temp);
    });
  
};

// when back button is clicked, returns to home page
var backBtn = document.querySelector(".back");
backBtn.addEventListener("click", function(event){
    location.href = "./index.html";
});

// when clear button is clicked, clears local storage and the list created
var clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function(event){
    highScores.forEach(curr => {
        var temp = document.querySelector('li');
        temp.remove();
    });
    localStorage.clear();
});


saveAndDisplayScores(); 