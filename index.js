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








// Data Types
// Javascript has several datatypes including:
// 1. String 
let greeting = "Hello,How are you";
console.log (greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = "12"
console.log(x);
console .log (y);
console.log(typeof x);
console.log (typeof y);
// 3. Boolean
// 4. Undefined
// 5. Null 
// 6.symbol 
// Explanation of symbol datatype
// Mathematical operators
let a = 5;
let b = 3;
console.log (a-b); //subtruction
console.log (a+b); //addition
console.log (a/b); //Division
console.log (a%b); //Modules
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
let password = "";
while (password !=="1234"){
password - prompt("please enter the correct password:");
}
// 3. Do-while loop
//do{
    //code to be executed
//} while (condition)
let i = 0;
do {
    console.log("From the do-while loop",i);
    i++;
} while (i < 7);