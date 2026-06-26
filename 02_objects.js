// const tinderUser = new object () // singleton object hai ye
const tinderUser = {}

tinderUser.id = "BP69"
tinderUser.name = "suino"
tinderUser.isloggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"lala",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

// combine 2 objects
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj3 = Object.assign({}, obj1, obj2)// {} target hai usme add hoti hai, varna sab obj1 me add hota hai
// const obj3 = {...obj1,...obj2} // "BEST METHOD"
console.log(obj3);

// how to use keys and values of a object, out is in arrays
console.log(Object.keys(tinderUser));
// to print key value pairs
console.log(Object.entries(tinderUser));
// how to check weather properties exists or not
console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course = {
    courseName : "JS",
    courseInstructor : "Hitesh",
    price : "999",
}

const {courseInstructor: teacher} = course
console.log(teacher);