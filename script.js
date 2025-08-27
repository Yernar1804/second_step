let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/images.jpg') {
        myImage.setAttribute ('src', 'images/images2.png');
    } else {
        myImage.setAttribute ('src', 'images/images.jpg');
    }
}
let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');
function setUserName () {
    let myName = prompt ('Please enter your name.');
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
}
if (!localStorage.getItem('name')){
    setUserName ();  
} else {
    let storedName = localStorage.getItem ('name');
    myHeading.textContent = 'Hello, ' + storedName;
}
myButton.onclick = function () {
    setUserName ();
};