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
console.log("&&&&&&&&&: " + JSON.stringify(highScores));



// sets and sorts scores
function saveScores(){

    console.log(currInitials + ': ' + currentScore)

        // object of current score
    var scores =
    {
        'score': currentScore,
        'initials': currInitials
    };

    highScores.push(scores);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

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


saveScores(); 