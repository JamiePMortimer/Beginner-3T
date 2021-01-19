const newGameBtn = document.getElementById('new-game-btn');
const newGameModal = document.getElementById('new-game-modal');
const backdrop = document.getElementById('backdrop-modal');
let winner;
let p1;
let p2;

newGameBtn.addEventListener('click', () =>{
newGameModal.classList.remove('hide');

})

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
} if (
  (a === 'O' && b === 'O' && c === 'O') ||
  (d === 'O' && e === 'O' && f === 'O') ||
  (g === 'O' && h === 'O' && i === 'O') ||
  (a === 'O' && d === 'O' && g === 'O') ||
  (b === 'O' && e === 'O' && h === 'O') ||
  (c === 'O' && f === 'O' && i === 'O') ||
  (a === 'O' && e === 'O' && i === 'O') ||
  (c === 'O' && e === 'O' && g === 'O')
) {
  winner = p2
  p2Score++;
}
