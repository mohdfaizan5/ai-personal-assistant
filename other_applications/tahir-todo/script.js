// For targeting on html
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Local Storage:
// let allTodoLists = [
//   {
//     task: 'Do laundry',
//     isCompleted: true 
//   },
//   {
//     task: 'Complete JS course',
//     isCompleted: false 
//   },
// ]

let allTodoLists;
if(!localStorage.getItem('allTodoLists')){
  allTodoLists = [];
  localStorage.setItem('allTodoLists', JSON.stringify(allTodoLists))
  console.log('Creating new tasks in local Storage')
}
else{
  allTodoLists = JSON.parse(localStorage.getItem('allTodoLists'))
  console.log("Retriving existing data from local storage")
}


// Function to add a todo
function addTask() {
  if (inputBox.value === ''){
    alert('List any task first...')
  }
  else{

    console.log(inputBox.value)
    task = {task: inputBox.value, isCompleted: false}
    allTodoLists.push(task)
    console.log(allTodoLists)
    localStorage.setItem('allTodoLists', JSON.stringify(allTodoLists))


    let li = document.createElement("li");    // Create element
    li.innerHTML = inputBox.value;    // store value inside
    listContainer.appendChild(li);    // to Display
    
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
}

// Retriving existing elements 
allTodoLists.forEach(eachTask => {
  let li = document.createElement("li");    // Create element
  li.innerHTML = eachTask.task;    // store value inside
  
  listContainer.appendChild(li);    // to Display
  
  let span = document.createElement("span")
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  // checkbox in eachTask
  // if(eachTask.isCompleted){
  //   listContainer.click()
  //   .target.classList.toggle("checked");

  // }
});


// Toggling the status(done or not done)
listContainer.addEventListener("click", function(e){
  
  if(e.target.tagName === "LI"){
    console.log('toggling status between completed and not completed');
    e.target.classList.toggle("checked");
    console.log(`toggling ${e.target.innerText}`)

    // changing status in local storage:
    allTodoLists.forEach((task, i)=>{
      if(task.task === e.target.innerText.slice(0,-2)){
        allTodoLists[i].isCompleted = true
        console.log(allTodoLists)
        // console.log(i, task)
      }
    })
  }
  else if(e.target.tagName === "SPAN"){
    console.log('Removing the todo')
    e.target.parentElement.remove();
  }
},false);
  

















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