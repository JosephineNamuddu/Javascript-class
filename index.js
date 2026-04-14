console.log("My name is Josephine");
// Variables
// Declaring variables uses the var, let, or const keywords

// var is function-scoped and can be redeclared and updated
var name = "Josephine";
console.log(name);
name = "Namuddu Josephine";
console.log(name);
// let is block-scoped and can be updated but not redeclared
let age = 35;
console.log(age);
age = 22;
console.log("My age has changed becouse I am just a girl", age);

// Const is block scxoper and cannot be updated or redclared.
const country = "Uganda";
console.log(country);
// country = "kenya";  This will throw an error becouse const cannot be redeclared or updated.


// Data Types
// Javascript has several datatypes including:

// 1. String: This is data enclosed in quotes ("",'', or '').
let greeting = "Hello,How are you";
console.log (greeting);
console.log(typeof greeting);

let Town = "Nabbingo"
console.log(Town)
console.log (typeof Town)


// 2. Number: These represent both integers and decimals.
let x = 10;
let y = "12"
let price = 10.99;
console.log(x);
console .log (y);
console.log(typeof x);
console.log (typeof y);
 

// 3. Boolean : This represents true or false
let isLoggedIn = true;
let isAdmin = false;


// 4. Undefined: A variable declared but not assigned a value.
// let x;
// console.log(x); //undefined
 

// 5. Null: Represents an intentional absences of value.
let selectedUser = null;

// 6. BigInt: Used for very large integers
 let bigNumber = 123456789101123456789013246n;

// 6.symbol: These are used to create unique identifiers.
// let id = symbol(userId);

// // Mathematical operators: These are used to perform arithmetic calculations on numbers - just like in maths
//  They include Addition, subtruction, Multiplication,Division,Modules, Exponentiations, Increments, Decrements
let a = 5;
let b = 3;
console.log (a-b); //subtruction
console.log (a+b); //addition
console.log (a/b); //Division
console.log (a%b); //Modulus: These return the remainder after division and are useful for checking even or odd numbers
console.log (a**b); // Exponentiation
console.log (a++);//Increment
console.log(a--);// Decrement

//NOTE: + can be used to join strings (concatenations)
console.log(5+"5"); //"55" (string!)




//conditionals in javascript
// if statement
//definition of if statement


let condition = true;
let condition1= false;
let condition2 = false;
let condition3 = true;
if (condition) {
    //code to be executed if condition is true
}
if (condition) {
    //code to be executed if condition is true
} else {
    //code to be executed if condition is false
}
//else if statement
//definition of if else condition
if (condition1) {
//code to be executed if condition is true
} else if (condition2) {
    //code to be executed if condition 2 is true 
}else if (condition3) {
    //Code to be executed if all conditions are false
}

//Practice example
let mark = 75;

if (mark > 69) {
    console.log("Very good you have passed the exam")
}
if (mark >=70){
    console.log("You have passed the exam")
} else {
    console.log ("You have failed the exam")
}

//comparison operators
//1. Equal to (==)
//2. Not equal toString(!=)
//3. Strict equal to (===)
//4. ssstrict not equal to(!==)
//5. Greater than(>)
//6. Less than (<)
//7. Greater than or equal to (>=)
//8. Less than or equal to(<=)

//Arrays

["Volvo", "Toyota", "Benz", "Kia",]
[1,2,3,4,5]
//["Josephine" ,25, "uganda",true, null, undefined{name:"John"}]
let cars = ("Volvo", "Toyota", "Benz", "Kia")
console.log(cars);
console.log(cars[0]); 

let mixedArray = ["Josephine",25,"Uganda",true, null, undefined,{name:"John"}];
console.log(mixedArray);
console.log(mixedArray[6])

//objects
{}//an empty object

let person = {
name:"josephine",
age : 35,
district: "Kampala",
student: false,
hobbies: ["coding", "travelling"],
address:{
   street :"123 main street",
   city : "Kampala",
   country : "uganda"
}
}
console.log (person);
console.log(person["name"]);//Accessing the name properly
console.log(person.hobbies)
console.log(person.hobbies[1])//Accessing the second hobby

// Assignment 2 about Scores

