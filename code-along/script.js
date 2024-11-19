console.log("I am here")
let myArray = ["me",
    "my-self"
    ,"I"]

let names = document.querySelectorAll("li")
let targrt = document.querySelector("receiver")

names.forEach(item => {
    let newEl= document.createElement("li")
    newEl.innerText = item.innerText;
    targrt.appendChild(newEl)
})
