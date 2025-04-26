// script priorizando funçoes , chamadas de funcoes nas funçoes

let inputNumber = document.querySelector("#numero");
let inputNumberList = document.querySelector("#numberList");
let inputNumberToCheck = document.querySelector("#checkNumber");
let result = document.querySelector("#resultado");

let list = [];

// function para verificar se algum input está vazio
function inputEmpty(tochecked) {
  if (tochecked.value.trim() === "") {
    result.innerHTML = `⚠️ Digite um número`;
    return true;
  }
  return false;
}

function clearAndFocus(inputElement) {
  inputElement.value = "";
  inputElement.focus();
}

// função para verificar se um número e negativo, igual a zero ou positivo
function resposta() {
  if (inputEmpty(inputNumber)) {
    return;
  }

  // garante que está manupulando um número
  let inputValueNumber = Number(inputNumber.value.trim());

  if (inputValueNumber < 0) {
    result.innerHTML = `➖ Número negativo`;
  } else if (inputValueNumber == 0) {
    result.innerHTML = ` 0️⃣ Número igual a zero`;
  } else if (inputValueNumber > 0) {
    result.innerHTML = ` ➕ Numero positivo`;
  }

  // limpa o campo e coloca o focuo no input
  clearAndFocus(inputNumber);
}

// função para adicionar um nnúmero no vetor
function adicionar() {
  if (inputEmpty(inputNumberList)) {
    return;
  }
  let inputValueNumber = Number(inputNumberList.value.trim());
  list.push(inputValueNumber);

  result.innerHTML = `📋 Sua lista de números é essa ${list.join(", ")}`;
  clearAndFocus(inputNumberList);
}

// função para verificar se um número esta em uma lista
function checkNumberList(i) {
  if (inputEmpty(inputNumberToCheck)) {
    return;
  }
  inputValueNumber = Number(inputNumberToCheck.value.trim());

  if (list.includes(inputValueNumber)) {
    result.innerHTML = `✅ O números ${inputValueNumber} está na lista`;
  } else {
    result.innerHTML = `❌ O números ${inputValueNumber} não está na lista`;
  }
  clearAndFocus(inputNumberToCheck);
}

const products = [
  { name: "Maça", price: 2.5 },
  { name: "Coca cola", price: 8 },
  { name: "Guarana", price: 5 },
  { name: "Chocolate", price: 20 },
];

//usa o filter para verificar se há elementos dentro da codição de valores menores que 20 e 8
console.log(products.filter((product) => product.price === 20));

console.log(products.filter((product) => product.price < 8));
