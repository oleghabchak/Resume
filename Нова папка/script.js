// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 45,
//     sum: function () {
//         function shout() {
//         console.log(this);
//     }
//     shout();
//     }
// };
// obj.sum();
// 1---звичайна фунція this= window, якщо строгий режим, то undefined
// 2---К


function User (name, age) {
    this.age = age;
    this.name = name;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
let ivan = new User ('ivan',23);

// User.prototype.exit = function () {
//     console.log(`Користувач ${this.name}, ${this.age} вийшов`);
// }

// const alex = new User ('oleg', 24);

// alex.exit();

// alex.hello();

// console.log(alex);

