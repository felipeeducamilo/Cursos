// import Nome from "./components/Nome";

// function App() {
//   return (
//     <div>
//       <h1> Componente App</h1>
//       <Nome aluno="Felipe" idade={41} />
//       <Nome aluno="Eduardo" idade={31} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [aluno, setAluno] = useState("Felipe Eduardo");

//   function handleChangeName(nome) {
//     setAluno(nome);
//   }

//   return (
//     <div>
//       <h1>Componente App</h1>
//       <br />
//       <h2>Olá: {aluno}</h2>
//       <button onClick={() => handleChangeName("Santos Dumont")}>
//         Mudar Nome
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [idade, setIdade] = useState("");

//   const [user, setUser] = useState({});

//   function handleRegister(e) {
//     e.preventDefault();

//     setUser({
//       nome: nome,
//       email: email,
//       idade: idade,
//     });
//     alert("Usuário cadastrado com sucesso");
//   }
//   return (
//     <div>
//       <h1> Cadastro de usuário</h1>

//       <form onSubmit={handleRegister}>
//         <label>Nome: </label> <br />
//         <input
//           placeholder="Digite seu nome"
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//         ></input>
//         <br /> <br />
//         <label>E-mail: </label> <br />
//         <input
//           placeholder="Digite seu e-mail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <br /> <br />
//         <label>Idade: </label> <br />
//         <input
//           placeholder="Digite sua idade"
//           value={idade}
//           onChange={(e) => setIdade(e.target.value)}
//         ></input>
//         <br /> <br />
//         <button type="submit">Registrar</button> <br />
//       </form>

//       <br />

//       <div>
//         <span> Nome: {user.nome}</span> <br />
//         <span> Idade: {user.idade}</span> <br />
//         <span> E-mail: {user.email} </span> <br />
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "comprar coca-cola",
    "estudar react Js",
  ]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }
  return (
    <div>
      <h1> Cadastro de usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label> <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <br /> <br />
        <button type="submit">Registrar</button> <br />
      </form>

      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}> {tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
