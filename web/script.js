/// Import deve ficar no topo, fora do addEventListener
import { checkWinner } from '../cod/ticTacToe.js';

window.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  const statusText = document.getElementById('status');
  const resetButton = document.getElementById('reset');

  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameActive = true;

  function handleCellClick(e) {
    const index = e.target.dataset.index;
    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    const winner = checkWinner(board);
    if (winner) {
      statusText.textContent = `Jogador ${winner.player} venceu!`;
      highlightWinnerCells(winner.combination);
      gameActive = false;
    } else if (!board.includes('')) {
      statusText.textContent = 'Empate!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusText.textContent = `Vez do jogador ${currentPlayer}`;
    }
  }

  function highlightWinnerCells(indices) {
    indices.forEach(i => {
      cells[i].classList.add('winner');
    });
  }

  function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('winner');
    });
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
  }

  // Adiciona eventos aos elementos
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetButton.addEventListener('click', resetGame);

  // Inicializa texto do status
  statusText.textContent = `Vez do jogador ${currentPlayer}`;
});
