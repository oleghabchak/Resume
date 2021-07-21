"use strict";

const arr =[2,465,4,0,7,8];

// arr.pop();
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for ( let val of arr) {
//     console.log(val);
// }

arr.forEach(function(it, i, arr) {
    console.log(`${i}: ${it} всередині ${arr}`);
});