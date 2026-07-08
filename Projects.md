## Project 1 solution code
``` javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
  });
});
```

## Project 2 solution code
``` javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height < 0 ||isNaN(height) ){
    results.innerHTML = "Enter a valid Height"
  }
  else if (weight === '' || weight < 0 || isNaN(weight) ){
      results.innerHTML = "Enter a valid Weight"
    }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    if(bmi <= 18.6){
      results.innerHTML = `${bmi} <br> Your are under weight`
    } else if (bmi > 18.6 && bmi <= 24.9){
      results.innerHTML = `${bmi} <br>  Your bmi is normal`
    } else{
      results.innerHTML = `${bmi} <br>  Your over weight`
    }
  }  
});
```

## Project 3 solution code
```javascript
const clock = document.getElementById("clock");

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```