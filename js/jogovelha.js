

let playerX = '';
let playerO = '';
let Jogador_atual = 'X';

let tabuleiro = document.getElementById('game');

function startGame() {

  playerX = prompt('Digite o nome do jogador X:');
  playerO = prompt('Digite o nome do jogador O:');

  if (!playerX || !playerO) {
    alert('Por favor, insira os nomes dos jogadores para começar.');
    return;
  }
  criar_tabuleiro();
}

function criar_tabuleiro() {

  tabuleiro.innerHTML = '';//zera tabuleiro

  let tamanho = document.getElementById('matriz').value;

  tamanho = Math.max(3, Math.min(tamanho, 10));//criar matriz maior

  tabuleiro.style.gridTemplateColumns = `repeat(${tamanho}, 50px)`;

  for (let i = 0; i < tamanho * tamanho; i++) {// 3x3 ,4x4 ,5x5

    const auxiliar = document.createElement('div');// pega a div
    auxiliar.classList.add('cell');//

    auxiliar.setAttribute('data-cell-index', i);

    tabuleiro.appendChild(auxiliar);
  }


//addCellClickEvent();
 Add_bloc_clic();
}


function Add_bloc_clic() {

  const bloco = document.querySelectorAll('.cell');//pega o id bloco e mudua
    bloco.forEach(Func_bloc => {

    Func_bloc.addEventListener('click', GanahdorX_ou_O); //add clic a func
  });
}

function GanahdorX_ou_O(event) {

  const bloco = event.target;
  if (bloco.textContent !== '') {//see tiver vazio
    return;
  }
  bloco.textContent = Jogador_atual;
  bloco.classList.add(Jogador_atual.toLowerCase());

  Verifica_vencedor();
  Jogador_atual = Jogador_atual === 'X' ? 'O' : 'X';

}

function Verifica_vencedor() {


  const bloco = [...document.querySelectorAll('.cell')];

  const tamanho = Math.sqrt(bloco.length);//tamnhao tabuleiro
  let ganhador = null;

  // Verifica linhas
  for (let i = 0; i < bloco.length; i += tamanho) {
    const linha = bloco.slice(i, i + tamanho);

    if (linha.every(cell => cell.textContent === 'X')) {
      ganhador = 'X';
      break;
    } else if (linha.every(cell => cell.textContent === 'O')) {
      ganhador= 'O';
      break;
    }
  }

  // Verifica colunas
  for (let i = 0; i < tamanho; i++) {
       const column = bloco.filter((_, index) => index % tamanho === i);
    if (column.every(cell => cell.textContent === 'X')) {
      ganhador= 'X';
      break;
    } else if (column.every(cell => cell.textContent === 'O')) {
      ganhador = 'O';
      break;
    }
  }

  // Verifica diagonais
  const diagonal1 = bloco.filter((_, index) => index % (tamanho + 1) === 0);

  const diagonal2 = bloco.filter((_, index) => index % (tamanho - 1) === 0 && index !== 0 && index !== bloco.length - 1);

  if (diagonal1.every(cell => cell.textContent === 'X') || diagonal2.every(cell => cell.textContent === 'X')) {
    ganhador = 'X';

  } else if (diagonal1.every(cell => cell.textContent === 'O') ||
   diagonal2.every(cell => cell.textContent === 'O')) {
    ganhador = 'O';
  }

  // Anuncia o vencedor
  if (ganhador) {
      alert(`O jogador ${ganhador=== 'X' ? playerX : playerO} ganhou!`);//quem ganhou
    return ganhador;
  }
  return null;
}

criar_tabuleiro(); // Cria um tabuleiro 3x3 por padrão


