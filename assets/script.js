var body = document.body;
var k = 0;
var score = 0;
var answerEl = '';
// The array of questions for the game.
var questions = [
    { q: 'Commonly used data types Do not include:', ra: '2' },
    { q: 'The condition in an if / else is enclosed with ____.', ra: '0' },
    { q: 'Arrays in JavaScript can be used to store ______.', ra: '3' },
    { q: 'String values must be enclosed with ______ when being assigned to variables.', ra: '2' },
    { q: 'A very useful tool used during the development and debuugin for print content to the debugger is:', ra: '3' }
];

var answerList = [
    'strings', 'booleans', 'alerts', 'numbers', 'quotes', 'curly brackets', 'parenthesis', 'square brackets', 'numbers and strings', 'other arrays', 'booleans', 'all of the above', 'commas', 'curly brackets', 'quotes', 'parenthesis', 'JavaScript', 'terminal/bash', 'for loops', 'console.log'
];

function first() {
    var h2E1 = document.createElement('h2');
    h2E1.textContent = 'Coding Quiz Challenge';
    h2E1.setAttribute('style', 'margin:auto; width:100%, text-align:screenLeft;');
    body.appendChild(h2E1);
    
    var infoEl = document.createElement('div');
    infoEl.textContent = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.';
    infoEl.setAttribute('style', 'margin:auto, width:50%, text-align:left;');
    body.appendChild(infoEl);
    
    var startQuiz = document.createElement('button');
    startQuiz.textContent = 'Start Quiz';
    body.appendChild(startQuiz);

    

}


for (var i = 0; i < questions.length; i++) {
    var realQuestionEl = document.createElement('div');
    realQuestionEl.setAttribute('style', 'background: #888888; padding:20px;');
    realQuestionEl.textContent = questions[i].q;
    body.appendChild(realQuestionEl);

    for (let j = 0; j < 4; j++) {
        var button = document.createElement('button');
        // button.className('button');
        button.setAttribute('id', j);
        button.textContent = j + 1 + '. ' + answerList[k + 1];
        body.appendChild(button);
    }

    k = k + 4;
    var rightAnswer = questions[i].ra;
    console.log(rightAnswer);

    // event listener

    if (document.addEventListener) {
        document.addEventListener("click", handleClick, false);
    }
    else if (document.attachEvent) {
        document.attachEvent("onclick", handleClick);
    }

    function handleClick(event) {
        event = event || window.event;
        event.target = event.target || event.srcElement;

        var answerClick = event.target.id;

        
        if (answerClick === rightAnswer) {
            // Increase score
            score++;
            var CorrectEl = document.createElement('div');
            CorrectEl.textContent ='Correct!';
            return;
        } else {
            var CorrectEl = document.createElement('div');
            CorrectEl.textContent = 'Wrong!';
            // timeLeft - 10;
            return;
        }

        

        // // Climb up the document tree from the target of the event
        // while (element) {
        //     if (element.nodeName === "BUTTON" && /foo/.test(element.className)) {
        //         // The user clicked on a <button> or clicked on an element inside a <button>
        //         // with a class name called "foo"
        //         doSomething(element);
        //         break;
        //     }

        //     element = element.parentNode;
    }

    
}

// function doSomething(button) {
//     // do something with button
// }










// var rightAnswer = questions[i].ra;

answerEl = '';
// }


// var startBtn = document.getElementById('start');

// function countdown() {
//     // challenge;
//     var timeLeft = 60;
//     var timerEl = document.createElement('div');
//     timerEl.textContent = 70;
//     timerEl.setAttribute('style', 'margin:auto; width:50%; text-align:right;');
//     body.appendChild(timerEl);

//     var timeInterval = setInterval(function () {
//         if (timeLeft > 0) {
//             timeLeft--;
//             // console.log(timeLeft);
//         } else {
//             timerEl.textcontent = 'Game Over';
//             clearInterval(timeInterval);
//         }
//     }, 1000);
// }

// // We start the game with a score of 0.
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
// //   alert('You got ' + score + '/' + questions.length);

// challenge;
// startBtn.onclick = challenge;