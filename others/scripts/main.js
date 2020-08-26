document.querySelector('html').onclick = function(){
    alert('meow~~')
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/kitten.jpg') {
        myImage.setAttribute ('src','/images/ragdoll.jpg');
    }else {
        myImage.setAttribute ('src','/images/kitten.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
      localStorage.setItem('name',myName);
      myHeading.innerHTML = 'We love cats, '+ myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();    
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'We love cats, '+ storedName;
}
myButton.onclick = function () {
    setUserName();
}