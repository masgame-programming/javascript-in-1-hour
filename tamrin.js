// -------------------------------------------------------------------printing-------------------------------------------------------------------

//-----
console.log("hello");
//hello
console.log(1+3);
//4
//-----

// -------------------------------------------------------------------variables-------------------------------------------------------------------

//-----
// making a variable
let name = "ma game";
console.log(name);
//ma game
//-----

//-----
// we can't use any name for a variable
// let if = 21;
// console.log(if); ( ERROR )
//-----

//-----
// ( let ) is only for making a variable and for changing it there is no need to put a ( let ) [ You can't make 2 variables with the same name ]
// let change = "hello";
// let change = 35;
// console.log(change); ( ERROR )
let number = 3;
number = 22;
console.log(number);
//22
//-----

//-----
// ( const = let ) but you can't change the value of a const
// const first_const = "hello";
// first_const = 39;
// console.log(first_const); (ERROR)
//-----

// -------------------------------------------------------------------date types-------------------------------------------------------------------

// data types in javascript:
// 1- primitive (value) types
// 2- reference types

//-----
// primitive (value) types
// 1- string
// "str" "122222224"
// 2- number
// 23 0 -54423 23.5546
// 3- boolean (bool)
// true false
// 4- undefined
// () undefined (anything except number and ...)
// 5- null
// null
//-----

//-----
// reference types
// 1-object
// 2-array
// 3-function
//-----
// you can find the data type with the ( typeof ) command
let primitive = false;
console.log(typeof(primitive));
//boolean
console.log(typeof(thisisundefined));
//undefined
console.log(typeof(null));
//object
//-----

// -------------------------------------------------------------------objects-------------------------------------------------------------------
let first_object = {
    name : "John",
    age : 5,
    admin : true
}
console.log(first_object);
// { name: 'John', age: 5, admin: true }
console.log(typeof(first_object));
// object
console.log(first_object.age);
// 5
console.log(first_object["admin"])
// true
// -------------------------------------------------------------------arrays-------------------------------------------------------------------
//-----
let users = ["mohammad" , "ali" , "reza"]
console.log(users);
// [ 'mohammad', 'ali', 'reza']
console.log(typeof(users));
// object
console.log(users[0]);
// mohammad
console.log(users[1]);
// ali
console.log(users[3]);
// undefined
console.log(users[-2]);
// undefined
//-----

//-----
// adding or changing a value
users[3] = "ehsan"
console.log(users);
// [ 'mohammad', 'ali', 'reza', 'ehsan' ]
users[10] = "mehdi"
console.log(users);
// [ 'mohammad', 'ali', 'reza', 'ehsan', <6 empty items>, 'mehdi' ]
users[1] = 23
console.log(users[1]);
// 23
console.log(users);
// [ 'mohammad', 23, 'reza', 'ehsan', <6 empty items>, 'mehdi' ]
console.log(users.length);
// 11
//-----

// -------------------------------------------------------------------functions-------------------------------------------------------------------
function first_function(){
    console.log("first");
    let calc = 2+9
    console.log(calc);
}
first_function();
// first
// 11
function with_parameter(name, age){
    console.log(name);
    console.log("you are "+age+" years old");
}
with_parameter('mohammad', 16);
// mohammad
// you are 16 years old
let result = with_parameter('mohammad', 16);
console.log(result);
// undefined
function returning(name, age){
    let age2 = age * age;
    return age2
}
let give_argument = returning('mamad', 6)
console.log(give_argument);
// 36

// -------------------------------------------------------------------operators-------------------------------------------------------------------

//-----
let x = 10;
let y = 5;
let n = 3;
let a = 20
let b = 30
let c = 7
let d = 4
let e = 10
let ab = 10
let cd = 20
console.log(x + y);
// 15
console.log(x - y);
// 5
console.log(x * y);
// 50
console.log(x / y);
// 2
console.log(x / n);
// 3.3333333333333335
console.log(x % n);
// 1
console.log(x ** y);
// 100000
console.log(x ++);
// 10
console.log(x);
// 11
console.log(++ y);
// 6
console.log(n --);
// 3
console.log(n);
// 2
a += b
console.log(a)
// 50
a -= b
console.log(a)
// 20
a *= c
console.log(a)
// 140
a /= b
console.log(a)
// 4.666666666666667
e %= d
console.log(e)
// 2
//-----

//-----
// relational
console.log(ab > cd)
// false
console.log(ab < cd)
// true
console.log(ab <= cd)
// true
//-----

//-----
// equality
// lose equality
console.log(ab == cd)
// false
console.log(ab != cd)
// true
//-----

