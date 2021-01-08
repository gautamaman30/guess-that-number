const num = Math.floor(Math.random()*100)+1;
let check = false;
let chances = 10;
let prevGuesses = '';


let prevGuessesEl = document.getElementById('previous-guesses');
let guessResultEl = document.getElementById('guess-result');
let chancesLeftEl = document.getElementById('chances-left');
const form = document.getElementById('game-form');
form.addEventListener('submit', startGame);


function startGame(event){
  event.preventDefault();
  if(check || chances <= 0) {
    location.reload();
    return;
  }
  let guess = document.getElementById('guess').value;
  chances-=1;
  if(isNaN(parseInt(guess))){
    prevGuesses += ' NaN';
    guessResultEl.textContent = 'WRONG';
    prevGuessesEl.textContent = 'previous guesses: ' + prevGuesses;
    chancesLeftEl.textContent = 'chances left: ' + chances;
  }
  else{
    guess = parseInt(guess);
    prevGuesses += ` ${guess}`;

    if(guess === num) {
      guessResultEl.textContent = 'You Won';
      prevGuessesEl.textContent = '';
      chancesLeftEl.textContent = '';
      check = true;
      gameOver();
    }
    else{
      if(guess < num) guessResultEl.textContent = 'You guess was Too Low';
      else guessResultEl.textContent = 'You guess was Too High';
      prevGuessesEl.textContent = 'previous guesses: ' + prevGuesses;
      chancesLeftEl.textContent = 'chances left: ' + chances;
    }
  }
  form.reset();
  if(chances <= 0) gameOver();
}


function gameOver(){
  let div = document.createElement('div');
  div.className = "restart-box";
  let restartButton = document.createElement('button');
  let att = document.createAttribute('type');
  att.value = "submit";
  restartButton.textContent = 'Play Again';
  restartButton.setAttributeNode(att);
  div.appendChild(restartButton);
  document.body.appendChild(div);
  restartButton.addEventListener('click', restartGame);
}

function restartGame(){
  location.reload();
  return;
}
