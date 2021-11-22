// selects the countdown html and starts with the timer set to 0 until quiz starts
var timerEl = document.querySelector(".countdown");
timerEl.textContent = "Timer: 0";

// grabs the h1 element
var questionEl = document.querySelector("#question-h1");

// grabs the p element
var openingEl = document.querySelector(".opening-p");

// finds the section where we'll place the answers to be selected
var answersEl = document.querySelector(".selections");

//quiz object
const quizQuestions = [
  {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
          a: "js",
          b: "script",
          c: "javascript",
          d: "scripting"

      },
      correctAnswer: "script"
    },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: {
        a: "script href='script.js'",
        b: "script name='script.js'",
        c: "script class='script.js'",
        d: "script src='script.js'"

    },
    correctAnswer: "script src='script.js'"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
},
{
    question: "How do you create a function in JavaScript?",
    answers: {
        a: "function = myFunction()",
        b: "var function myFunction()",
        c: "function myFunction()",
        d: "function:myFunction()"

    },
    correctAnswer: "function myFunction()"
},

];



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
                questionEl.textContent = quizQuestions[0].question;
                break;
            case 2:
                questionEl.textContent = quizQuestions[1].question;
                editAnswerBtns(1);
                console.log("made it through switch: " + questionsNum);
                break;
            case 3:
                questionEl.textContent = quizQuestions[2].question;
                editAnswerBtns(2);
                console.log("made it through switch: " + questionsNum);
                break;
            case 4:
                questionEl.textContent = quizQuestions[3].question;
                editAnswerBtns(3);
                console.log("made it through switch: " + questionsNum);
                break;
            case 5:
                questionEl.textContent = quizQuestions[4].question;
                editAnswerBtns(4);
                console.log("made it through switch: " + questionsNum);
                break;
            case 6:
                questionEl.textContent = quizQuestions[5].question;
                editAnswerBtns(5);
                console.log("made it through switch: " + questionsNum);
                break;
            case 7:
                questionEl.textContent = quizQuestions[6].question;
                editAnswerBtns(6);
                console.log("made it through switch: " + questionsNum);
                break;
            case 8:
                questionEl.textContent = quizQuestions[7].question;
                editAnswerBtns(7);
                console.log("made it through switch: " + questionsNum);
                break;
            case 9:
                questionEl.textContent = quizQuestions[8].question;
                editAnswerBtns(8);
                console.log("made it through switch: " + questionsNum);
                break;
            case 10:
                questionEl.textContent = quizQuestions[9].question;
                editAnswerBtns(9);
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
    document.querySelector(".start-btn").style.display = 'block';
    this.style.display = 'none';
    countdown();
    openingEl.textContent = "";
    createAnswerButtons();
    displayQuestion();
});


// creates the answer buttons
function createAnswerButtons (){
    
    for(var i = 0; i < 4; i++){
        var optionBtn = document.createElement("button");
        optionBtn.className = "option op" + i;
        optionBtn.id = "select-btn";
        answersEl.appendChild(optionBtn);
        switch(i){
            case 0:
                optionBtn.innerHTML = quizQuestions[0].answers.a;
                break;
            case 1:
                optionBtn.innerHTML = quizQuestions[0].answers.b;
                break;
            case 2:
                optionBtn.innerHTML = quizQuestions[0].answers.c;
                break;
            case 3:
                optionBtn.innerHTML = quizQuestions[0].answers.d;
                break;
            default:
                break;
        }
        
    }
};

// edits the answer buttons
function editAnswerBtns(index){
    for(i = 0; i < 4; i++){
        select = document.querySelector(".op" + i);
        switch(i){
            case 0:
                select.innerHTML = quizQuestions[index].answers.a;
                break;
            case 1:
                select.innerHTML = quizQuestions[index].answers.b;
                break;
            case 2:
                select.innerHTML = quizQuestions[index].answers.c;
                break;
            case 3:
                select.innerHTML = quizQuestions[index].answers.d;
                break;
            default:
                break;
        }              
    }
};