//-----
//strict equality
console.log(10 == 10)
// true
console.log(10 === 10)
// true
console.log('10' == 10)
// true
console.log(10 === "10")
// false
console.log("10" === "10")
//true
console.log("20" !== 20)
// true
//-----

//-----
console.log(5 * 3 + 8 / 2);
// 19
console.log(5 * 4 - 2 ** 3);
// 12
console.log(5 * (4 + 2));
// 30
//-----

// -------------------------------------------------------------------ternary-------------------------------------------------------------------
let vared_shodeh = true
let message = vared_shodeh === true ? "dashboard" : "vorood"
console.log(message)
// dashboard
let vared_shodeh2 = 123
let message2 = vared_shodeh2 === true ? "dashboard" : "vorood"
console.log(message2)
// vorood
let vared_shodeh3 = false
let message3 = vared_shodeh3 === true ? "dashboard" : "vorood"
console.log(message3)
// vorood
// -------------------------------------------------------------------logical ...-------------------------------------------------------------------

//-----
// logical and
console.log(true && true && true)
// true
console.log(true && true && true && true && true && true)
// true
console.log(true && true && true && true && false)
// false
console.log(true && true && true && 212 < -212)
// false
// -----

//-----
// logical or
console.log(true || true || true)
// true
console.log(true || true || true || true || true || true)
// true
console.log(true || true || true || true || false)
// true
console.log(true || true || true || 212 < -212)
// true
console.log(false || false)
// false
console.log(false || false || 1 > 1)
// false
//-----

//-----
// not
logic_not = true && true && true && true && true && true
console.log(logic_not)
// true
console.log(!logic_not)
// false
logic_not2 = (false && true)
console.log(!logic_not2)
// true
logic_not3 = (false || true)
console.log(!logic_not3)
// false
//-----

//-----
console.log(233 || true || false)
// 233
console.log(true || 233 || true)
// true
console.log(false || "this is true")
// this is true
// false : false, undefined, null, 0, "", NaN
console.log(0 || null || false)
// false
console.log(null && 1)
// null
console.log("this is true" && 1)
// 1
console.log("this is true" && 1 && true && -1.111111)
// -1.111111
console.log(0 && null && 21)
// 0
console.log(NaN && false && "")
// NaN
//-----

