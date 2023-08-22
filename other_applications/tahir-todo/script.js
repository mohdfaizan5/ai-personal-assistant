/*
function addTask(){
  
  let userInput = document.querySelector('#input-box')
  let finalDisplay = document.querySelector('#task-container')

  // fetching the value from input box
  let userValue = document.createElement('li')
  userValue.innerHTML(`☑️${userInput.value}`)

  // change task1
  finalDisplay.appendChild(userValue)
}
*/

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
  if (inputBox.value === ''){
    alert('List any task first...')
  }
  else{
    let li = document.createElement("li");    // Create element
    li.innerHTML = inputBox.value;    // store value inside
    listContainer.appendChild(li);    // to Display

    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
},false);