let produtos = ["computador", "telefone", "mouse", "teclado", "impressora"];
console.log(`A listagem de produtos é: ${produtos}`);

console.log(`A lista de produtos possui ${produtos.length} produtos`);

let exlcuirProduto = produtos.indexOf("mouse");
console.log(`O produto mouse está na posição ${exlcuirProduto}`);

//Excluindo o produto mouse pelo método splice

//produtos.splice(exlcuirProduto,1);
//console.log(`A nova lista de produtos sem o ítem excluido pelo método splice é: ${produtos}`);

// Exluindo produto pelo método filterm na forma reduzida
//produtos.filter(produto => produto !== "mouse");

let filtrados = produtos.filter(produto => {
    console.log(`Analisando: ${produto}`);
    let condicao = produto !== "mouse";
    console.log(`Devo manter "${produto}"? ${condicao}`);
    return condicao;
  });
  console.log(`Os produtos filtrados são: ${filtrados}`);

  let findProduto = produtos.find(produtos => produtos === "computador");

  if (findProduto) {
    console.log(`OK. O produto ${findProduto} já existe na sua lista.`); } else {
        console.log(`O produto ${findProduto} não foi localizado na sua lista.`);
    }
    console.log(`A sua lista de produtos é : ${produtos}`);
    produtos.splice(1,1);
    console.log(`A nova lista com exlusão do produto no índice 2 é ${produtos}`);

    let lista = [1, 3, 5, 7, 0, 9];
    console.log(lista);
    lista.sort();
    console.log(`A lista após ser ordenada: ${lista}`);
    console.log (`Irei remover o primeiro número da lista, que é o número: ${lista.shift()}`);
    console.log(`A nova lista atualizada é: ${lista}`);
    console.log(`A lista será invertida e ficará assim> ${lista.reverse()}`);

    let hoje = '20/07/2019';
    console.log(hoje);
    let [dia, mes, ano] = hoje.split("/");
    console.log (`O dia é: ${dia}`);
    console.log(`O mês é: ${mes}`);
    console.log(`O ano é: ${ano}`);

    dataQualquer = new Date();
    console.log(dataQualquer);
    
    let frutas = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];

let contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

console.log(contagem);

console.log("==================");

let numeros = [10, 20, 30, 40];

let soma = numeros.reduce((acumulador, numero, index) => {
    console.log("o acumulador é: "+ acumulador);
    console.log("o numero é: "+ numero);
    console.log("o indice é: "+ index);
  return acumulador + numero;
}, 0); // começa com 0

console.log("Soma:", soma); // 100
