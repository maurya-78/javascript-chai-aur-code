// const accountId =1444553
// let accountEmail = "jimaurya6386@gmail.com"
// var accountP= "1234560"
// accountCity = "Mumbai"

//accountId=2    // not allowed

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scop and functional scop
*/
//console.table([accountId,accountEmail,accountP,accountCity]);

//             Data Types

"use strict";
const { use } = require("react");

// treat all JS code as newer version

//alert(3+3)  // we are using nodejs, not browser

// coad readability should be good;

//  null =>standalone value
// undefined =>
//  symbol => unique

// object

//console.log(typeof undefined); //undefined
//console.log(typeof null); //object

// let score = "Rahul"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = "Rahul"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => false
// "Rahul" => true

// ************************Operations********************************

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = "Rahul"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(false);
//console.log(+true);
//console.log(+"");
//console.log(true+);

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100

// ++gameCounter;
// console.log(gameCounter);

//***************Comparision******************

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1);

// ===  >check the value conversion as well as Datatype conversion

//***************Datatype summary************

//   Primitive  ->7 types :String, Number, Boolean, null, undefined, symbol, BigInt

// Reference(Non primitive) -> Types :Array, Objects, Functions

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id === anotherId);

//**********Memory(Stack and Heap)***********

// Stack->Primitive
// Heap->Non-primitive

let str1 = "Rahul";

let str2 = str1;
str2 = "Maurya";
// console.log(str1);
// console.log(str2);

let user1 = {
  email: "jimaurya6386@gmail.com",
  upi: "7268980198@ybl",
};

let user2 = user1;

user2.email = "rahul@gmail.com";
// console.log(user1.email);
// console.log(user2.email);

//++++++++++++++++++String in JavaScript+++++++++++++++++++

const name = "Rahul";
const repoCount = 50;

//console.log(name+ repoCount + "Value")

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Rahul");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

//-------------------Number and Maths in JavaScript---------------------------

// const score = 400
// console.log(score);

// const balance = new Number(100)

// console.log(balance );

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(3));
// console.log(balance.toExponential(2));
// console.log(balance.valueOf());
// console.log(balance.toString().length);

// const otherNumber = 1000000000
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toExponential(2));
// console.log(otherNumber.valueOf());
// console.log(otherNumber.toString().length);
// console.log(otherNumber.toString());
// console.log(otherNumber.toLocaleString("en-IN"));

//--------------Maths----------

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.round(4.3))
// console.log(Math.min(4,1,5,7,9));
// console.log(Math.max(4,1,5,7,9));
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

//++++++++++++++++Date and Time-------------

let myDate = new Date();
// console.log(myDate.toString);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date("01-14-2023");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.setFullYear(2022));
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getTime());
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.toUTCString());

const Date1 = newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
//console.log(Date1);

//++++++++++++++++Array+++++++++++++

const Arr = [0, 1, 2, 3, 4, 5];
//console.log(Arr)

//    Array methods

Arr.push(6);
//console.log(Arr);

Arr.pop();
//console.log(Arr);

Arr.unshift(7);
//console.log(Arr);

Arr.shift();
//console.log(Arr);

// console.log(Arr.includes(9));
// console.log(Arr.indexOf(3));
// console.log(Arr.join());

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);
//console.log(allHeros.length)
//console.log(marvel_heros[3][1])

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//console.log(another_array.flat(Infinity));

//console.log(Array.isArray("Rahul"));
//console.log(Array.from("Rahul"));
//console.log(Array.from({name:"Rahul"}));//most important method for array

let score1 = 100;
let score2 = 200;
let score3 = 300;

//console.log(Array.of(score1,score2,score3))

//++++++++++++++++Objects++++++++++++++++++++++

//singleton -> constracter ->Object.create (object creation)
//Object.create;

//object literals

const mySym = Symbol("key1");

const JsUser = {
  "full name": "Rahul Maurya",
  mySym: "mykey1", // it is string but if [mySym] -> that is a symbol
  name: "Rahul",
  age: 20,
  location: "Jaunpur",
  email: "rahul@gmail.com",
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) -> Accese  but not allowed
// console.log(JsUser.full name);  -> not accese and thrown error
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// console.log(typeof JsUser.mySym)

JsUser.email = "rahul@chatgpt.com";
//Object.freeze(JsUser)
JsUser.email = "rahul@gmail.com";
//console.log(JsUser);

