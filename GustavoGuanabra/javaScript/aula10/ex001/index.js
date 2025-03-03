var area = document.getElementById("area");
area.addEventListener("click", clicou);
area.addEventListener("mousemove", entrou);
area.addEventListener("mouseout", saiu);

function clicou() {
  area.innerHTML = "Você clicou";
  area.style.backgroundColor = "red";
}

function entrou() {
  area.innerText = "Você entrou";
}

function saiu() {
    area.innerText = "Você saiu";
    area.style.background = "rgb(30, 165, 138)";
}
