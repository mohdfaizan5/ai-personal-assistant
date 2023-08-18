let seconds = 60;
minutes = 25;
let interval1;
console.log("working")


// Local storage
let name = localStorage.getItem('name')
console.log(name)
document.querySelector('.username').innerHTML = `Hi ${name}`
// localStorage.


// document.getElementById('secContainer1').innerHTML = 60;
// document.getElementById('minContainer1').innerHTML = 2;

function startPomo(){
     interval1 = setInterval(min, 10)
    document.querySelector('.start').disabled = true;

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


        }
    }

}
function resetPomo(){
  interval1 = clearInterval()
}