JsUser.greetig = function () {
  //console.log("Hello js user");
};

JsUser.greeting1 = function () {
  //console.log(`Hello js user, ${this.name}`);
};

//console.log(JsUser.greeting1());  //->undefined

//console.log(JsUser.greetig());  // -> undefined
//console.log(JsUser.greetig);  //->[Function (anonymous)]

//  if i can reference the same object then we can use the (.this)-> method.

//------Object Singltan --------------

//const tinderUser = new Object();   //{}
const tinderUser = {}; //{}
tinderUser.id = "123abc";
tinderUser.name = "Rahul";
tinderUser.email = "rahul@gmail.com";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "rahul@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rahul",
      lastname: "Maurya",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
//console.log(obj4);

const users = [
  {
    id: 1,
    email: "rahul@gmail.com",
  },
  {
    id: 2,
    email: "rahul@gmail.com",
  },
  {
    id: 3,
    email: "rahul@gmail.com",
  },
];

//console.log(users[1].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.getOwnPropertyNames(tinderUser));
// console.log(Object.getOwnPropertyDescriptors(tinderUser));

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "Rahul",
};

//course.courseInstructor

const { courseInstructor: instructor } = course;
//console.log(instructor);

// {
//     name:"Rahul",
//     coursename:"js in hindi",
//     price:"Free",

// }

//---------Functions And Parameter in JS -----------------

//function sayMyName(){
// console.log("Rahul");
// console.log("Kumar");
// console.log("Maurya");

//}

//sayMyName()

//function addTwoNumbers(num1, num2){

//let result = num1+num2
//return result
// console.log("Rahul"); //-> Never executed "Rahul" in the output because after the return statement
//-> But if we write the coad (console.log("Rahul")) is above to the  return statement
//-> then it will we executed for the output
// return num1+num2

//}

//const result =addTwoNumbers(5,3)
//console.log("Result:", result)

function loginUserMessage(username) {
  //return `${username} logged in successfully`;
}

//logicUser = loginUserMessage("Rahul")
//console.log(logicUser);

//console.log(loginUserMessage("Rahul"));


function calculateCartPrice(...num1) {      //-> ... is called both rest and spread operator according to his situation 
                                               //-> when called rest and when called spreat
 // return num1
}

//console.log(calculateCartPrice(200, 400, 800, 1000, 1500, 2000));    //[200,400,600,....]-> Rest operator

const user_cart = {
  username: "Rahul",
  price: 1999,

}

function handleObject(anyobject){
 // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
  username:"Rahul",
  price:399,
})


const myNewArray = [100,200,300,400,500]

function returnSecondValue(getArray){
  //return getArray[4]
}

//console.log(returnSecondValue(myNewArray));

//console.log(returnSecondValue([400,500,600,700,800,900,1000]));




//------------ Global and Local Scope in JavaScript --------------


// let a=10;
// const b=20;
// var c=30;
var c = 600;
if(true){
  let a=40;
  const b=50;   // whose variable write in curly brases they are called the scope variable 
  var c=60;

}

//console.log(a);
//console.log(b);
//console.log(c);


let num1 = 20;

if(true){
  let num1 = 50;
  const num3 = 60;
  //console.log("INNER:",num1)
}

//console.log("OUTER:",num1)

// if we run any commond in console and node (terminal) method 
// then both are different output for local and globle variables.


//   ---------- Nested Scope -----------


function one(){
  const username = "Rahul";
  function two(){
    const website = "Youtube"
    //console.log(username);
  }
     //console.log(website);
   two()
}

//one()

if(true){
  const username = "Rahul"
  if(username === "Rahul"){
    const website = " Youtube"
   // console.log(username + website);
  }
  // console.log(website);
}
//console.log(username);


// ++++++++++++++++ Important Concepts +++++++++++

function addone(num){      // function
 // return num+1;
}

//addone(5)

const addTwo = function(num){     // it is also a function
  //return num+2;

}

//addTwo(5)


// ---------- Arrow Function --------------

const user = {
    username:"Rahul",
    price:999,

    welcomeMessage: function(){
       // console.log(`${this.username}, welcome to website`);
       // console.log(this);
    
    }

}
 
//user.welcomeMessage()
user.username = "Rahul Maurya"
//user.welcomeMessage()

//console.log(this);

// function chai(){
//   let username = "Rahul"
//     console.log(this);

// }

// chai()


 const chai = () => {
    let username = "Rahul"
   // console.log(this);
 }

 //chai()

