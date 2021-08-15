var body = document.body;
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

    for (var i = 0; i < questions.length; i++) {
        // var parent = document.getElementById("container");
        // while (parent.hasChildNodes());
        // document.getElementById("container").innerHTML = "";
        function myFunction() {
            var myobj = document.getElementById("h2");
            myobj.remove();
          }
        document.getElementById("main").innerHTML = "";

        function myFunction() {
            var myobj = document.getElementById("start");
            myobj.remove();
          }


        var realQuestion = document.createElement('div');
        realQuestion.textContent = questions[i].q;
        body.appendChild(realQuestion);
        for (let j = 0; j < 4; j++) {
            var button = document.createElement('button');
            button.setAttribute('id', j);
            button.textContent = j + 1 + '. ' + answerList[k + j];
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

            // console.log(answerClick);

            if (answerClick === rightAnswer) {
                // Increase score
                score++;
                var correctEl = document.createElement('div');
                correctEl.textContent = 'Correct!' + answerClick;
                body.appendChild(correctEl);
                return;
            } else {
                var wrongEl = document.createElement('div');
                wrongEl.textContent = 'Wrong!' + answerClick;
                body.appendChild(wrongEl);
                // timeLeft - 10;
                return;




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

    }


}




// var rightAnswer = questions[i].ra;

// answerEl = '';
// }

// var startBtn = document.getElementById('start');

// var count = 15;
// var interval = setInterval(function () {
//     document.getElementById('count').innerHTML = count;
//     count--;
//     if (count === 0) {
//         clearInterval(interval);
//         document.getElementById('count').innerHTML = 'You lose!!!';
//         // or...
//         alert("You're out of time!");
//     }


// main countdown timer
function countDown() {
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