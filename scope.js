let a = 300 // this global scope
if (true) {
    let a = 10 
    const b = 20
    // console.log("In block a : ",a) // ye hai block scope
}
// console.log(a);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()