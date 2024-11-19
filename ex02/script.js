// Write your Task 1 code inside this function!
function task1() {
  document.querySelector("code")
  console.log("target");
  //target div
  let target = document.querySelector("#text-content")
  //set inertext to somthing new
  target.innerText = "somthing new"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let button = document.querySelector("#red")
  let html = document.querySelector('#task2')
  let inverted = false;
  html.classList.toggle("inverted");

  inverted = !inverted;
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3")
}

function task3() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("New Task"));
  ul.appendChild(li);
}