// console.log("is working...");
var cookies = document.querySelector('#footer');
var temp = document.querySelector('#change-temp')

//convert temps 
//figure out if celc or fahr/target the value
//create if/else statement
//create celc formula 
//create fahr formula

var fahrenheit;
var celsius;

// console.log(celsius);

function convertC2F(degrees) {
    return Math.round(9 / 5 * degrees + 32);
} 

function convertF2C(degrees) {
    return Math.round(5 / 9 * (degrees - 32));
} 

function tempChange() {
    // console.log(temp.value);
    for (var i = 1; i < 9; i++) {
        var degrees = document.querySelector("#temp" + i);
        var degreeValue = degrees.innerText;
        if (temp.value == "C") {
            degrees.innerText = convertF2C(degreeValue)
            // console.log(convertF2C(degreeValue));
            console.log('temp value is c')   
        }
        else {         
            degrees.innerText = convertC2F(degreeValue)
            // console.log(convertC2F(degreeValue));
            console.log('temp value is f')
        }
    }
}




function hide() {
    cookies.remove();
}