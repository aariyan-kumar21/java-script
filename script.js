// ---- variabel declaration ----

console.log("Hello, World!");
const accountId = 1234;
let gmailId = "user@gmail.com";
let accountstate;
accountMail = "me@gmail.com";
console.table({accountId, gmailId, accountstate, accountMail});

// var is not used. let and const are instead.

// alert("hello") doesn't work in node it only works in brower.

// ---- data types ----

let score = "12";
console.log(typeof score);

let valueInnumber = Number(score);
console.log(typeof valueInnumber);
console.log(valueInnumber);

let val = "abc123";
let valNum = Number(val);
console.log(typeof valNum);
console.log(valNum); // not a number bcz na vo number, words hai to num me convert nahi hoga.

// 1 is True ; 0 is False 
// "" is False ; "abc" is True
// null is false ; undefined is false ; Nan is false

// ---- operations ----

let str1 = "Hello";
let str2 = "world";
let str3 = str1 + " " + str2;
console.log(str3);

//  === is used for checking value and type both are same or not.

// Primitive data types are immutable.(String,Number,Boolean,null,undefined,symbol,BigInt)

// Non-primitive data types are mutable.(Object,Array,Function)

let one = 1
let two = one;
two=2;
console.log(one, two); // Primitive me origin me changes nahi hote bcz Primitive Stack use karta hai or uss me second variable ko original ki copy milti hai 

let userOne = {
    email: "user@gmail.com",
    upi:"user@sbi"
}
let userTwo = userOne
userTwo.email = "its your baadsha"
console.log(userOne,userTwo); // bcz non primitive hai and non primitive heap use karta hai and uss me reference original hi hota hai copy nahi, hence dono change hote hai