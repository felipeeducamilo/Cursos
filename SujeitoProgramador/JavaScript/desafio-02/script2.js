// 1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.

function resposta() {
  // Seleciona o elemento com id 'numero' e 'resultado'
  let number = document.querySelector("#numero");
  let result = document.querySelector("#resultado");
  result.innerHTML = "";

  // Verifica se o número foi preenchido
  if (number.value.trim() == "") {
    result.innerHTML = `Digite um valor numérico!`;

    // verifica se o numero é menor, igual ou maior que 0
  } else if (Number(number.value) < 0) {
    result.innerHTML = `O valor é negativo.`;
  } else if (Number(number.value) === 0) {
    result.innerHTML = `O valor é igual a zero.`;
  } else if (Number(number.value) > 0) {
    result.innerHTML = `O valor é positivo.`;
  }

  // Limpa o input após a resposta
  number.value = "";
}

// 2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números.

let list = [];

function adicionar() {
  // seleciona o elemento com id 'numberList' e 'resultado'
  let number = document.querySelector("#numberList");
  let result = document.querySelector("#resultado");

  // Limpa qualquer conteúdo anterior
  result.innerHTML = "";

  // Verifica se o campo de input foi preenchido
  let inputValor = number.value.trim();
  if (inputValor === "") {
    result.innerHTML = `⚠️ Digite um número`;
    return;
  }

  // Converte o valor do input para número
  let numberList = Number(inputValor);

  // Adiciona o número na lista
  list.push(numberList);

  // Exibe a lista de números
  result.innerHTML = `✅ Números na lista: ${list.join(", ")}`;
  number.value = "";
  number.focus();
}

function checkNumberList() {
  let input = document.querySelector("#checkNumber");
  let result = document.querySelector("#resultado");
  result.innerHTML = "";
  let numberToCheck = Number(input.value.trim());

  if (list.includes(numberToCheck)) {
    result.innerHTML = `✅ O números ${numberToCheck} está na lista`;
  } else {
    result.innerHTML = `❌ O números ${numberToCheck} não está na lista`;
  }
  input.value = "";
  input.focus();
}

// 3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:

const products = [
  { name: "Maça", price: 2.5 },
  { name: "Coca cola", price: 8 },
  { name: "Guarana", price: 5 },
  { name: "Chocolate", price: 20 },
];

console.log(products.filter((product) => product.price == 20));

console.log(products.filter((products) => products.price < 8));
