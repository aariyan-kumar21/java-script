## Project 1
``` text
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

## Project 2
``` text
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
    results.innerHTML = `<span>${bmi}</span>`
  }  
});
```