let lista = [];
let selctres = document.getElementById("selectNumber");
let resultado = document.querySelector("div#info");

// verifca se o numero satisfaz os parâmetros entre 1 e 100
function isNumero(n) {
  if (n == "" || n < 1 || n > 100) {
    return false;
  } else {
    return true;
  }
}

//verifica se o numero já esta na listta
function inLista(n, l) {
  if (l.indexOf(n) != -1) {
    return false;
  } else {
    return true;
  }
}

// adiciona o número em uma lista e dinamicamente ao select
function adicionarNumber() {
  let numero = document.getElementById("txtnumero").value;
  numero = Number(numero);

  if (isNumero(numero) && inLista(numero, lista)) {
    lista.push(numero);
    let item = document.createElement("option");
    item.text = `Valor ${numero} adicionado`;
    selctres.appendChild(item);
    resultado.innerHTML = "";
  } else {
    alert("[ERRO] Este número já foi inserido ou ele não está entre 1 e 100.");
  }

  // Limpar o campo de texto e focar novamente
  document.getElementById("txtnumero").value = "";
  document.getElementById("txtnumero").focus();
}

function finalizar() {
  if (lista.length == 0) {
    alert("[ERRO] Digite um número antes de finalizar");
  } else {
    let tamanho = lista.length;
    let maior = lista[0];
    let menor = lista[0];
    let somaNumeros = 0;
    for (let pos in lista) {
      somaNumeros += lista[pos];
      if (lista[pos] > maior) maior = lista[pos];

      if (lista[pos] < menor) menor = lista[pos];
    }
    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo temos ${tamanho} elementos.</p>`;
    resultado.innerHTML += `<p> O maior valor é ${maior}. </p>`;
    resultado.innerHTML += `<p> O menor valor é ${menor}.</p>`;
    resultado.innerHTML += `<p> A soma dos números é ${somaNumeros}.</p>`;
    resultado.innerHTML += `<p> A média dos números é ${somaNumeros/tamanho}.</p>`;
  }
}
