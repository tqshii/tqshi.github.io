

let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "images/la terre.jpg") {
    myImage.setAttribute ("src","images/laterre2.jpg");
  } else {
    myImage.setAttribute ("src","images/la terre.jpg");
  }
}

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Preservons notre belle planète, " + myName;
  }
}

if(!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Preservons notre belle planète, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}  