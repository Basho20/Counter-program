// IF STATEMENTS = if a condition is true, then do something. If the condition is false, then do something else.

// Example 1: Basic if statement
// else if  statement = if the first condition is false, then check another condition. If that condition is true, then do something. If that condition is false, then do something else.


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
     age = myText.value; 
 age = Number(age);  
    if (age > 100) {
     resultElement.textContent = "You are too old to enter this site";
    }
if (age == 0) {
 resultElement.textContent = "You cant enter. you are just born";
}
else if (age >= 18) {
resultElement.textContent = "You are old enough to enter this site";
}

else if (age < 0) {
     resultElement.textContent = "You age cannot below 0";
}


else {
     resultElement.textContent = "You must be 18+ to enter this site";
}
}





