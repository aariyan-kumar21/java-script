let a = 300 // this global scope
if (true) {
    let a = 10 
    const b = 20
    console.log("In block: ",a) // ye hai block scope
}
console.log(a);
