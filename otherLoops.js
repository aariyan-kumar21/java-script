// For of loop
const arr = [1, 2, 3, 4, 5];
for ( const num of arr){
    console.log(num);
}

//Maps
const map = new Map();
map.set('IN',"India")
map.set('US',"United states")

for(const [key, value] of map){
    console.log(key,": ",value); 
}

const lang = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    Swift: "Swift by apple"
}
for(const key in lang){
    console.log(`${key} shortcut is for ${lang[key]}`)
}

const coding = ["react", "on rails", "java", "Python"]

// coding.forEach( function (item) {
//     console.log(item)
// })
// coding.forEach((item)=>{
//     console.log(item)
// })

coding.forEach((item, index,arr)=>{
    console.log(item, index, arr)
})

const myCoding =[
    {
        language: "JavaScript",
        framework: "React"
    },
    {
        language: "Python",
        framework: "Django"
    },
    {
        language: "Java",
        framework: "Spring"
    }
]

myCoding.forEach((item) =>{
    console.log(item.language, item.framework)
})