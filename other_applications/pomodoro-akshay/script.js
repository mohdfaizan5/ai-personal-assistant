let seconds = 1;
let minutes = 125;
let isIntervalWorking = false;
let minDisplay = document.querySelector('#minContainer1')
let secDisplay = document.querySelector('#secContainer1')
let totalPomoDisplay = document.querySelector('.totalPomodoro')



// Getting totalPomohrs from local storage
let totalPomoMins;
if (!localStorage.getItem('totalPomoMins')) {
    // when there is nothing in local storage:
    localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
    console.log('Setting new local storage', totalPomoMins)
}
else {
    totalPomoMins = JSON.parse(localStorage.getItem('totalPomoMins'))
    console.log('Setting existing local storage', totalPomoMins)
}

console.log(`displaying total mins / 60`)
totalPomoDisplay.innerHTML = Math.floor(totalPomoMins / 60);


// Changing mins based on js
minDisplay.innerHTML = minutes;


// Local storage for name
if (!localStorage.getItem('name')) {
    let name = prompt('Enter your name')
    localStorage.setItem('name', name)
}
else {
    let name = localStorage.getItem('name')
}

document.querySelector('.username').innerHTML = `Hi ${name}`


// STARTING POMO
let startBtn = document.querySelector('.start')

function startPomo() {

    isIntervalWorking = true;
    if (startBtn.innerHTML === '<i class="fa-solid fa-2xl fa-pause"></i>') {
        console.log('stopped pomodoro')
        startBtn.innerHTML = '<i class="fa-solid fa-2xl fa-play"></i>';
        clearInterval(interval1)
    }
    else {
        console.log('Started pomodoro')
        startBtn.innerHTML = '<i class="fa-solid fa-2xl fa-pause"></i>';
        interval1 = setInterval(min, 1)
    }

}

function min() {
    seconds = seconds - 1
    document.querySelector('#secContainer1').innerHTML = seconds;
    document.querySelector('#minContainer1').innerHTML = minutes;
    console.log('before', totalPomoMins)
    if (seconds === 0) {
        seconds = 60;
        minutes = minutes - 1
        totalPomoMins += 1;

        // totalPomoHrs = totalPomoHrs + Math.floor(totalPomoMins / 60);
        console.log('after ', totalPomoMins)
        totalPomoDisplay.innerHTML = Math.floor(totalPomoMins / 60);
        localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))

        if (minutes === 4) {
            speak(`last ${minutes + 1} minutes remaining`)
        }

        if (minutes === -1) {
            console.log('min is 0')
            speak('Times up')
            console.log(seconds)
            clearInterval(interval1)
            document.querySelector('#minContainer1').innerHTML = 0;
            document.querySelector('.start').innerHTML = 'Break';
        }
    }

}
function resetPomo() {

    // for disabling the session length
    isIntervalWorking = false

    minutes = 25;
    seconds = 1;

    // reseting the min and sec for use display
    minDisplay.innerHTML = minutes;
    document.querySelector('#secContainer1').innerHTML = '0'
    clearInterval(interval1)


}

function changeTimer(changer) {

    if (!isIntervalWorking) {
        console.log('interval is working and dont change time ')
        if (changer === 'up') {
            minutes++;
            document.getElementById('minContainer1').innerHTML = minutes;

        }
        else {
            minutes--;
            document.getElementById('minContainer1').innerHTML = minutes;
        }
    }

}


function greet(n) {
    console.log('hi', n)
}

greet()