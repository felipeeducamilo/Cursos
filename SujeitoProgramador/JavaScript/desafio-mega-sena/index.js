// Busca os objetos dos inputs radio e a área do resultado
let options = document.getElementsByName("inputQtd");
let result = document.querySelector("#result");
let qtdNumbers;
let game = [];

function generateGame() {
  // verifica qual input foi selecionado
  for (let option of options) {
    if (option.checked) {
      qtdNumbers = Number(option.value);
      break; // Quando encontrar ele para o for
    }
  }
  game = [];
  // Gera um número aleatório de 1 a 60
  while (game.length < qtdNumbers) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!game.includes(randomNumber)) { //Verifica se o número não está na lista
      game.push(randomNumber); // Adiciona o número depois de verificar se não está na lista
    }
  }

  game.sort((a, b) => a - b); // coloca o array em ordem numérica
  result.innerHTML = `O seu bilhete da sorte contém os seguintes números: <strong>${game.join(" - ")}<strong>`;
}
