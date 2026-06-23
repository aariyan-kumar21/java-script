const arr =[1,2,3,4,5]
arr.push(6)
arr.pop() // last value is removed
arr.unshift(0) // adds value to the beginning
arr.shift() // removes first value
console.log(arr)

// array ko string banadeta hai
const newArr = arr.join()
console.log(newArr) // returns a string of the array values separated by commas
console.log(typeof newArr)

// slice 
const myArr = [0,1,2,3,4,5]
console.log("A",myArr)
console.log(myArr.slice(0,2))
console.log(myArr)

// splice
console.log("B",myArr)
console.log(myArr.splice(0,2)) // ye original array me se hi remove kar deta hai
console.log(myArr)

// push new array to existing array
const marvel_heroes = ["Ironman","Thor","Captain America"]
const dc_heroes = ["Batman","Superman"]
const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes)

// can also use push to do the same but array will be nested
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // nested array

let actors = ["Robert Downey Jr.","Chris Hemsworth"]

// but there is a better way to do this using spread operator
marvel_heroes.push(...dc_heroes,...actors) // instead of array elements are pushed, better bcz you can push multiple arrays at once
console.log(marvel_heroes);

const fake_array = [1,2,3,[4,5],[6,7,[8,9]]]
const real_array = fake_array.flat(Infinity) // flattens the array to a single level
console.log(real_array);

// convert string to array
console.log(Array.isArray("world")) 
console.log(Array.from("world"))

// convert array to string
const fruit = ['apple','banana']
console.log(fruit.toString())