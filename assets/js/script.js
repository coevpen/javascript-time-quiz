// selects the countdown html and starts with the timer set to 0 until quiz starts
var timerEl = document.querySelector(".countdown");
timerEl.textContent = "Timer: 0";

// grabs the h1 element
var questionEl = document.querySelector("#question-h1");

// grabs the p element
var openingEl = document.querySelector(".opening-p");

// counts down the timer
function countdown(){
    var timeLeft = 75;

    var timeCount = setInterval(function(){
        if(timeLeft > 1){
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        }
        else{
            timerEl.textContent = "Timer: 0";
            clearInterval(timeCount);
            //TODO call the high score function
        }
    }, 1000);
};

function displayQuestion(){
    let questionsNum = 1;


    while(questionsNum < 11){
    
        switch(questionsNum){
            case 1:
                questionEl.textContent = "What does HTML stand for?"
                
                break;
            case 2:
                console.log("made it through switch: " + questionsNum);
                break;
            case 3:
                console.log("made it through switch: " + questionsNum);
                break;
            case 4:
                console.log("made it through switch: " + questionsNum);
                break;
            case 5:
                console.log("made it through switch: " + questionsNum);
                break;
            case 6:
                console.log("made it through switch: " + questionsNum);
                break;
            case 7:
                console.log("made it through switch: " + questionsNum);
                break;
            case 8:
                console.log("made it through switch: " + questionsNum);
                break;
            case 9:
                console.log("made it through switch: " + questionsNum);
                break;
            case 10:
                console.log("made it through switch: " + questionsNum);
                break;
            default:
                break;
        }

        questionsNum++;
    }
};

// when start button is clicked, start quiz and timer
var startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", function(event){
    countdown();
    openingEl.textContent = "";
    displayQuestion();
});

// change button color when clicked
var changeBtnColor = document.querySelector("#select-btn");
changeBtnColor.addEventListener("click", () => changeBtnColor.style.backgroundColor = "#EE82EE");


/* TODO: upon clickign the start button, a question takes over the h1, and 
buttons are dynamically created. 

*/