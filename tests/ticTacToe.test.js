const { checkWinner } = require('../cod/ticTacToe.js');
test('Detecta vitória em linha', () => {
  const board = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(checkWinner(board)).toEqual({ player: 'X', combination: [0, 1, 2] });
});

test('Detecta vitória em diagonal', () => {
  const board = ['O', '', '', '', 'O', '', '', '', 'O'];
  expect(checkWinner(board)).toEqual({ player: 'O', combination: [0, 4, 8] });
});

test('Retorna null se não há vencedor', () => {
  const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  expect(checkWinner(board)).toBeNull();
});
