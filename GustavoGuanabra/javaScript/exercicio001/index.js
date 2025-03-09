setInterval(carregar, 1000);
function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("img");
  let title = document.getElementById("title");
  let correntDate = new Date();
  let correntHours = correntDate.getHours();
  let correntMinuts = correntDate.getMinutes();
  let correntSeconds = correntDate.getSeconds();
  //let hours = correntHours < 10 ? "0" + correntHours : correntHours;
  //let minuts = correntMinuts < 10 ? "0" + correntMinuts : correntMinuts;
  //let seconds = correntSeconds < 10 ? "0"+ correntSeconds : correntSeconds;
  msg.innerHTML = `Agora são ${
    correntHours < 10 ? "0" + correntHours : correntHours
  }:${correntMinuts < 10 ? "0" + correntMinuts : correntMinuts}:${
    correntSeconds < 10 ? "0" + correntSeconds : correntSeconds
  } `;
  if (correntHours > 0 && correntHours < 12) {
    //bom dia
    img.src = "image/manha250px.png";
    document.body.style.background = "#a3bbe2";
    title.innerHTML = "Bom dia!";
  } else if (correntHours >= 12 && correntHours < 18) {
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
