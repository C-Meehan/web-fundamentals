var counter = 1;
var countElement = document.querySelector("#count");


function add1() {
    counter++;
    countElement.innerText = "The count is " + counter;
    console.log(counter);

}

function subtract1() {
    counter--;
    countElement.innerText = "The count is " + counter;
    console.log(counter);
}