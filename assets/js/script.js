// allows a delay when answering question
var chooseAnswer = false;

// number of questions before quiz is over
const MAX_Q = 10;
var hitMax = false;

// selects the countdown html and starts with the timer set to 75
var timerEl = document.querySelector(".countdown");
var timeLeft = 75;
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
        answer3: "<script class='script.js'>",
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
        question: "What file extension does JavaScript have?",
        answer1: ".html",
        answer2: ".java",
        answer3: ".js",
        answer4: ".xml",
        correctAnswer: "3",

    },
    {
        question: "Which of these functions displays a message and text entry?",
        answer1: "prompt()",
        answer2: "alert()",
        answer3: "confirm()",
        answer4: "msg()",
        correctAnswer: "1",

    },
    {
        question: "What is the first index of an array?",
        answer1: "0",
        answer2: "1",
        answer3: "-1",
        answer4: "2",
        correctAnswer: "1",

    },
    {
        question: "How would you select the class of 'container' inside of document.querySelector();?",
        answer1: "#container",
        answer2: ".container",
        answer3: "--container",
        answer4: ":container",
        correctAnswer: "2",

    },
    {
        question: "How would you write an if statement that will execute code if two values were exactly the same?",
        answer1: "if(i || k){}",
        answer2: "if(i == k){}",
        answer3: "if(i != k){}",
        answer4: "if(i === k){}",
        correctAnswer: "4",

    },
    {
        question: "Which is the correct way to write a for loop?",
        answer1: "for(i = 0; i < 10){}",
        answer2: "for(i){}",
        answer3: "for(i = 0; i < 10; i++){}",
        answer4: "for(i = 0; i++){}",
        correctAnswer: "3",

    },
    {
        question: "How do you write a comment in JavaScript?",
        answer1: "'this is a comment'",
        answer2: "<!-- this is a comment -->",
        answer3: "//this is a comment",
        answer4: "## this is a comment",
        correctAnswer: "3",

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
            insertInitials();
        }
    }, 1000);
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
    else{
        // gets the current question
        currQuestion = quizQuestions[questionNum];

        
        // prints out the question
        questionEl.textContent = currQuestion.question;

        // prints out the answer choices
        choices.forEach( choice => {
            const dataNum = choice.dataset["num"];
            choice.textContent = currQuestion["answer" + dataNum];
        });
    }   
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
            timeLeft = timeLeft - 5;
        }

        // calls the next question
        nextQuestion(++questionNum);
    });
});

// prompts user to input initials into high score
function insertInitials(){
    //creates the form for the user input
    container.innerHTML =
    "<h2 id='score'></h2><br/><form><label for='name'></label><input type='text' placeholder='Enter your initials' name='initials' class='initials'></form><button id='select-btn' class='submit' type='submit'>Submit</button>";

    // grabs the form input text field to style it
    var scoreInitials = document.querySelector(".initials");
    scoreInitials.setAttribute("style", "border: 1px solid black; padding: 7px 15px;");
    
    // displays the final score
    var score = document.querySelector("#score");
    score.innerHTML = "Your final score is " + timeLeft;

    // when start button is clicked, start quiz
    var submitBtn = document.querySelector(".submit");
    submitBtn.addEventListener("click", function(event){
    
        // grabs the value input by the user and sets it into storage
        var userInitials = document.querySelector("input[name='initials']").value;
        localStorage.setItem("currentScore", timeLeft);
        localStorage.setItem("userInitials", userInitials);
        location.href = "./scores.html";
    });
};

// starts the quiz
quizStart();
