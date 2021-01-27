const newGameBtn = document.getElementById('new-game-btn');
const newGameModal = document.querySelector('.new-game-modal');
const backdrop = document.getElementById('backdrop-modal');
const p1colour = document.getElementById('p1col');
const p2colour = document.getElementById('p2col');
const p1name = document.querySelector('.p1nameSelect');
const p2name = document.querySelector('.p2nameSelect');
const start = document.querySelector('.start-btn');
const player1Name = document.querySelector('.play1');
const player2Name = document.querySelector('.play2');
const player1NameInput = document.querySelector('.p1Name');
const player2NameInput = document.querySelector('.p2Name');

let winner;
let p1;
let p2;
let playerTurn;

p1colour.addEventListener('focusout', () => {
  p1name.style.color = p1colour.value;
});
p2colour.addEventListener('focusout', () => {
  p2name.style.color = p2colour.value;
});
newGameBtn.addEventListener('click', () => {
  newGameModal.classList.remove('hide');
});

start.addEventListener('click', startGame);

function startGame() {
  if (player1NameInput.value === '' || player2NameInput.value === '') {
    return;
  } else {
    newGameModal.classList.add('hide');
    player1Name.textContent = player1NameInput.value;
    player2Name.textContent = player2NameInput.value;
    player1NameInput.value = null;
    player2NameInput.value = null;
    player1Name.style.color = p1colour.value;
    player2Name.style.color = p2colour.value;
    playerTurn('START');
  }
}

function playerTurnCheck(turn) {
  if (turn === 'START') {
    const turn = Math.floor(Math.random() * 100);
    if(turn % 2 === 0){
      playerTurn = 'P1';
    } else {
      playerTurn = 'P2';
    } 
    } else {
      if (playerTurn === 'P1'){
       playerTurn = 'P2' 
      } else {
        playerTurn = 'P1'
      }
  }
}

function winnerCheck() {
  if (
    (a === 'X' && b === 'X' && c === 'X') ||
    (d === 'X' && e === 'X' && f === 'X') ||
    (g === 'X' && h === 'X' && i === 'X') ||
    (a === 'X' && d === 'X' && g === 'X') ||
    (b === 'X' && e === 'X' && h === 'X') ||
    (c === 'X' && f === 'X' && i === 'X') ||
    (a === 'X' && e === 'X' && i === 'X') ||
    (c === 'X' && e === 'X' && g === 'X')
  ) {
    winner = p1;
    p1Score++;
  }
  if (
    (a === 'O' && b === 'O' && c === 'O') ||
    (d === 'O' && e === 'O' && f === 'O') ||
    (g === 'O' && h === 'O' && i === 'O') ||
    (a === 'O' && d === 'O' && g === 'O') ||
    (b === 'O' && e === 'O' && h === 'O') ||
    (c === 'O' && f === 'O' && i === 'O') ||
    (a === 'O' && e === 'O' && i === 'O') ||
    (c === 'O' && e === 'O' && g === 'O')
  ) {
    winner = p2;
    p2Score++;
  }
}
