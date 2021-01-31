const newGameBtn = document.getElementById('new-game-btn');
const newGameModal = document.querySelector('.new-game-modal');
const backdrop = document.querySelector('.backdrop-modal');
const p1colour = document.getElementById('p1col');
const p2colour = document.getElementById('p2col');
const p1name = document.querySelector('.p1nameSelect');
const p2name = document.querySelector('.p2nameSelect');
const start = document.querySelector('.start-btn');
const cancel = document.querySelector('.cancel-btn');
const player1Name = document.querySelector('.play1');
const player2Name = document.querySelector('.play2');
const player1NameInput = document.querySelector('.p1Name');
const player2NameInput = document.querySelector('.p2Name');
const gridArea = document.querySelector('.playArea');
const list = document.querySelectorAll('.box');
const Score1 = document.querySelector('.P1Score');
const Score2 = document.querySelector('.P2Score');
const winBox = document.querySelector('.win-modal');
const turnDisplay = document.querySelector('.playerTurn');

let winner, P1, P2, playerTurn, p1Score = 0, p2Score = 0 ;
let gameLive = false;

list.forEach((e) => {
  e.addEventListener('click', addMarkerHandler);
});

function addMarkerHandler(e) {
  if (gameLive) {
  if ((playerTurn === 'P1')) {
    e.target.textContent = 'X';
    e.target.style.color = p1colour.value;
  } else {
    e.target.textContent = 'O';
    e.target.style.color = p2colour.value;
  }
  e.target.removeEventListener('click', addMarkerHandler);
  winnerCheck();
  playerTurnCheck();
} else {
  return;
}
}

// Put this into a function
p1colour.addEventListener('focusout', () => {
  p1name.style.color = p1colour.value;
});
p2colour.addEventListener('focusout', () => {
  p2name.style.color = p2colour.value;
});
newGameBtn.addEventListener('click', () => {
  newGameModal.classList.remove('hide');
  backdrop.classList.remove('hide');
  cancelGame();
  backdrop.addEventListener('click', () => {
    newGameModal.classList.add('hide');
    backdrop.classList.add('hide');
    clearNames();
  });
});

function cancelGame() {
  cancel.addEventListener('click', () => {
    newGameModal.classList.add('hide');
    backdrop.classList.add('hide');
    clearNames();
  });
}

function clearNames() {
  player1NameInput.value = null;
  player2NameInput.value = null;
}

function whoseTurn() {
  if (gameLive) {
  turnDisplay.textContent = (playerTurn === 'P1') ? `${P1}'s Turn` : `${P2}'s Turn`
  } else {
    return
  }
}

function startGame() {
  if (player1NameInput.value === '' || player2NameInput.value === '') {
    return;
  } else {
    gameLive = true;
    newGameModal.classList.add('hide');
    backdrop.classList.add('hide');
    player1Name.textContent = player1NameInput.value;
    P1 = player1NameInput.value;
    player2Name.textContent = player2NameInput.value;
    P2 = player2NameInput.value;
    player1Name.style.color = p1colour.value;
    player2Name.style.color = p2colour.value;
    clearNames();
    clearBoard();
    winBox.classList.add('hide');
    playerTurnCheck('START');
    whoseTurn();
  }
}



function playerTurnCheck(turn) {
  if (gameLive) {
  if (turn === 'START') {
    const turn = Math.floor(Math.random() * 100);

    if (turn % 2 === 0) {
      playerTurn = 'P1';
    } else {
      playerTurn = 'P2';
    }
  } else {
    if (playerTurn === 'P1') {
      playerTurn = 'P2';
    } else {
      playerTurn = 'P1';
    }
  }
  whoseTurn();
} else {
  return;
}
}

// const boxListeners = function () {
//   list.forEach((e) => {
//     e.addEventListener('click', console.log('Click'));
//   });
// };

function clearBoard() {
  list.forEach((e) => {
    e.textContent = '';
    e.id = '';
  });
}

function winnerCheck() {
  if (
    (list[0].textContent === 'X' && list[1].textContent === 'X' && list[2].textContent === 'X') ||
    (list[3].textContent === 'X' && list[4].textContent === 'X' && list[5].textContent === 'X') ||
    (list[6].textContent === 'X' && list[7].textContent === 'X' && list[8].textContent === 'X') ||
    (list[0].textContent === 'X' && list[3].textContent === 'X' && list[6].textContent === 'X') ||
    (list[1].textContent === 'X' && list[4].textContent === 'X' && list[7].textContent === 'X') ||
    (list[2].textContent === 'X' && list[5].textContent === 'X' && list[8].textContent === 'X') ||
    (list[0].textContent === 'X' && list[4].textContent === 'X' && list[8].textContent === 'X') ||
    (list[2].textContent === 'X' && list[4].textContent === 'X' && list[6].textContent === 'X')
  ) {
    gameLive = false;
    whoseTurn()
    winBox.classList.remove('hide')
    // winner = p1;
    p1Score++;
    Score1.textContent = p1Score;
    turnDisplay.textContent = `${P1} wins!`
  }
  if (
    (list[0].textContent === 'O' && list[1].textContent === 'O' && list[2].textContent === 'O') ||
    (list[3].textContent === 'O' && list[4].textContent === 'O' && list[5].textContent === 'O') ||
    (list[6].textContent === 'O' && list[7].textContent === 'O' && list[8].textContent === 'O') ||
    (list[0].textContent === 'O' && list[3].textContent === 'O' && list[6].textContent === 'O') ||
    (list[1].textContent === 'O' && list[4].textContent === 'O' && list[7].textContent === 'O') ||
    (list[2].textContent === 'O' && list[5].textContent === 'O' && list[8].textContent === 'O') ||
    (list[0].textContent === 'O' && list[4].textContent === 'O' && list[8].textContent === 'O') ||
    (list[2].textContent === 'O' && list[4].textContent === 'O' && list[6].textContent === 'O')
  ) {
    gameLive = false;
    whoseTurn()
    winBox.classList.remove('hide');
    // winner = p2;
    p2Score++;
    Score2.textContent = p2Score;
    turnDisplay.textContent = `${P2} wins!`
  }
}

start.addEventListener('click', startGame);
