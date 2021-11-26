// selects the countdown html and starts with the timer set to 0 until quiz starts
var timerEl = document.querySelector(".countdown");
var timeLeft = 0;
timerEl.textContent = "Timer: " + timeLeft;

// when start button is clicked, start quiz
var startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", function(event){

    location.href = "./quiz.html";
});
