const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start')
const instructions1 = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text')
let breathsLeft = 3;

// watching for a selected breaths from the user

numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerHTML = breathsLeft;

});
//Grpw/Shrink circle

const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    },8000)
};
//Breathing instructions
const breathTextUpdate = () =>{
    breathsLeft --;
    breathsText.innerText = breathsLeft;
    instructions1.innerText = "breath in";
    setTimeout(() =>{
        instructions1.innerText = "hold-Breath";
        setTimeout(() => {
            instructions1.innerText = "Exhale";
        },4000)
    },4000)
};


// Breathing app
const breathingApp = () =>{
    const breathingAnimation = setInterval(() =>{
        if(breathsLeft === 0){
            clearInterval(breathingAnimation);
            instructions1.innerText = "Breathing session Completed. Click 'begin' to Start another Round"
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value
            breathsText.innerHTML = breathsLeft
            return;
        }
        breathTextUpdate();
        growCircle();
    },12000)
}
//Start Braething
start.addEventListener("click", () =>
{
    start.classList.add("button-inactive");
    instructions1.innerText = "Get relaxed, and ready to begin Breathing";
    setTimeout(() => {
        instructions1.innerText = "Get relaxed, and ready to begin Breathing";
        setTimeout(() => {
            instructions1.innerText = "Breathing About to begin"
        }, 2000);
    }, 2000);
    breathingApp();
    growCircle();
    breathTextUpdate();
    
});