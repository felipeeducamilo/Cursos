function calcular() {
  let numero = document.getElementById("txtnumero").value;
  let tabuada = document.getElementById("selectabuada");
  if (numero == "") {
    alert("[ERRO] Digite um número para ser calculada a tabuada.");
  } else {
    tabuada.innerHTML = "";
    numero = Number(numero);
    let cont;
    for (cont = 1; cont <= 10; cont++) {
      let item = document.createElement("option");
      item.text = `${numero} x ${cont} = ${numero * cont}`;
      item.value = `tab${cont}`
      tabuada.appendChild(item);
    }
  }
}
