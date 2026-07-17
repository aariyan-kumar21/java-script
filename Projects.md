## Project 1 solution code
There were 4 buttons with different colours so when you click on a button what ever the colour that button has the background would turn into that colour.
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
A form will collect your basic details and calculate your BMI (Body Mass Index) and also check the range of the BMI and Returns BMI and range like under Weight, normal or over Weight.
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
A Digital clock shows accurate time according to your time zone.
```javascript
const clock = document.getElementById("clock");

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project 4 solution code
A simple game where you have 10 guesses and you have to guess a number between 1 - 100.
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ""
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id = "newGame">Start new game</2>'
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}
```
# Project 5 Solution code
Displays which key is pressed on the keyboard
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```

# Project 6 Solution code
Changes the color of the background constantly when start button is clicked and stops when stop is clicked
```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
