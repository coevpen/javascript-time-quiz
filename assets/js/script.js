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
          a: "<js>",
          b: "<script>",
          c: "<javascript>",
          d: "<scripting>"

      },
      correctAnswer: "b"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: {
        a: "<script href='script.js'>",
        b: "<script name='script.js'>",
        c: "<script class='script.js'>",
        d: "<script src='script.js'>"

    },
    correctAnswer: "d"
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
    question: "?",
    answers: {
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>"

    },
    correctAnswer: "b"
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

                answersEl.innerHTML = 
                "<button id='select-btn' class='option'>" + quizQuestions[0].answers.a + "</button> ";
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
    document.querySelector(".start-btn").style.display = 'block';
    this.style.display = 'none';
    countdown();
    openingEl.textContent = "";
    displayQuestion();
});

// change button color when clicked
var changeBtnColor = document.querySelector(".option");
changeBtnColor.addEventListener("click", () => changeBtnColor.style.backgroundColor = "#EE82EE");


/* TODO: upon clickign the start button, a question takes over the h1, and 
buttons are dynamically created. 

*/

function createAnswerButtons (){
    //how???
};