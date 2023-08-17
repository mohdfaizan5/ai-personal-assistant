// This will contain all the revisions with dates and it is stored in localStorage

let allRevisions = [];
console.log(localStorage.getItem('allRevisions'))

// if there is no item in localStorage
if(!localStorage.getItem('allRevisions')){
  localStorage.setItem('allRevisions', JSON.stringify(allRevisions) )
}


/*let allRevisions = [];
console.log(localStorage.getItem('allRevisions'))
if(localStorage.getItem('allRevisions') !== null){
  allRevisions = JSON.parse(localStorage.getItem('allRevisions'));
}
else{
  localStorage.setItem('allRevisions', JSON.stringify(allRevisions) )
}

*/


// console.log(a)
let results = document.querySelector('.final-result')

let remindant = document.querySelector('#topic-input')
document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelector('section').innerHTML = allRevisions

});
document.querySelector('#submit-btn').onclick = () => {

  // calling function to get revision
  revice()
  return false;
};

function revice() {
  // Logic part where dates are assigned
  let today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()
  
  // reminding 1st day, 3rd, 7th
  let r1 = new Date(year, month, day + 1);
  let r2 = new Date(year, month, day + 2);
  let r3 = new Date(year, month, day + 6);


  // r1.get
  console.log(r1, r2, r3)
  console.table(r1, r2, r3)

  // fetching existing tasks from localStorage
  allRevisions = localStorage.getItem('get')

  // Storing the revisionTask in object
  let r = new Object()
  r.task = remindant.value;
  r.r1 = r1;
  r.r2 = r2;
  r.r3 = r3;
  console.log(r)
  allRevisions.push(r)
  console.log(allRevisions)

  
  // DOM manipulation:
  results.innerHTML = `
  <b>Will remind you with</b> : ${r.task} <br>
  <b>first revision</b>: ${r1.toString().slice(0,16)} <br> <b>Second revision</b>: ${r2.toString().slice(0,16)} <br> <b>Third revision</b>: ${r3.toString().slice(0,16)} \n`

  // Storing values in local storage
  // localStorage.setItem(JSON.stringify(allRevisions))
  localStorage.setItem('allRevisions', JSON.stringify(allRevisions))

  // return false

}