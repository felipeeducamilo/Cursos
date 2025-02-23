// felipe

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas() {
  listElement.innerHTML = "";

  tarefas.map((todo) => {
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    let position = tarefas.indexOf(todo);
    linkElement.setAttribute("onclick", `deletarTarefa(${position})`);

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  });
}

renderTarefas();

function addTarefa() {
  if (inputElement.value === "") {
    alert("Digite uma tarefa");
    return false;
  } else {
    let newTarefa = inputElement.value;
    tarefas.push(newTarefa);
    inputElement.value = "";
    inputElement.focus();
  }
  renderTarefas();
  salvarTarefas();
}

function deletarTarefa(position) {
  tarefas.splice(position, 1);
  renderTarefas();
  salvarTarefas();
}

function salvarTarefas() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}

//buttonElement.onclick = addTarefa();
