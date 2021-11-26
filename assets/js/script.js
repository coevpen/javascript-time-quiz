// selects the countdown html and starts with the timer set to 0 until quiz starts
var timerEl = document.querySelector(".countdown");
var timeLeft= 5;
timerEl.textContent = "Timer: " + timeLeft;


// grabs the h1 element for the questions
const questionEl = document.querySelector("#question-h1");

// finds the section where we'll place the answers to be selected
var answersEl = document.querySelectorAll(".quiz-answers");

// grabs the quiz container
var container = document.querySelector(".quiz-container");

// gets an array out of the choices
var choices = Array.from(document.querySelectorAll(".choice"));
console.log(choices);




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




// function displayQuestion(){
//     let questionsNum = 1;

//     while(questionsNum < 11){
    
//         switch(questionsNum){
//             case 1:
//                 questionEl.textContent = quizQuestions[0].question;
//                 if(document.querySelector(".op1").clicked == true){
//                     console.log("got it rigth!");
//                     break;
//                 }
//                 else{
//                     console.log("got it wrong!");
//                     break;
//                 }
                
//             case 2:
//                 questionEl.textContent = quizQuestions[1].question;
//                 editAnswerBtns(1);
//                 console.log("made it through switch: " + questionsNum);
//                 if(document.querySelector(".op3").clicked == true){
//                     console.log("got it rigth!");
//                     break;
//                 }
//                 else{
//                     console.log("got it wrong!");
//                     break;
//                 }
//             case 3:
//                 //questionEl.textContent = quizQuestions[2].question;
//                // editAnswerBtns(2);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 4:
//                 //questionEl.textContent = quizQuestions[3].question;
//                 //editAnswerBtns(3);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 5:
//                 //questionEl.textContent = quizQuestions[4].question;
//                 //editAnswerBtns(4);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 6:
//                 //questionEl.textContent = quizQuestions[5].question;
//                 //editAnswerBtns(5);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 7:
//                 //questionEl.textContent = quizQuestions[6].question;
//                 //editAnswerBtns(6);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 8:
//                 //questionEl.textContent = quizQuestions[7].question;
//                 //editAnswerBtns(7);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 9:
//                 //questionEl.textContent = quizQuestions[8].question;
//                 //editAnswerBtns(8);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             case 10:
//                 //questionEl.textContent = quizQuestions[9].question;
//                 //editAnswerBtns(9);
//                 console.log("made it through switch: " + questionsNum);
//                 break;
//             default:
//                 break;
//         }

//         questionsNum++;
//     }
// };

// counts down the timer
window.onload = function(){
    var timeCount = setInterval(function(){
        if(timeLeft > 0){
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        }
        else if(timeLeft <= 0){
            timerEl.textContent = "Timer: 0";
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

        location.href = "./scores.html";
    });
};



// TODO  make a function that records the high score

// TODO make an object for high score to be able to load and save into localstorage


// TODO display the scores, has a 'go back' button and a delete scores button


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

