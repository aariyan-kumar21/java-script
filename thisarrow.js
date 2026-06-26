const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        //console.log(`${this.username},welcome to website`);
        // console.log(this); pura block a content print hoga
        
    }
}
user.welcomeMessage()
// this ko print bhi kara sakte ho
// console.log(this); // empty print hoga bcz context nahi hai ispe

// function chai(){
//     let username = "hitesh"
//     console.log(this.username) // function me this kaam nahi karta
// }


// arrow function
const chai = () =>{
    let username = "hitesh"
    // console.log(this)
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

// another way
const addTwo = (num1,num2) => (num1+num2) // () is wrap karlo return nahi likhna padhta
console.log(addTwo(3,4));
