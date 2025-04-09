function calcular() {
  let inicio = document.getElementById("txtinicio").value;
  let fim = document.getElementById("txtfim").value;
  let intervalo = document.getElementById("txtintervalo").value;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "Iniciando a contagem <br>" ;
  if (inicio == "" || fim == "" || intervalo == "") {
    alert("[ERRO] Digite todos os campos para ser calculado");
  } else {
    inicio = Number(inicio);
    fim = Number(fim);
    intervalo = Number(intervalo);
    if (intervalo < 1) {
      intervalo = 1 ;
      alert("O intervalo mínimo será 1");
    }
    if (inicio < fim) {
      for (cont = inicio; cont <= fim; cont += intervalo) {
        resultado.innerHTML += `  ${cont} \u{1f449}`;
      }
    } else {
      for (cont = inicio; cont >= fim; cont -= intervalo) {
        resultado.innerHTML += ` ${cont} \u{1f449}`;
      }
    }
    resultado.innerHTML += ` \u{1f3c1}`;
  }
}

function limpar() {
  document.getElementById("txtinicio").value = "";
  document.getElementById("txtfim").value = "";
  document.getElementById("txtintervalo").value = "";
  document.getElementById("resultado").innerHTML = "";
}
