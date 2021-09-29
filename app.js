"use strict";
const add = {
    a: 8,
    b:3
};
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);


const ondArray = ['a', 'b'];
const newArr = ondArray;