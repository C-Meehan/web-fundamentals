
// function alwaysHungry(arr) {
//     var food = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy")
//             food++;
//         }
//     }
//     if (food == 0) {
//         console.log("I'm hungry");
//     }
// }
// alwaysHungry([3.14, "food", "pie", true, "food"])
// //this should console log "yummy", "yummy"

// alwaysHungry([4, 1, 5, 7, 2]);
// //this should console log "I'm hungry"

// //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i]);
//             // console.log(filteredArr);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// function betterThanAverage(arr) {
//     var sum = 0;
//     // calculate the average
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         // console.log(sum);
//     }
//     var avg = sum / arr.length;
//     // console.log(avg);
//     var count = 0
//     // count how many values are greated than the average
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > avg) {
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// function reverse(arr) {
//     // your code here
//     var right = arr.length - 1;
//     var left = 0;
//     while (left < right) {
//         var temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// //breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// function fibonacciArray(n) {
//     // the [0, 1] are the starting values of the array to calculate the rest from
//     var fibArr = [0, 1];
//     // your code here
//     for (var i = 0; i < n - 2; i++) {
//         var sum = fibArr[i] + fibArr[fibArr.length - 1];
//         fibArr.push(sum)
//     }
//     return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// function sumAllNums() {
//     var sum = 0;
//     for (var i = 1; i <= 100; i++) {
//         sum += i; 
//         // console.log(sum);
//     }
//     return sum
// }
// var total = sumAllNums();
// console.log(total);

// function sumEvenNums() {
//     var sum = 0;
//     for (var i = 1; i <= 100; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
//     return sum
// }
// var total = sumEvenNums();
// console.log(total);