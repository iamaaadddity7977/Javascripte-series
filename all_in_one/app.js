console.log("HELLO");
const accountId = 10139473;
let accountEmail = "abc@gmail.com";
var accountPasswaord = "123456";

accountCity = "Delhi";

// accountId = 2; not allowed

accountEmail = "abcd@gmail.com";
accountPasswaord = "123996";
accountCity = "goa";
let accountState;

/*  prefer not to use var 
because of issue in block scope and function scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPasswaord, accountCity, accountState]);

// ?02_datatype

// "use strict"; // treat all js code as new
console.log("hii");


let name = "Aditya";
let age = 18;
let userId = "ad123";

// number => 2 to the power 53
// bigint 
// string => ""
// boolean = true/false
// null = standaline value
// undefiend =
// symbol = unique

// object
console.log(typeof null);
console.log(typeof undefined);

// ? 03_conversion Operation

let score = "38aaa"

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score);
console.log(typeof valueNumber);
console.log(valueNumber);

// "38" => 38
// "38" => NaN
// true => 1 ; false => 0


// hum log yaha pe number ko string ki tarha rakha hai but type of mein nuber hi dikhata hai
// jaise hi let value liya wow number mein conver hogya NaN 

let isLoggedIn = "aaa"  //0 "" false  true 
let booleanIsLoggingIn = Boolean(isLoggedIn)
console.log(booleanIsLoggingIn);

// 1 = true : false = 0
//  "" = false
//  "aaaa" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ***************************Operations********************************

let value = 3
let nevValue = -value
console.log(nevValue);

let str1 = "Hello";
let str2 = " World!";
let str3 = str1 + str2;

console.log(str3);

console.log(3 + 3);
console.log(3 + "3");
console.log("3" + 3);
console.log(3 + 3 + "3");
console.log("3" + 2 + 2);
console.log(2 + 2 * 4 / 2);

// let num1=num2=num3 ;

let a = num1 = num2 = num3 = 2 + 2;
console.log(a);

let countnum = 100;
++countnum;
console.log(countnum);

//  prefix and suffix in js

// ? comparision 

console.log("2" > 1);
console.log("2" < 1);


console.log(null > 1);
console.log(null == 1);
console.log(null >= 0);

console.log(NaN >= 0);

console.log("2" === 1);

// datatypes summary 

// ? Premitive

// 7 types :> string , boolean , null , undefined, number, BigInt, symbol.

// ? Reference (Non Primitive)
// Array, Object, Functions

// JavaScript is a dynamically typed language, which means that the
//  interpreter assigns a type to variables at runtime based on the
//   variable's value at the time. This means that variables can hold
//    values of different types during runtime, and you don't need to 
//    explicitly declare the data type of a variable.

const myf = function () {
    console.log("HII");
}
// console.log(myf);

// ? two type of memoray
// stack (primitive),  Heap (Non primitive) array,object, function


let myY = "hhh";
let an = myY;
an = "nnn";
console.log(myY);
console.log(an);

let userone = {
    email: "abd@gmail.com",
    upi: " aaa"
}

let userTwo = userone;

userTwo.email = "aa@gmail.com";

console.log(userone.email);
console.log(userTwo.email);

// ? String lecture no 11

const nam = "Aditya";
const ag = 18;

console.log(nam + ag);

console.log(`My name is ${nam} my age is ${ag} `);

const gameName = new String("Aditya");
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // aipha bat dikhana hai
console.log(gameName.indexOf('A')); //position batata hai
console.log(gameName.charCodeAt());

console.log(gameName.substring(1, 5));
console.log(gameName.slice(0, 2));
// trim space remove karne ke liye kaam aata hai
// replace bhi koi replace ker new add karne ke liye kaam aata hai
// includes koi chiz check karne ke liye kaam aati hai 
// split changes ke liye kaam aate hai


//? Number and Maths

const scores = 94;
console.log(scores);

const balance = new Number(94.7264);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(4));
console.log(balance.toPrecision(4));

let hunders = 1000000;
console.log(hunders.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++=

console.log(Math);
console.log(Math.abs(-94));
console.log(Math.round(94.1156));
console.log(Math.ceil(94.1156));
console.log(Math.floor(94.1156));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8));
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

console.log("Imp formula");

let max = 20
let min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// ? Dates  lecture 13
let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array in JavaScript

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
// console.log(myArr.toString());
console.log(myArr.join());
console.log(typeof myArr);
console.log(myArr.includes(22));
console.log(myArr.indexOf(22));


const myHeors = ["IronMan", "hulk", "superMan", "loki"]
console.log(myHeors);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2);

// ? push aad form last
// ? pop delete form lst
// ? unShift add form Start
// ? shift remove form starting
// ? slice limit to add (start,end);
// ? splice (start,end) remove kar ke bacha hua wapas karta hai

console.log(myHeors.slice(0, 3));
console.log(myHeors.splice(0, 3));
console.log(myHeors);

// lecture 15
//  concat

console.log(myArr2.concat(myArr));


const d = [...myArr2, ...myArr]
console.log(d);


// ? flat

let Arry3 = [1, 2, 3, 4, [9, 8, 7, 6, [1, 2, 3, 4]]];

let realArry3 = Arry3.flat(2);
console.log(realArry3);

// of arry addd kar sakte hai 
// form 
// isArray


// ? lecture no 17
//  singleton
//  boject.craete

// ?object literals 

const mySym = Symbol("MyKey1");


const JsUser = {
    Name: "Aditya",
    Age: 18,
    course: "B.Tech",
    started: 2024,
    [mySym]: "MyKey1",
}
console.log(JsUser);
console.log(JsUser["Age"]);    //2nd method  key ko string ke jaisa leta hai harbar

console.log(JsUser.Age);


// Q

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.Age = 21;

// Object.freeze(JsUser)

JsUser.email = 22;
console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.Name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// ? lecture no 17

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

console.log(tinderUser);

// Nesting 

const reguleaUser = {
    email: "some@gamil.com",
    fullName: {
        UserFullName: {
            firstName: "Aditya",
            lastname: "Yadav",
        }
    }
}

console.log(reguleaUser.fullName.UserFullName);
// console.log(reguleaUser.fullName.UserFullName.firstName);


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const obj3 = { e: 5, f: 6 }
const obj4 = { g: 7, h: 8 }
const obj5 = { i: 9, j: 10 }

// const obj1 = {a:1 , b: 2}
// const obj2 = {a:3 , b: 4}
// const obj3 = {a:5 , b: 6}
// const obj4 = {a:7 , b: 8}
// const obj5 = {a:9 , b: 10}

// console.log( obj1, obj2, obj3, obj4, obj5);
// const obj6 = [obj1, obj2, obj3, obj4, obj5];
// const obj6 = Object.assign({}, obj1, obj2, obj3, obj4, obj5) 
const obj6 = { ...obj1, ...obj2, ...obj3, ...obj4, ...obj5 };

console.log(obj6);

const users = [{
    id: 1,
    Emails: "a345@gmail.com"
}, {
    id: 1,
    Emails: "a345@gmail.com"
}, {
    id: 1,
    Emails: "a345@gmail.com"
}, {
    id: 1,
    Emails: "a345@gmail.com"
},
]

console.log(users);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(obj6.hasOwnProperty('a'));


// ? lecture no 18 

// object de-structur JSON API 

const course = {
    courseName: "Js In Hindi",
    price: 9999,
    Teacher: "Hitesh Sir"
}

// console.log(course.Teacher);  suppose we have to call many time then we have  a different way 
// ? {} => de-structure     

const { Teacher: youtuber } = course
console.log(youtuber)

//  lecture no 19 

// ? Function
// console.log("A");
//     console.log("D");
//     console.log("I");
//     console.log("T");
//     console.log("Y");
//     console.log("A");
//     console.log("V");
//     console.log("V");


function sayMyname() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("V");
    console.log("V");
}

sayMyname();

// function addTwonumber(num1, num2){
//     console.log(num1+num2);
// }

function addTwonumber(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwonumber(5, 5)

console.log("Result =", result)

// function logInUserMessage(username){
//     if(!undefined){
//          console.log("Please Enter Your logging Id")
//          return
//     }
//         return `${username} just logged in`;

// }
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("Aditya"));
console.log(loginUserMessage(""));


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// ? lecture 21 

// ? scope let const var

// example

// let A = 10;
// let B = 20; 
let C = 300;    //?global

if (true) {
    let A = 10;
    const B = 20;
    C = 30;          //?block scope 

}

// console.log(A);    //show nhi karega
// console.log(B);    //show nhi karega
console.log(C);
// https://www.google.com/search?q=block+scope&rlz=1C1CHBD_enIN1028IN1029&oq=block+scope&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDY2NzBqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8#vhid=5C1RCcoqxhe4GM&vssid=l

let s = 300;

if (true) {
    let s = 30;
    console.log("Inner value", s);
}
console.log("Outside the Block", s)

let array = 7;
// let element= 8;
// let i = 5;

// for (let i = 0; i < array; i++){
//     const element = array[i];
//     console.log(array);
// }


// ? lecture no 22

function one() {
    const UserName = "Aditya"
    console.log(UserName);

    function two() {
        const website = "Youtube"
        // console.log(website);
        console.log(UserName);
    }
    // console.log(website)
    two();     //? bahar recall karna padhta hai function ke bahar
}
one();     //?  bahar recall karna padhta hai function ke bahar

if (true) {
    const userName = "Hello"
    if (userName === "Hello") {
        const Website = " World!"
        console.log(userName + Website);

    }
    // console.log(Website);    //? printe nhi hua

}
// console.log(userName);   //? printe nhi hua


// ?   ________________________________________________________________-Interesting____________________________________________________________________________

console.log(addone(5));


function addone(Num) {
    return Num + 1;
}
console.log(addone(5));

// console.log(addtwo(6));     //? run nhi hua


const addtwo = function (Num) {
    return Num + 2
}

console.log(addtwo(6));

// ? Lecture no 23

// this abd arrow function

const User = {
    custmor: "Aditya",
    amount: 94,

    welcomeMessage: function () {
        console.log(`${this.custmor} , Welcome to website`);
        console.log(this);
        //    console.log(`${this.amount} , Welcome to website`);
    }
}
User.welcomeMessage();
User.custmor = "vinita";
User.welcomeMessage();

// console.log(this);

// const chai = function(){
//     useme: "hello",
//     console.log(this.useme);   aisa use nhi kar sakte 
// }
// chai();
// const chai = function(){

//     console.log(this);    //kuch window ki property deta hai phle se
// }
// chai();

// ? arrow 

const chai = () => {
    useme: "hello",
        console.log(this);    //kuch window ki property deta hai phle se
}
chai();



// const threenum = (NUM1 , NUM2, NUM3) => {
//     return NUM1 + NUM2 + NUM3
// }

// const threenum = (NUM1 , NUM2, NUM3) => NUM1 + NUM2 + NUM3

const threenum = (NUM1, NUM2, NUM3) => (NUM1 + NUM2 + NUM3)

// threenum(2,3,4)
console.log(threenum(1, 3, 6));

//? lecture no 24 

const l = "helloworld"
console.log(l.length);  // count length property aise hi

//? IIFE  immedaitely  invoked funnction expressions

(function chai() {
    //named IIFE
    console.log(`IIFE`)
})();
// meaning of IIFE global ko pollution promble hoti hai isliye IIFE ka use hota hai   IIFEs prevent pollution of the global JS scope


(() => {
    console.log(`Example Two`)
})();


((name) => {
    //simple IIFE
    console.log(`Example Two ${name}`)
})("Aditya");


// ****************************************************lecture No 24
//? Execute code & call stack
// https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25       Notes inn the video 
// file:///C:/Users/sarry/Downloads/Aditya/All in one/tutorial.html

let val1 = 5
let val2 = 10

function addition(NuM1, NuM2) {
    let total = NuM1 + NuM2
    return total;
}

let result1 = addition(val1, val2)
console.log(result1);
let result2 = addition(10, 3);
console.log(result2)

// file:///C:/Users/sarry/Downloads/Aditya/All in one/tutorial.html

// call Stack  Example 

function one() {
    console.log("one")
    two()

}
function two() {
    console.log("two")
    three()

}
function three() {
    console.log("three")
// one()  can,t do infinite 

}
one()
// two()
// three()

//push on Git hub
// *************************************************************lecture No 25
//?
//? Execute code & call stack
// https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25       Notes inn the video 
// file:///C:/Users/sarry/Downloads/Aditya/All in one/tutorial.html

let val1 = 5
let val2 = 10

function addition(NuM1, NuM2) {
    let total = NuM1 + NuM2
    return total;
}

let result1 = addition(val1, val2)
console.log(result1);
let result2 = addition(10, 3);
console.log(result2)

// file:///C:/Users/sarry/Downloads/Aditya/All in one/tutorial.html

// call Stack  Example 

function one() {
    console.log("one")
    two()

}
function two() {
    console.log("two")
    three()

}
function three() {
    console.log("three")
    // one()  can,t do infinite 

}
one()
// two()
// three()

// *************************************************************lecture No 26 *******************************************************************
//? control flow inn JS
// HEllo world  kksknkfkllvvadd

// ? if 

const isUserloggedIn = 4
const temp = 41

if (temp >= 83) {   //is  line  ka temp se comparions hota eg 83 jo hai wow 41 badha hai >=
    console.log("Temperature is Less Then 50");
} else {
    console.log("Temperature is Greater Then 50");

}
console.log(isUserloggedIn != temp)  // best example to understand all this symbols meaning

// ?  <, >, <=, >=, ==, ===, !=, ===, !==

const sco = 200

if (sco > 100) {
    const Power = "fly"
    console.log(`User Power:${Power}`);
}

// console.log(`User Power:${Power}`);   

//line ke bahar power define nhi aaega because global ke bahar axis nhi raheta isliye 
//   const or let use karte hai but var mein wapas declear hojata hai jo nhi hona chahiye


// let j = 10;
// for (let i = 0; i <= j; i++) {
//     let st = "  ";
//     let sss= " *"
//     console.log(sss.repeat(i)+ st.repeat(i));
// }

// ? shorthand notation 

const balances = 1000;
//  if(balances > 500) console.log("test"),console.log("test2");   //?aisa nhi karna hai

if (balances < 500) {
    console.log("balance is less than 500");
} else if (balances < 700) {
    console.log("Balance is less than 700");
} else if (balances < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}

// ?else if last mein use karna hai toh <<< ; >>> use karna padhta hai

// if(balances < 500){
//     console.log("balance is less than 500");
// } else if(balances < 700){
//     console.log("Balance is less than 700");
// }else if(balances < 900){
//     console.log("Balance is less than 900");
// }else if(balances == 1000);{
//     console.log("Balances is 1000 rupes");
// }
// ? else();{} use kar sakte ho

const userLoggedIns = true;
const debitCards = true;
const loggedInFormGoogles = false;
const loggedInFormEmails = true;

if (userLoggedIns && debitCards) {
    console.log("Allow to Buy Course");
}

if (loggedInFormGoogles || loggedInFormEmails) {
    console.log("User Logged In");
}

// ? && >> and  || >> or

// Switch  value check karne ke liye kaam aata hai

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


let month = 3;

switch (month) {
    case 1:
        console.log("Given Month is January")
        break;
    case 2:
        console.log("Given Month is February")
        break;
    case 3:
        console.log("Given Month is March")
        console.log("Birthday of V")
        break;
    case 4:
        console.log("Given Month is April")
        break;

    default:
        console.log("Default Case Match");

        break;
}
// we can use string values 

// ? Topic >> Truthy/falsy values

const userGmail = "adi@gamil.com"       // [] >> toh bhi usergmail leleta  hai and "" ko empty dikhata 

if (userGmail) {
    console.log("Got UserGmail");
} else {
    console.log("Don't have user  gmail");
}


// ? Falsy values
// false, 0, -0, BigInt 0n, null,  undefined, NaN

// ? truthy values
//"0", 'false', " ", [], {}, function(){}, etc.

const UserS = []

if (UserS.length === 0) {
    console.log("Empty Array");
}

// ? imp

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("empty Object")
}

//? Question

// false == 0
// false == ''
// 0 == ''

// Nullish coaleshing operater (??): null undefiend

val1;
// val1 = 5 ?? 10;     //5
// val1 = null ?? 10;   //10
// val1= undefined ?? 100  //100
// val1 = null ?? 13 ?? 10; //13

console.log(val1)  //uper se utha raha hai values 5 because same val1 use kiya hai


// ? Terniary Operator
// condition ? ture : false

const ice = 100;
ice <= 80 ? console.log("Ice is less than 80") : console.log("Ice is More than 80")


// ?iterations 

//  for 

for (let index = 0; index <= 5; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is a odd number");
    }
    console.log(element);

}

for (let i = 0; i <= 5; i++) {
    console.log(`outer loopp value: ${i}`)
    for (let j = 0; j <= 5; j++) {
        // console.log(`inner loop value ${j}`)        
        // console.log(`inner loop value ${j} and inner loop ${i}`) 
        // console.log(i + '*' + j + ' = ' + i*j)       
    }

}

let myArray = ["Vinita", "Aditya", "Aanchal"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

// ? break and continue


for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is detected");
        break   //continue
    }
    console.log(`number print till : ${element}`);

}

// ? *****************************************************************lecture no 28 Loops*********************************************

// while (condition) {
    
// }

let index = 0;
while (index <= 10) {
    console.log(`Table of two: ${index}`)
    index = index + 2;
}


let av = ["Vinita", "Aditya", "Vinu", "Adi"]

let arrr = 0;

while (arrr < av.length) {
    console.log(`We are there ${av[arrr]}`)
    arrr = arrr + 1;
}







// *************************************************************lecture no 30
//? Filter map Reduce 

const coddding = ["Aditya", "Ironman", "Hulk", "Superman", "spiderman"];

const someValues = coddding.forEach(  (items) => {
    //console.log(items)   //use karke truy kiya hai for each ke liye kisi bhi variable mein store karke denkha value return nhi karega
    return items;
}  )

console.log(someValues);   // ek undefiend value return karega  last mein  for each koii bhi value return nhi karta 

//? filter 

const MYNum = [0,1,2,3,4,5,6,7,8,9,10];

// const MYNumCall = MYNum.filter(  (num)  => num > 5);
const MYNumCall = MYNum.filter(  (num)  =>  {
           return num > 5;
});
console.log(MYNumCall);





