const newGameBtn = document.getElementById('new-game-btn');
const newGameModal = document.getElementById('new-game-modal');
const backdrop = document.getElementById('backdrop-modal');
const p1colour = document.getElementById('p1col');
const p2colour = document.getElementById('p2col');
const p1name = document.querySelector('.p1nameSelect')
const p2name = document.querySelector('.p2nameSelect')
let winner;
let p1;
let p2;

p1colour.addEventListener('focusout', ()=>{
  p1name.style.color = p1colour.value
})
p2colour.addEventListener('focusout', ()=>{
  p2name.style.color = p2colour.value
})
newGameBtn.addEventListener('click', () =>{
newGameModal.classList.remove('hide');

})

// if (
//   (a === 'X' && b === 'X' && c === 'X') ||
//   (d === 'X' && e === 'X' && f === 'X') ||
//   (g === 'X' && h === 'X' && i === 'X') ||
//   (a === 'X' && d === 'X' && g === 'X') ||
//   (b === 'X' && e === 'X' && h === 'X') ||
//   (c === 'X' && f === 'X' && i === 'X') ||
//   (a === 'X' && e === 'X' && i === 'X') ||
//   (c === 'X' && e === 'X' && g === 'X')
// ) {
//   winner = p1;
//   p1Score++;
// } if (
//   (a === 'O' && b === 'O' && c === 'O') ||
//   (d === 'O' && e === 'O' && f === 'O') ||
//   (g === 'O' && h === 'O' && i === 'O') ||
//   (a === 'O' && d === 'O' && g === 'O') ||
//   (b === 'O' && e === 'O' && h === 'O') ||
//   (c === 'O' && f === 'O' && i === 'O') ||
//   (a === 'O' && e === 'O' && i === 'O') ||
//   (c === 'O' && e === 'O' && g === 'O')
// ) {
//   winner = p2
//   p2Score++;
// }
