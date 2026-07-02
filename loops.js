// for(let i = 0; i <= 3; i++) {
//     console.log(`the value of outer loop is: ${i}`);
//     for(let j = 0; j <= 3; j++) {
//         console.log(j);
//     }
// }

let arr = ["batman", "superman", "wonder woman"];
for (let i = 0; i< arr.length; i++){
   // console.log(arr[i]);
}

for(let i = 1; i<=6;i++){
    if(i==3){
        //console.log(`detected 3`);
        continue
    }
    //console.log(`value of i is ${i}`);
    
}

let heros = ["ironman","spiderman"]
let i = 0 // do not use const for i values it gives error
while(i < heros.length){
    console.log(`character name : ${heros[i]}`);
    i++
}