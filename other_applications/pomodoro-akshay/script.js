let seconds = 1;
minutes = 25;
let interval1;
let Break;
console.log("working")
let isIntervalWorking = false;

let minDisplay = document.querySelector('#minContainer1')
let secDisplay = document.querySelector('#secContainer1')

// Changing mins based on js
minDisplay.innerHTML = minutes;


// Local storage
if(!localStorage.getItem('name')){
    let name = prompt('Enter your name')
    localStorage.setItem('name', name)
}

let name = localStorage.getItem('name')
// console.log(name)
document.querySelector('.username').innerHTML = `Hi ${name}`



let startBtn = document.querySelector('.start')

function startPomo(){

    
    isIntervalWorking = true;
    if(startBtn.innerHTML === 'Pause'){
        startBtn.innerHTML = 'Play';
        clearInterval(interval1)
    }
    else{
        
        startBtn.innerHTML = 'Pause';
        interval1 = setInterval(min, 1000)

    }
    
}

function min(){
    seconds = seconds -1 
    document.querySelector('#secContainer1').innerHTML = seconds;
    if(seconds === 0){
        seconds = 60;
        minutes = minutes - 1
        document.querySelector('#minContainer1').innerHTML = minutes;
        if(minutes === -1){
            console.log('min is 0')
            console.log(seconds)
            clearInterval(interval1)
            document.querySelector('#minContainer1').innerHTML = 0;
            document.querySelector('.start').innerHTML = 'Break';
            
            document.querySelector('.start').disabled = false;


        }
    }

}
function resetPomo(){

    // for disabling the session length
    isIntervalWorking = false

   minutes = 25;
   seconds = 1;
   
    // reseting the min and sec for use display
    minDisplay.innerHTML = minutes;
    document.querySelector('#secContainer1').innerHTML = '0'
    clearInterval(interval1)

   
}

function changeTimer(changer){

    if(!isIntervalWorking){
        console.log('interval is working and dont change time ')
        if(changer==='up'){
            minutes ++;
            document.getElementById('minContainer1').innerHTML = minutes;
    
        }
        else{
            minutes --;
            document.getElementById('minContainer1').innerHTML = minutes;
        }
    }
    
}

