// variables to grab the container to display the scores and the user's current score/initials
var hScoresEl = document.querySelector("#scoreList");
var currentScore = localStorage.getItem("currentScore");
var currInitials = localStorage.getItem("userInitials");

//to create a list for the items in highscores
var scoreListItem;

// max amount of high scores to be kept
const MAX_HIGHSCORE = 5;

// gets in the high scores or starts a new array if none
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];



// sets and sorts scores
function saveScores(){

        // object of current score
    var scores = [
        {
        score: currentScore,
        initials: currInitials
        }
    ];

    console.log(scores);

    highScores.push(scores);
    highScores.sort(function(a,b) {return b.score - a.score});
    highScores.splice(5);

    console.log(highScores);

    highScoresDisplay();

    localStorage.setItem('highScores', JSON.stringify(highScores));
  
};

function highScoresDisplay(){
    for(var i = 0; i < highScores.length; i++){
        scoreListItem = document.createElement('li');

        scoreListItem.textContent = highScores.initials + ": " + highScores.score;
        hScoresEl.appendChild(scoreListItem);
    }
};

// when back button is clicked, returns to home page
var backBtn = document.querySelector(".back");
backBtn.addEventListener("click", function(event){
    location.href = "./index.html";
});


saveScores(); 