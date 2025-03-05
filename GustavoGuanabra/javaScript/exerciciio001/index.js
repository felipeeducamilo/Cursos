function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("img");
  var title = document.getElementById("title");
  var dataAtual = new Date();
  var horaAtual = dataAtual.getHours();
  msg.innerHTML = `Agora são ${horaAtual} horas`;
  if (horaAtual > 0 && horaAtual < 12) {
    //bom dia
    img.src = "image/manha250px.png";
    document.body.style.background = "#a3bbe2";
    title.innerHTML = "Bom dia!";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    //boa tarde
    img.src = "image/tarde250px.png";
    document.body.style.background = "#eca36c";
    title.innerHTML = "Boa Tarde!";
  } else {
    //boa noite
    img.src = "image/noite250px.png";
    document.body.style.background = "#576266";
    title.innerHTML = "Boa Noite!";
  }
}