// -------------------------------------------------------------------if - else -------------------------------------------------------------------
if (12 < 20){
    console.log("12 is smaller than 20")
    console.log("complete")
}
// 12 is smaller than 20
// complete
if (-2 > 0){
    console.log("this is false")
}
// [NOTHING HAPPENS]
if (1 > 0 && 10 <= 10){
    console.log("this is true")
}
// this is true
if (18 < 18 && 0 != 1){
    console.log("this doesn't log")
}
// [NOTHING HAPPENS]
if (true != false || 12 <= 6){
    console.log("this log works")
}
// this log works
let test_if = "test"
if (test_if != 234){
    console.log("this is true")
}
// this is true
if (1 != 1){
    console.log("this isn't true")
}
else if (13 > 11){
    console.log("this will work")
}
// this will work
if (123 < 321){
    console.log("this is true")
}
else if (1232 > 134 && 1 > 0){
    console.log("this else doesn't work")
}
// this is true
// else if wont work if (if) is true even if else if is also true
if ("1" === 1){
    console.log("this isn't true")
}
else {
    console.log("this else works")
}
// this else works
// else wont work if (if) is true
// -------------------------------------------------------------------switch case-------------------------------------------------------------------
let role = "guest";
switch (role){
    case "guest":
        console.log("this works!")
        break;
    case "admin":
        console.log("this doesn't work!")
        break;
    default:
        console.log("no user!")
}
// this works
switch (role){
    case "guest":
        console.log("this works!")
    case "admin":
        console.log("this doesn't work!")
    default:
        console.log("no user!")
    case "guest":
        console.log("this also works!")
}
// this works!
// this doesn't work!
// no user!
// this also works!
// we should put break at the end of every case so the other switches won't get checked and the switch will work correctly
let role2 = "abcd"
switch (role2) {
    case "guest":
        console.log("this works!")
        break;
    case "admin":
        console.log("this doesn't work!")
        break;
    default:
        console.log("no user!")
}
// no user
// -------------------------------------------------------------------for loop-------------------------------------------------------------------
for (let first_for =  1; first_for < 5; first_for++ ){
    console.log(console.log("hello"))
    console.log(first_for)
}
// hello
// undefined
// hello
// undefined
// hello
// undefined
// hello
// undefined
for (let even = 0; even < 5; even++ ){
    if (even % 2 == 0){
        console.log(even)
    }
}
// 0
// 2
// 4
// -------------------------------------------------------------------while loop-------------------------------------------------------------------
let first_while =  0
while (first_while <= 5){
    console.log(first_while)
    first_while ++
}
// 0
// 1
// 2
// 3
// 4
// 5
// if we didn't put the [ first_while ++ ] this worked unlimited times
// while (true){
//     ...
// }
// this while works unlimited times
// -------------------------------------------------------------------do-while loop-------------------------------------------------------------------
let first_do_while = 0
do {
    console.log(first_do_while)
    first_do_while ++
}while (first_do_while < 5)
// 0
// 1
// 2
// 3
// 4
let second_do_while = 10
do {
    console.log(second_do_while)
    second_do_while ++
}while (second_do_while < 5)
// the diffrence beetween while and do-while is that do while will run once if the condition is false but while doesn't.
// -------------------------------------------------------------------for-in and for-of loop-------------------------------------------------------------------
const person = {name : 'mohammad', age: 26}
const colors = ['red', 'blue', 'green']
for (let key in person) {
    console.log(key)
}
// name
// age
for (let key in person) {
    console.log(person[key])
}
// mohammad
// 26
for (let index in colors) {
    console.log(colors[index])
}
// red
// blue
// green
for (let color in colors) {
    console.log(color)
}
// 0
// 1
// 2
// -------------------------------------------------------------------break and continue-------------------------------------------------------------------
let break_and_con = 0
let break_and_con2 = 0
while (break_and_con <= 10){
    if (break_and_con == 3){
        break;
    }
    console.log(break_and_con);
    break_and_con++
}
// 0
// 1
// 2
while (break_and_con2 <= 10){
    if (break_and_con2 == 4){
        break_and_con2++;
        continue;
    }
    console.log(break_and_con2);
    break_and_con2++;
}
// 0
// 1
// 2
// 3
// 5
// 6
// 7
// 8
// 9
// 10
// -------------------------------------------------------------------objects2-------------------------------------------------------------------
// making a circle
//-----
let circle = {
    radius : {
        x: 1,
        y: 1,
    },
    isVisible : true,
    draw : function (){
        console.log('draw')
    }
};
circle.draw();
// draw
//-----
// factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}
    let circle1 = createCircle(1);
console.log(circle1)
// { radius: 1, draw: [Function: draw] }
let circle2 = createCircle(2);
console.log(circle2)
// { radius: 2, draw: [Function: draw] }
//-----

//-----
// constructor function
// camel notation : oneTwoThree-->> [ factory function ]
// pascal notation : OneTwoThree-->> [constructor function ]
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}
const constrcircle = new Circle(3);
console.log(constrcircle)
// Circle { radius: 3, draw: [Function (anonymous)] }

//-----
const circle3 = {
    radius: 1,
}
circle3.color = "red";
circle3.draw = function() {}
delete circle3.color
console.log(circle3)
// { radius: 1, draw: [Function (anonymous)] }
//-----

//-----
const circle4 = {
    radius: 1,
    draw(){
        console.log('draw')
    }
}
for (let key in circle4) {
    console.log(key)
}
// radius
// draw
for (let key in circle4) {
    console.log(circle4[key])
}
// 1
// [Function: draw]
// for (let key of circle4) {
//     console.log(key)
// }
// this will raise an error [ circle4 is not iterable ]
let circle4Keys =Object.keys(circle4)
// this will make an array
console.log(circle4Keys)
// [Function: draw]
// [ 'radius', 'draw' ]
for (let key of circle4Keys) {
    console.log(key)
}
// radius
// draw
// this won't raise an error [ circle4Keys is an array and arrays are iterables]
let circle4Entries = Object.entries(circle4);
console.log(circle4Entries);
// [ [ 'radius', 1 ], [ 'draw', [Function: draw] ] ]
for (let entry in circle4Entries) {
    console.log(entry)
}
// 0
// 1
if ('radius' in circle4) {
    console.log('yes')
}
// yes
const another = {};
for (let key in circle4) {
    another[key] = circle4[key];
}
console.log(another)
// { radius: 1, draw: [Function: draw] }
const another2 = Object.assign({}, circle4)
console.log(another2)
// { radius: 1, draw: [Function: draw] }
// this way is better than the previous one
const another3 = Object.assign({color : 'blue'}, circle4)
console.log(another3)
// { color: 'blue', radius: 1, draw: [Function: draw] }
const another4 = {...circle4}
console.log(another4)
// { radius: 1, draw: [Function: draw] }
// this way is better than the previous ones
const another5 = {color : 'green', ...circle4};
console.log(another5)
// { color: 'green', radius: 1, draw: [Function: draw] }
//-----

