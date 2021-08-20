var body = document.body;
var i = 0;
var k = 0;
var score = 0;
var answerEl = '';
var welcomeEl = document.getElementById('welcome')
var mainEl = document.getElementById('main');
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

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


function challenge() {
        
    

    var realQuestion = document.createElement('div');
    // div.setAttribute(id, dvd);
    realQuestion.textContent = questions[i].q;
    body.appendChild(realQuestion);
    for (let j = 0; j < 4; j++) {
        var button = document.createElement('button');
        button.setAttribute('id', j);
        button.textContent = j + 1 + '. ' + answerList[i * 4 + j];
        body.appendChild(button);
    }

    myFunction();
}

function nextQuestion() {
    var myobj = document.getElementById('div');
    myobj1.remove("div");
    var myobj1 = document.getElementById("button");
    myobj1.remove("button");
    document.getElementById("main").innerHTML = "";
    console.log(i);
    var realQuestion = document.getElementsById('div');
    
    realQuestion.textContent = questions[i].q;
    body.appendChild(realQuestion);
    for (let j = 0; j < 4; j++) {
        var button = document.querySelector('button');
        button.setAttribute('id', j);
        button.textContent = j + 1 + '. ' + answerList[i * 4 + j];
        body.appendChild(button);
    }

    myFunction();
}

// event listener

function myFunction() {
    if (document.addEventListener) {
        document.addEventListener("click", handleClick, false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onclick", handleClick);
    }
}


function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var rightAnswer = questions[i].ra;
    var answerClick = event.target.id;
    
    console.log(answerClick);

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
        // timeLeft - 10;
        return i++, nextQuestion();

    }

}

 



// main countdown timer
function countDown() {
    var myobj = document.getElementById("welcome");
    myobj.remove("welcome");
    var myobj1 = document.getElementById("start");
    myobj1.remove("start");
    document.getElementById("main").innerHTML = "";
    challenge();
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
            // console.log(timeLeft);
        } else {
            clearInterval(timeInterval);
            timerEl.textcontent = 'Game Over';
        }
    }, 1000);

}


// We start the game with a score of 0.
// var score = 0;

// var challenge = function () {
// document.write();

// countdown;

// console.log(timerEl);



// for (var i = 0; i < questions.length; i++) {
// document.body.innerHTML = '';
// document.open();
//console.log(timeLeft);
// var timerEl = document.createElement('div');
// timerEl.textContent = timeLeft;
// timerEl.setAttribute('style', 'margin:auto; width:50%; text-align:right;');
// body.appendChild(timerEl);



//     var answerEl = document.createElement('ol');



// // printer and checker function
// var checker = function () {
//     for (var k = 0; k < answerEl.length; k++) {
//         console.log('k');
//         var buttons = document.getElementsByClassName('button');
//         console.log(buttons);


//         buttons[k].addEventListener("click", function () {

//             rightAnswer = questions[k].a;
//             console.log('This is ' + rightAnswer);
//             var answerClick = this.innerHTML;
//             console.log('AnswerClick ' + answerClick);

//         });

//         // if (timeLeft === 0 || i === questions.length) {

//         // }
//     }
// };

// //   // Show total at end
// //   alert('You got ' + score + '/' + questions.length);}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
startBtn.onclick = countDown;