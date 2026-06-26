// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Chagan",
    "full name" : "Chagan lal",//console.log(jsUser["full name"]) only way to access this type
    age : 18,
    location : "jaipur",
    email : "chalag@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"],

    // how to use symbol
    [mySym] : "mykey1",
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// how to overwrite
jsUser.email = "lala chagan@email.com"
// Object.freeze(jsUser) // now you can not change anything
// console.log(jsUser)

// add function in objects

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`)

}

console.log(jsUser.greetingTwo())