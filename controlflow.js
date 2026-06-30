const userLoggerIn = true
const debitCard = true

// check 2 statements "&"
if(userLoggerIn && debitCard) console.log("allow to shop");

// check multiple conditions "|| or hai ye"

const loggedInFromGoogle = true
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) console.log("user logged in")

const month = 3
switch(month){
    case 1:
        console.log("January")
        break;
    case 1:
        console.log("feb")
        break;
    case 1:
        console.log("mar")
        break;
    default:
        console.log("kuch bhi") 
        break;   
}

// let email = "ak@code.ai" 
let email = " " // ye bhi assumed hai ki true hai
if(email){
    console.log("Logged in"); // ye print hoga bcz ye assume kiya jata hai ki email hai this is know as truthy
} else{
    console.log("chal bsdk");   
}

// falsy value 
// false, 0, -0, BigInt, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", {}, [], function(){}

// nullish coalescing Operator(??): for null and undefined only
// some times backend give you null value to not affect the code backup value is defined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
console.log(val1);

// Terniary operator
// condition ? true : false

const iceTeaPrice = 80
iceTeaPrice <= 100 ? console.log("less than 100") : console.log("more than 100");