// -------------------------------------------------------------------math Object-------------------------------------------------------------------
console.log(Math.PI)
// 3.141592653589793
console.log(Math. random())
// [ this will make a different number beetween 0 and 1 every time ]
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}
console.log(getRandomArbitrary(10 , 50))
// [ this will make a different number beetween 10 and 50 every time ]
console.log(Math.floor(Math.random()))
// 0
function getRandomArbitrary2(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary2(10 , 50))
// [ this will make a different number beetween 10 and 50 every time ]
console.log(Math.round(1.9))
// 2
console.log(Math.round(3.3))
// 3
console.log(Math.max(0, 2, -2.5, 1990))
// 1990
console.log(Math.min(0, 2, -2.5, 1990))
// -2.5
console.log(Math.abs(-2948.3))
// 2948.3
// -------------------------------------------------------------------string Object-------------------------------------------------------------------
//-----
// string primitive
const message4 = 'hello world'
console.log(typeof (message4))
// string
//-----

//-----
// string object
const another6 = new String("hello world");
console.log(typeof (another6))
// object
//-----

const message5 = "neon . coding is cool"
console.log(message5)
// neon . coding is cool
console.log(message5.length)
// 21
console.log(message5[0])
// n
console.log(message5[12])
// g
console.log(message5.includes('eon'))
// true
console.log(message5.includes('hello'))
// false
console.log(message5.startsWith('ne'))
// true
console.log(message5.startsWith('Neon'))
// false
console.log(message5.endsWith('cool'))
// true
console.log(message5.endsWith('coo'))
// false
console.log(message5.indexOf('o'))
// 2
console.log(message5.indexOf("coding"))
// 7
console.log(message5.indexOf('z'))
// -1
console.log(message5.replace('coding', "programming"))
// neon . programming is cool
console.log(message5)
// neon . coding is cool
console.log(message5.toUpperCase())
// NEON . CODING IS COOL
console.log(message5)
// neon . coding is cool
console.log(message5.toLowerCase())
// neon . coding is cool
const message6 = 'neon . \'coding is cool'
console.log(message6)
// neon . 'coding is cool
const message7 = "neon \n. coding is cool"
console.log(message7)
// neon
// . coding is cool
// -------------------------------------------------------------------template literal-------------------------------------------------------------------
const another7 = ` neon . 
coding is cool`
console.log(message7)
// 'neon'
// . coding is cool
let name2 = 'ali'
let msg = 'hi ' + name2 + ' . thank you';
console.log(msg)
// hi ali . thank you
// instead of this we can use:
let name3 = 'ali';
let msg2 = `hi ${name3} . thank you`;
console.log(msg2)
// hi ali . thank you
// -------------------------------------------------------------------date Object-------------------------------------------------------------------
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);
console.log(now)
// 2024-11-21T15:21:21.411Z
console.log(date1)
// 2018-05-11T04:30:00.000Z
console.log(date2)
// 2018-05-11T04:30:00.000Z
console.log(now.toDateString())
// Thu Nov 21 2024
console.log(date1.toDateString())
// Fri May 11 2018
console.log(date2.toDateString())
// Fri May 11 2018
console.log(now.getDate())
// 21
console.log(date1.getDate())
// 11
console.log(date2.getDay())
// 5
console.log(now.getFullYear())
// 2024
console.log(date1.getMonth())
// 4
// -------------------------------------------------------------------arrays2-------------------------------------------------------------------
const numbers = [3, 4];
console.log(numbers)
// [ 3, 4 ]
numbers.push(5, 6)
console.log(numbers)
// [ 3, 4, 5, 6 ]
numbers.unshift(1)
console.log(numbers)
// [ 1, 3, 4, 5, 6 ]
numbers.splice(2, 0, "a", "b")
console.log(numbers)
// [ 1, 3, a, b, 4, 5, 6 ]
console.log(numbers.indexOf(3))
// 1
console.log(numbers.indexOf('a'))
// 2
console.log(numbers.indexOf(2))
// -1
if (numbers.includes(4)){
    console.log('yes')
}
// yes
if (numbers.includes(2)){
    console.log('yes')
}
// [ NOTHING HAPPENS ]
console.log(numbers.includes(5))
// true
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]
console.log(courses.includes({id: 1, name: 'a'}))
// false
const result2 = courses.find(function (course){
    return course.name === "a"
})
console.log(result2);
// { id: 1, name: 'a' }
const result3 = courses.find(function (course){
    return course.id === 2
})
console.log(result3)
// { id: 2, name: 'b' }
const result4 = courses.find(function (course){
    return course.id === "3"
})
console.log(result4)
// undefined
// -------------------------------------------------------------------arrow function-------------------------------------------------------------------
const result5 = courses.find(course=>{
    return course.name === "a"
})
console.log(result5)
// { id: 1, name: 'a' }
// -------------------------------------------------------------------arrays3-------------------------------------------------------------------
//-----
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const last =numbers2.pop();
console.log(numbers2);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(last)
// 10
const first = numbers2.shift();
console.log(numbers2);
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(first)
// 1
const result6 = numbers2.splice(2, 2);
console.log(numbers2);
// [ 2, 3, 6, 7, 8, 9 ]
console.log(result6)
// [ 4, 5 ]
//-----

