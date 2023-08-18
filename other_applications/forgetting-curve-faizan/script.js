// This will contain all the revisions with dates and it is stored in localStorage

let allRevisions = [];

// if there is no item in localStorage
if(!localStorage.getItem('allRevisions')){
  // allRevisions =
  localStorage.setItem('allRevisions', JSON.stringify(allRevisions) )
  console.log('assigning new localStorage')
}
else{
  console.log('reassigning exisiting localS')
  allRevisions = JSON.parse(localStorage.getItem('allRevisions'))
  console.log(allRevisions, typeof allRevisions)
}

console.log(localStorage.getItem('allRevisions'))




// console.log(a)
let results = document.querySelector('.final-result')

let remindant = document.querySelector('#topic-input')
document.addEventListener('DOMContentLoaded', ()=>{

  // 1st method
  let txt = "";
  for (let x in allRevisions) {
  txt += allRevisions[x].task + " <br>";
  };
  document.querySelector('section').innerHTML = txt;
  
  // 2nd method:
  // let display
  // document.querySelector('section').innerHTML = allRevisions.forEach(e=>{
  //   console.log(e.task)
  // })
  


  // temp
  // document.querySelector('section').innerHTML = Object.values(allRevisions)

  
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
  localStorage.setItem('allRevisions', JSON.stringify(allRevisions))
  
  // fetching existing tasks from localStorage
  // allRevisions = localStorage.getItem('allRevisions')
  // return false

}