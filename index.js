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
