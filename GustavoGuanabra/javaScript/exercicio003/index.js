function calcular() {
  let inicio = document.getElementById("txtinicio").value;
  let fim = document.getElementById("txtfim").value;
  let intervalo = document.getElementById("txtintervalo").value;
  if (inicio == "" || fim == "" || intervalo == "") {
    alert("[ERRO] Digite todos os campos para ser calculado");
  } else {
    inicio = Number(inicio);
    fim = Number(fim);
    intervalo = Number(intervalo);
    for (cont = inicio; cont <= fim; cont += intervalo) {
      let resultado = document.getElementById("resultado");
      resultado.innerHTML += `  ${cont} \u{1F600}`;
    }
  }
}
