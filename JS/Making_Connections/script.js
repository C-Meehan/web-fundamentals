// console.log("Working");

var oldName = document.querySelector(".profile-name");
var newName = "John Smith";

function changeName() {
    oldName.innerText = newName;
    // console.log(oldName);
}



//Delete Request when accept/deny clicked
// var request = document.querySelector(".req-line");

// function deleteRequest() {
//     var request = document.querySelector(".req-line");
//     request.remove();
// }


//Change number in connection request when accept/deny clicked
var pending = document.querySelector("#req-num");
var activeCons = document.querySelector("#con-num");

function ignore(id) {
    console.log(id);
    var num = parseInt(pending.innerText);
    pending.innerText = num - 1;
    var element = document.getElementById(id);
    element.remove();
}
    
function accept(id) {
    console.log(id);
    var num = parseInt(activeCons.innerText);
    activeCons.innerText = num + 1;
    var number = parseInt(pending.innerText);
    pending.innerText = number- 1;
    var element = document.getElementById(id);
    element.remove();
}


//Change number in your connections when accept clicked

// function addCon() {
//     var num = parseInt(activeCons.innerText);
//     activeCons.innerText = num + 1;
    // var request = document.querySelector(".req-line");
    // request.remove();




//.......Solution example...............
// var requestSpan = document.querySelector("#requests");
// var connectionSpan = document.querySelector("#connections")

// function accept(id) {
//     var element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;
//     connectionSpan.innerText++;
// }

// function ignore(id) {
//     var element = document.querySelector(id);
//     element.remove();
//     requestSpan.innerText--;
// }