//-----
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let another8 = numbers3;
numbers3 = [];
console.log(numbers3);
// []
console.log(another8)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let another9 = numbers4;
numbers4.length = 0;
console.log(numbers4);
// []
console.log(another9)
// []
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let another10 = numbers5;
numbers5.splice(0, numbers5.length);
console.log(numbers5);
// []
console.log(another10)
// []
//-----

//-----
const first2 = [1, 2, 3]
const second = [4, 5, 6]
const combined = first2.concat(second)
console.log(combined)
// [ 1, 2, 3, 4, 5, 6 ]
console.log(first2)
// [ 1, 2, 3 ]
console.log(second)
// [ 4, 5, 6 ]
const slice = combined.slice(2, 4)
console.log(slice)
// [ 3, 4 ]
const first3 = [{id: 1}]
const combined2 = first3.concat(second);
console.log(combined2)
// [ { id: 1 }, 4, 5, 6 ]
//-----

//-----
const numbers6 = [1, 2, 3]
for (let number of numbers6)
    console.log(number)
// 1
// 2
// 3
numbers6.forEach(function (number) {
    console.log(number);
})
// 1
// 2
// 3
numbers6.forEach(number => {
    console.log(number);
})
// 1
// 2
// 3
//-----

//-----
const joined = numbers6.join();
console.log(joined)
// 1,2,3
const joined2 = numbers6.join(" ");
console.log(joined2)
// 1 2 3
//-----

//-----
const numbers7 = [2, 7, 0, 4]
numbers7.sort()
console.log(numbers7)
// [ 0, 2, 4, 7 ]
numbers7.reverse();
console.log(numbers7)
// [ 7, 4, 2, 0 ]
const numbers8 = [
    {id: 1, name: 'html'},
    {id: 2, name: 'css'},
]
numbers8.sort(function (a, b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})
console.log(numbers8)
// [ { id: 2, name: 'css' }, { id: 1, name: 'html' } ]
//-----

//-----
const numbers9 = [1, 2, 3]
const allpositive = numbers9.every(function (value){
    return value >= 0;
})
console.log(allpositive)
// true
const numbers10 = [1, -3, 3]
const allpositive2 = numbers10.every(function (value){
    return value >= 0;
})
console.log(allpositive2)
// false
const numbers11 = [90, 50, 45]
const atleastonepositive = numbers11.some(function (value){
    return value > 46
})
console.log(atleastonepositive)
// true
const numbers12 = [1, 2, 23]
const atleastonepositive2 = numbers12.some(function (value){
    return value > 25
})
console.log(atleastonepositive2)
// false
//-----

//-----
const numbers13 = [1, -1, 2, 4]
const filtered = numbers13.filter(function (value){
    return value >= 0;
})
console.log(filtered)
// [ 1, 2, 4 ]
const filtered2 = numbers13.filter(v => v >= 0)
console.log(filtered2)
// [ 1, 2, 4 ]
const users2 = [
    {name : 'ali', age : 18},
    {name : 'another', age : 36},
    {name : 'another', age : 22},
    {name : 'another', age : 32},
    {name : 'another', age : 12},
]
const result7 = users2.filter(user=> user.age > 18)
console.log(result7)
// [
//   { name: 'another', age: 22 },
//   { name: 'another', age: 32 },
//   { name: 'another', age: 36 }
// ]
// -------------------------------------------------------------------*******-------------------------------------------------------------------
// we should put a semi column ( ; ) at the end of every line of code
// we can't use any name for a variable
// ( let ) is only for making a variable and for changing it there is no need to put a ( let ) [ You can't make 2 variables with the same name