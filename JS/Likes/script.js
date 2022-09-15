
// var likes= [9, 12, 9];
// var spans = [
//     document.querySelector(".count1"),
//     document.querySelector(".count2"),
//     document.querySelector(".count3")
// ];

// function like(class) {
//     likes[class]++;
//     spans[class].innerHTML = likes[class] + " like(s)";
// } 

// ABOVE IS NOT FULLY CORRECT //


var likeCount1 = 9;
var newLike1 = document.querySelector(".count1");

function like1() {
    likeCount1++;
    newLike1.innerText = likeCount1 + " like(s)";
}

var likeCount2 = 12;
var newLike2 = document.querySelector(".count2");

function like2() {
    likeCount2++
    newLike2.innerText = likeCount2 + " like(s)";
}

var likeCount3 = 9;
var newLike3 = document.querySelector(".count3");

function like3() {
    likeCount3++
    newLike3.innerText = likeCount3 + " like(s)";
}

