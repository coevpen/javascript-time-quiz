// allows a delay when answering question
let chooseAnswer = false;

// number of questions before quiz is over
const MAX_Q = 9;
let hitMax = false;

// selects the countdown html and starts with the timer set to 0 until quiz starts
var timerEl = document.querySelector(".countdown");
var timeLeft= 3;
timerEl.textContent = "Timer: " + timeLeft;


// grabs the h1 element for the questions
var questionEl = document.querySelector("#question-h1");

// finds the section where we'll place the answers to be selected
var answersEl = document.querySelectorAll(".quiz-answers");

// grabs the quiz container
var container = document.querySelector(".quiz-container");

// gets an array out of the choices
var choices = Array.from(document.querySelectorAll(".choice"));

// inserts a <p> element that indicates if the answer is right or wrong
container.insertAdjacentHTML("afterend","<p class='corrOrIncorr'></p>");
var corrOrIncorr = document.querySelector(".corrOrIncorr");

// gets the input initials section
var scoreInitials = document.querySelector(".initials");


//quiz QnA object array
const quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<js>",
        answer2: "<script>",
        answer3: "<javascript>",
        answer4: "<scripting>",
        correctAnswer: "2"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        answer1: "<script href='script.js'>",
        answer2: "<script name='script.js'>",
        answer3: "<cript class='script.js'>",
        answer4: "<script src='script.js'>",
        correctAnswer: "4"
    },
    {
        question: "How do you create a function in JavaScript?",
        answer1: "function = myFunction()",
        answer2: "var function myFunction()",
        answer3: "function myFunction()",
        answer4: "function:myFunction()",
        correctAnswer: "3"
    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },
    {
        question: "?",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",

    },

];


// counts down the timer
window.onload = function(){
    var timeCount = setInterval(function(){
        if(timeLeft > 0 && !hitMax){
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        }
        else if(timeLeft <= 0 || hitMax){
            if(timeLeft < 0){
                timeLeft = 0;
            }
            timerEl.textContent = "Timer: " + timeLeft;
            clearInterval(timeCount);
            answersEl.forEach(e => e.remove());
            insertInitials();
        }
    }, 1000);
};

// prompts user to input initials into high score
function insertInitials(){
    questionEl.textContent = "All done!";
    container.innerHTML =
    "<h2 id='score'></h2><br/><form><label for='name'></label><input type='text' placeholder='Enter your initials' class='initials'></form><button id='select-btn' class='submit' type='submit'>Submit</button>";

    var initialsStyle = document.querySelector(".initials");
    initialsStyle.setAttribute("style", "border: 1px solid black; padding: 7px 15px;");
    
    var score = document.querySelector("#score");
    score.innerHTML = "Your final score is " + timeLeft;

    // when start button is clicked, start quiz
    var submitBtn = document.querySelector(".submit");
    submitBtn.addEventListener("click", function(event){
        localStorage.setItem("currentScore", timeLeft);
        location.href = "./scores.html";
    });
};

// starts the quiz
function quizStart(){
    // will help determine what question we're on
    questionNum = 0;

    nextQuestion(questionNum);
};

// chooses a question and it's answers
function nextQuestion(questionNum) {
    // if the player hits the max number of questions, hitMax indicates true
    if(questionNum >= MAX_Q){
        hitMax = true;
    }
    // gets the current question
    currQuestion = quizQuestions[questionNum];

    
    // prints out the question
    questionEl.textContent = currQuestion.question;

    // prints out the answer choices
    choices.forEach( choice => {
        const dataNum = choice.dataset["num"];
        choice.textContent = currQuestion["answer" + dataNum];
    });
    chooseAnswer = true;
};

choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!chooseAnswer){
            return;
        }
        chooseAnswer = false;

        // gets the choices and their data set number to help determine the right answer
        var choiceSelected = e.target;
        var answered = choiceSelected.dataset["num"];

        // provides styling to the <p> insert so it appears on the screen
        corrOrIncorr.setAttribute("style", "border-top: 1px solid gray; color: gray; margin: 0 auto; width: 30%;");
        // if the answer is correct, the screen will indicate it
        if(answered == currQuestion.correctAnswer){
            corrOrIncorr.textContent = "Correct!"
        }
        // indicates the answer is wrong and subtracts 5 from the time
        else{
            corrOrIncorr.textContent = "Wrong!";
            timeLeft= timeLeft - 5;
        }

        // calls the next question
        nextQuestion(++questionNum);
    });
});


quizStart();

// TODO  make a function that records the high score

// TODO make an object for high score to be able to load and save into localstorage


// TODO display the scores, has a 'go back' button and a delete scores button
