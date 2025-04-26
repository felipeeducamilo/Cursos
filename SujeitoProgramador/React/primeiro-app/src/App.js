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
//   const [aluno, setAluno] = useState("Eduardo");

//   function handleChangeName(nome) {
//     alert("Clicou");
//     setAluno(nome);
//   }
//   return (
//     <div>
//       <h1> Componente App </h1>
//       <br />
//       <h2> Olá: {aluno} </h2>
//       <button onClick={() => handleChangeName("Dumont")}>Mudar Nome</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [aluno, setAluno] = useState("Felipe Eduardo");

//   const handleChangeName = () => {
//     alert("Clicou!");
//     setAluno("Santos Dumont");
//   };

//   return (
//     <div>
//       <h1>Componente App</h1>
//       <h2>Olá: {aluno}</h2>
//       <button onClick={handleChangeName}>Mudar Nome</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [aluno, setAluno] = useState("Felipe Eduardo");

//   function handleChangeName(novoNome) {
//     alert("Clicou");
//     console.log("Aluno atual:", aluno);
//     setAluno(novoNome);
//   }

//   return (
//     <div>
//       <h1>Componente App</h1>
//       <h2>Olá: {aluno}</h2>

//       <button onClick={() => handleChangeName("Santos Dumont")}>
//         Mudar Nome
//       </button>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState("Felipe Eduardo");

  function handleChangeName(nome) {
    console.log("Nome antes de mudar: ", aluno); // Verifique o nome no console
    setAluno(nome);
    console.log("Nome depois de mudar: ", nome); // Verifique se o nome foi realmente alterado
  }

  return (
    <div>
      <h1>Componente App</h1>
      <br />
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Santos Dumont")}>
        Mudar Nome
      </button>
    </div>
  );
}

export default App;
