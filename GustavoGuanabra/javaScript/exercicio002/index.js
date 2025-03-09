function verificar() {
  let correntData = new Date();
  let correntYears = correntData.getFullYear();
  let anoNascimento = document.getElementById("txtnas").value;
  if (anoNascimento == "" || anoNascimento > correntYears) {
    alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    let radioSex = document.getElementsByName("radiosex");
    let years = correntYears - Number(anoNascimento);
    let image = document.querySelector("div#image");
    let genero = "";
    let picture = document.createElement("img");
    picture.setAttribute("id", "picture");
    if (radioSex[0].checked) {
      genero = "Masculino";
      document.body.style.backgroundColor = " rgb(113, 191, 233)";
      if (years <= 10) {
        picture.setAttribute("src", "assets/menino.png");
      } else if (years < 18) {
        picture.setAttribute("src", "assets/garoto.png");
      } else if (years < 61) {
        picture.setAttribute("src", "assets/homem.png");
      } else if (years > 60) {
        picture.setAttribute("src", "assets/idoso.png");
      }
    } else if (radioSex[1].checked) {
      genero = "Feminino";
      document.body.style.backgroundColor = "pink";
      if (years <= 10) {
        picture.setAttribute("src", "assets/menina.png");
        
      } else if (years < 18) {
        picture.setAttribute("src", "assets/garota.png");
        
      } else if (years < 60) {
        picture.setAttribute("src", "assets/mulher.png");
        
      } else if (years > 60) {
        picture.setAttribute("src", "assets/idosa.png");
        
      }
    }
    image.innerHTML = `Detectamos uma pessoa do sexo ${genero} de ${years} anos`;
    image.appendChild(picture);
  }
}