let marks = 85;

if (marks >= 80) {
    console.log("Grade: D1");
} else if (marks >= 75) {
    console.log("Grade: D2");
} else if (marks >= 70) {
    console.log("Grade: C3");
} else if (marks >= 65) {
    console.log("Grade: C4");
} else if (marks >= 60) {
    console.log("Grade: C5");
} else {
    console.log("Grade: Fail");
}
//LOOPS
// It is an array called scores containing objects with each object having a name and score properties
let scores = [
{name: "Josephine", score : 85},
{name: "Joshua", score : 63},
{name: "Justine", score : 75},
{name: "Joan", score : 57},
{name: "Joseph", score : 39},
{name: "John", score : 95}
]
scores.forEach(student => {
   let grade;
   if(student.score >= 90){
      grade = "A"
   } else if (student.score >= 80){
    grade = "B"
 } else if (student.score >= 70) {
    grade = "C"
 }
 else if(student.score>= 60){
    grade = "D"
 }
 else if (student.score >= 50) {
    grade = "E"
 } else{
    grade = "F"
 }

 console.log(student.name + ":" + student.score + "and my grade is;" + grade)
 
});
//Functions
//Function are reusable blocks of code that perform a specific task. They can take parameters and restore values.

// Function declaration // we use the function keyword to declare a function

function functionName() {
    //code to be executed
}

function funcName(parameter){
    //code to beexecuted
    return parameter; // returning the parameter
}

function funcWithParameters(parameter1, parameter2, parameter3) {
    //code to be executed
    return parameter1 + parameter2 + parameter3; // returning the sum of the parameters
}




//LOOPS Assignment
// 1. For loop: 
// a for loop is used when you know how many times you want to repeat something.
//used for initialization
//condition
//increment
//Example incrementing for loop
for(let i = 1; i<=5;i++){
    console.log(i);
}
for (let i = 0; i < 7; i++){
    console.log(i);
}
// Decremention for loop
for (let i = 7; i > 0; i--){
    console.log (i)
}

const myCars = ["Volvo", "Benz", "kia","Toyota"];
console.log(myCars);
const numberOfCars = myCars.length; //This gives you the number of items in the array
console.log(numberOfCars);

for (let i = 0; i < myCars.length; i++){
    console.log(myCars[i]);
}
for (let car of myCars){
    function printCarPosition(car){
        const index = myCars.indexOf(car);
    console.log("The position of  "  + car + " in the array is " + index);
    }
    printCarPosition(car);
    console.log(car);
}
//2. While loop

//while (condition){
//code to be executed as long as the condition is true}

//incrementing while loop
let id = 8;
while (id < 7){
    console.log("from the while loop", id);
    id++;
}
// let password = "";
// while (password !=="1234"){
// password - prompt("please enter the correct password:");
// }
// 3. Do-while loop
//do{
    //code to be executed
//} while (condition)
let i = 0;
do {
    console.log("From the do-while loop",i);
    i++;
} while (i < 7);

// Arrow functions are more concise ways of creating functions in JavaScript
// They are often used for short simple functions

//Traditional function expression
const traditionalFunction = function(){
    console.log("This is a traditional function");
}
traditionalFunction();

function anotherTraditionalFunction(){
    console.log("This is another traditional function");
}
anotherTraditionalFunction();
//Arrow function expression
const arrowFunc =()=>{
    console.log("This is an arrow function");
}
arrowFunc();

const add = (a,b)=>{
    console.log(a+b);
}
add(3,4)

//JSON (JavaScript Object Notataion)

//JAvascript Object
const task = {
    id:1,
    tittle: "Complete JavaScript assignment",
    completed: false
}
console.log(task);

//JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);

//Parsing JSON string back to JavaScript object
const parsedTask = JSON.parse(taskJSON);
console.log(parsedTask);

// Local storage
//Storing data in local storage
localStorage.setItem("Name", "Josephine Namuddu");
localStorage.setItem("task", taskJSON);

//Retrieving data from local storage
const nameFromStorage = localStorage.getItem("Name");
console.log("Name from local storage:", nameFromStorage);

const taskFromStorage = localStorage.getItem("task")
console.log(taskFromStorage);