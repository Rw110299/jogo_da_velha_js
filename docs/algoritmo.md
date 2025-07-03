# Algoritmo do Jogo da Velha

## 📌 Lógica principal

- O tabuleiro é representado por um array de 9 posições.
- A cada clique, o jogador atual preenche uma célula.
- Após cada jogada, verificamos se há uma combinação vencedora:
  - Linhas, colunas ou diagonais.
- Se encontrar, exibe a vitória e destaca as células.
- Se não há mais casas vazias, exibe empate.

## 📌 Modularização

- A função `checkWinner` é exportada para ser usada tanto no script principal quanto nos testes.

## 📌 Testes

- São validados cenários de vitória em linha, coluna, diagonal e empate.

---
