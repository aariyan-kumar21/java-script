// Functions ko jaldi execute karne ke liye use hota hai
(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})();

((name) => {
    // simple IIFE
    console.log(`${name} drinks coffee`);
})("aariyan");