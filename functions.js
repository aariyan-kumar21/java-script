function sayMyname(){
    console.log("Honey Singh");
    
}

// sayMyname() // to call

function addTwoNumbers(number1,number2){ 
    let result = number1+number2
    return result
    // console.log("yoyo");// ye print nahi hoga after reture kuch print nahi hota
    
}
// addTwoNumbers(3,"A")// values are called arguments

const result = addTwoNumbers(3,5)
console.log("Result : ",result);

// if you are not sure kitne parameter hone chahiye use ... vo array me aata rehta hai
function calCulateCartPrice(...num1){
    return num1
}
console.log(200,400,500)

// How to use object in function
const user = {
    username :"hitesh",
    price:199
}

function handleObjects(anyobjects){
    console.log(`username is ${anyobjects.user} and price is ${price}`)
}
handleObjects(user)

// direct bhi pass ho sakta hai without creating object
/*
handleObject({
    username:"sam",
    price:399
})
*/