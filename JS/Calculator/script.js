// console.log("is working...")

//create press function
//log value of button clicked in console
//change displayDiv to clicked button value
//allow for more than one clicked button value to appear in display...push to display?
//store value in variable
//if operator clicked add function and make new display for next values
//repeat previous steps and store in newer variable
//if calculate clicked return answer to display
//if clr clicked erase all data and start over


// var num = [0,1,2,3,4,5,6,7,8,9];
var oldValue = '';
var newValue = '';
var addition = oldValue + newValue;
var subtract = oldValue - newValue;
var multiply = oldValue * newValue;
var divide = oldValue / newValue;
var operations = '';
var calculations = '';

var displayDiv = document.querySelector("#display");

function press(num) {
    console.log(num);
    if (operations === '') {
        if (oldValue == 0) {
            oldValue = oldValue + num;
        }
        else {
            oldValue = oldValue + num;
        }
        displayDiv.innerText = oldValue;
    }
    else {
        if (newValue == 0) {
            newValue = num;
        }
        else {
            newValue = newValue + num;
        }
        displayDiv.innerText = newValue;
    }
    // displayDiv.innerText = num;
    // oldValue = num;
    // console.log(oldValue)
    
    
}

// press()

function setOP(num) {
    operations = num


    // console.log("working")
    // if (operators == '+') {
    //     console.log('add')
    //     displayDiv.value += addition;
        // console.log(press.value);
    // }
    // if (operators == '-') {
        
    //     displayDiv.innerText = oldValue - newValue;
    // }
    // if (setOP.value == *) {
    //     displayDiv.innerText = oldValue * newValue;
    // }
    // if (setOP.value == /) {
    //     displayDiv.innerText = oldValue / newValue;
    // }

}

function calculate() {
    if (operations === '+') {
        calculations = parseFloat(oldValue) + parseFloat(newValue)
    }
    else if (operations === '-') {
        calculations = parseFloat(oldValue) - parseFloat(newValue)
    }
    else if (operations === '*') {
        calculations = parseFloat(oldValue) * parseFloat(newValue)
    }
    else if (operations === '/') {
        calculations = parseFloat(oldValue) / parseFloat(newValue)
    }
    console.log(calculations);
    displayDiv.innerText = calculations;
    oldValue = calculations;
    newValue = 0;
    
}

function clr() {
    console.log("working")
    oldValue = '';
    newValue = '';
    operations = '';
    calculations = 0;
    displayDiv.innerText = calculations;

}