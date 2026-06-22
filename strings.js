// ---- Strings ----

const name = "chai";
const price = 10;

console.log(`${name.toUpperCase()} pilo guys ${price} rupe ki.`);
console.log(name.charAt(2));
console.log(name.indexOf('c'));

let naam = "Aariyan";
console.log(naam.substring(0,3));
console.log(naam.slice(-7,-4));
console.log(naam.includes("Aariyan"));
console.log(naam.split("a"));

// ---- Numbers and Maths ----

const score = 400;
console.log(score);

const balance = new Number(10000000);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toLocaleString('en-IN'));

// ---- Maths ----
console.log(Math.round(4.7))
console.log(Math.ceil(4.5))
console.log(Math.random()) // value bwtween 0 - 1 is displayed. if you want anything above it multiply it

// ---- Dates ----

let myDate = new Date()
console.log(myDate.toLocaleString())
console.log(typeof myDate);
console.log(myDate.getMonth());
