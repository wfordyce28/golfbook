"use strict";
let login = document.getElementById(`inside`);
let name, course, day, time;

login.addEventListener("click", function () {
    login2();
});

//Function for the button you click to book a course
function login2() {
    name = window.prompt(`Hello, what is your name?`);
    course = window.prompt(`Please enter the course you'd like to book`);
    day = window.prompt('What date would you like to play on?');
    time = window.prompt('What time would you like to play at?')
    if (course !== `boyne mountain` || course !== `boyne highlands` || course !== 'bay harbor'
        || course !== 'crooked tree' || course !== 'bay view'){
        window.alert(`Ok, ${name}!  You're booked at ${course}, on ${day}, at ${time}!`);

    }
    else {
        window.alert(`That is incorrect, goodbye.`)
        window.close()
    }
}