//  Arrow Function-> syntax= () => {}

// const addTwo_ =(num1, num2) => {
//        return num1+num2;
  
// }
// console.log(addTwo_(5,3))

//const addTwo_ =(num1, num2) =>   num1+num2;
 
//const addTwo_ =(num1, num2) =>   (num1+num2);

//const addTwo_ =(num1, num2) => {username: "Rahul" }       //-> did not get the output

const addTwo_ =(num1, num2) => ({username: "Rahul" })     //   it's provide a output

//console.log(addTwo_(5,3))

// if we use carly brases then we write the return(*) statement
// if we use parenthesis then we not write the return statement




//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
  // named IIFE
  // console.log(`DB CONNECTED`);
})();

( () => {
  //console.log(`DB CONNECTED ${name}`);
})("Rahul") 


// ------------JavaScript Execution Context -----------------

//   1. {} -> Globaal Execution Context -> Memory Creation Phase/ Creation Phase
//   2.    -> Function Execution Context
                                        // -> Execution Phase

//     ->Globle Execution -> this




// -------> Control flow in javaScript <------------


const temperture = 41;

if(temperture < 50){
    //console.log("temperture is less than 50")
}else{
   //console.log("temperture is gratter than 50")
}

const score =200;

if(score>100){
  const power = "fly"
  //console.log(`User power: ${power}`)
}
//console.log(`User power: ${power}`)   // it is not executed because power is not define in outside -> 
                                      // it is define in inside the curly brasis 


// const balance =1000

// if(balance > 500) console.log("test") ;    //it is emplysit scope

const balance = 1000;

// if(balance < 500){
//   console.log("less than 500")
// }else if(balance < 750){
//   console.log("less than 750")
// }else if(balance < 900){
//   console.log("less than 900")
// }else{
//   console.log("less than 1200")
// }


const userLoggedIn = true;
const debitCard = true; 
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if( userLoggedIn && debitCard && 2==2){
// console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
 // console.log("User logged in from google or email");

}

// --------> Switch statement <---------

// const month = 3;

// switch(month){
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

// ----------> Truthy Values Falsy Values <---------

const userEmail = "r@rahul.com"

if(userEmail){
    //console.log("Got user email");
}else{
  //console.log("Did not get user email");

}

// falsy values    -> false ,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values    -> "0","false"," ",[],{}, function(){}

// if(userEmail.length === 0){
//   console.log("Array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0)
// {
//   console.log("Object is empty");

// }  


//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
 //val1 = 0 ?? 10;
 //val1 = null ?? 10;
 //val1 = undefined ?? 10;
 //val1 = null ?? 10 ?? 20
//console.log(val1);

// -------> Terniary Operator <--------

//condition ? true : false;

// const iceTeaPrice = 100;

//      iceTeaPrice >= 80 ? console.log("less than 80") : console.log
//      ("greater than 80");


//  -----------> For loop with break and continue in JavaScript <-------------

// for (let index = 0; index < 10; index++){
//      const element = index;
//      if(element == 5){
//       //console.log("5 is best number");
//      }
//     // console.log(element);
// }

// for(let i=1; i<=10; i++){
//   console.log(`Outer loop: ${i}`)
//   for(let j=1; j<=10; j++){
//       //console.log(`Inner loop: ${j} and inner loop ${i}`)
//       console.log(i + "*" + j + "=" + i*j)
//   }
// }


let myNewArray1 = ["Rahul", "Maurya","Jaunpur","Kanpur"]

for(let index = 0; index < myNewArray1.length; index++){
  const element = myNewArray1[index];
 // console.log(myNewArray1.length);
 // console.log(element);

}

// ---------> break and continue <-----------

// for(let i=1; i<=10; i++){
//    if(i == 5){
//     console.log(`Detected 5`);
//     continue;
//     //break;
//    }
//   console.log(`Value of element is ${i}`);
// }



//  ---------------->While loop and DoWhile loop <------------------

let index = 0;
while( index <= 10){
  //console.log(`Value of index is ${index}`);
  index = index + 2;
  //index++;

}

let Array2 = ["Rahul","Maurya","Jaunpur","Kanpur"]

let arr=0;
while(arr < Array2.length){
  //console.log(Array2[arr]);
  arr++;

}

//  dowhile ->

let marks= 11;
do{
  // console.log(`Marks is ${marks}`);
   marks++;
}while(marks <= 10);