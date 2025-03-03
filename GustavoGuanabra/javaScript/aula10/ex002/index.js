// function somar() {
//   var num1 = document.getElementById("txtn1");
//   var num2 = document.querySelector("input#txtn2");
//   var resultado = document.getElementById("resultado");
//   var n1 = Number(num1.value);
//   var n2 = Number(num2.value);
//   var soma = n1 + n2;
//   resultado.innerHTML = `O resultado da doma entre ${n1} e ${n2} é = <strong> ${soma} <strong>`;
// }

function somar() {
  var n1 = Number(document.getElementById("txtn1").value);
  var n2 = Number(document.querySelector("input#txtn2").value);
  var resultado = document.getElementById("resultado");
  var soma = n1 + n2;
  resultado.innerHTML = `O resultado da doma entre ${n1} e ${n2} é = <strong> ${soma} <strong>`;
}
