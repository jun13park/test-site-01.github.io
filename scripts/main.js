const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vector-mountain.png") {
    myImage.setAttribute("src", "images/mount-seymour.jpg");
  } else {
    myImage.setAttribute("src", "images/vector-mountain.png");
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); 

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Hello, " +myName + "! These are some cool mountains!";
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName + "! These are some cool mountains!";
}
myButton.onclick = function() {
  setUserName();
}
