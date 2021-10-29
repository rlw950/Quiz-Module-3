var body = document.body;
var i = 0;
var k = 0;
var score = 0;
var answerEl = '';
var welcomeEl = document.getElementById('welcome')
var mainEl = document.getElementById('main');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var answerClick = '';
var rightAnswer = '';

// The array of questions for the game.
var questions = [
    { q: 'Commonly used data types Do not include:', ra: '2' },
    { q: 'The condition in an if / else is enclosed with ____.', ra: '2' },
    { q: 'Arrays in JavaScript can be used to store ______.', ra: '3' },
    { q: 'String values must be enclosed with ______ when being assigned to variables.', ra: '2' },
    { q: 'A very useful tool used during the development and debuugin for print content to the debugger is:', ra: '3' }
];

var answerList = [
    'strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'parenthesis', 'square brackets', 'numbers and strings', 'other arrays', 'booleans', 'all of the above', 'commas', 'curly brackets', 'quotes', 'parenthesis', 'JavaScript', 'terminal/bash', 'for loops', 'console.log'
];

// 1
// main countdown timer
function countDown() {
    var myobj = document.getElementById("welcome");
    myobj.remove("welcome");
    var myobj1 = document.getElementById("start");
    myobj1.remove("start");
    document.getElementById("main").innerHTML = "";
    challenge();
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;

            
            if (answerClick !== rightAnswer) {
                timeLeft = timeLeft-10;
            }
        } else {
            clearInterval(timeInterval);
            timerEl.textcontent = 'Game Over';
        }
    }, 1000);
};

// 2
function challenge() {
    var realQuestion = document.createElement('div');
    realQuestion.setAttribute("id", "main-div");
    realQuestion.textContent = questions[i].q;
    body.appendChild(realQuestion);
    for (let j = 0; j < 4; j++) {
        var button = document.createElement('button');
        button.classList.add("buttons");
        button.setAttribute('id', j);
        button.textContent = j + 1 + '. ' + answerList[i * 4 + j];
        var br = document.createElement('br');
        realQuestion.appendChild(br);
        realQuestion.appendChild(button);
        button.addEventListener("click", handleClick);
    }
};

// 3
function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var rightAnswer = questions[i].ra;
    var answerClick = event.target.id;

    if ('#start' === null) {
        var startEl = document.createElement('div');
        startEl.textContent = '';
        body.appendChild(startEl);
    }

    if (answerClick === rightAnswer) {
        // Increase score
        score++;
        var correctEl = document.createElement('div');
        correctEl.textContent = 'Correct!';
        body.appendChild(correctEl);
        return i++, nextQuestion();
    } else {
        var wrongEl = document.createElement('div');
        wrongEl.textContent = 'Wrong!';
        body.appendChild(wrongEl);
       timeLeft = timeLeft -10;
       countDown();
        return i++, nextQuestion();
    }
};

// 4
function nextQuestion() {
    var myobj = document.getElementById('main-div');
    myobj.remove("div");
    document.getElementById("main").innerHTML = "";

    var realQuestion = document.createElement('div');
    realQuestion.setAttribute("id", "main-div");
    realQuestion.textContent = questions[i].q;
    body.appendChild(realQuestion);
    for (let j = 0; j < 4; j++) {
        var button = document.createElement('button');
        button.setAttribute('id', j);
        button.textContent = j + 1 + '. ' + answerList[i * 4 + j];
        var br = document.createElement('br');
        realQuestion.appendChild(br);
        realQuestion.appendChild(button);
        button.addEventListener("click", handleClick);
    }
};

// 5
// function end() {
//     var myobj = document.getElementById('main-div');
//     myobj.remove("div");
//     document.getElementById("main").innerHTML = "";
// }

startBtn.onclick = countDown;


