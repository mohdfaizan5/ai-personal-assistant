function addTask(){
  
  let userInput = document.querySelector('#input-box')
  let finalDisplay = document.querySelector('#task-container')

  // fetching the value from input box
  let userValue = document.createElement('li')
  userValue.innerHTML(`☑️${userInput.value}`)

  // change task1
  finalDisplay.appendChild(userValue)





}