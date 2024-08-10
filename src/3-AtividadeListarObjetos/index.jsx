// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProduto] = useState([
    {id: 1, Nome: "jogo1", preco: "10,20"},
    {id: 2, Nome: "jogo2", preco: "17,20"},
    {id: 1, Nome: "jogo3", preco: "33,20"}
]);

return (
  <div>
       <h1>Jogos</h1>


       {
        listaProdutos.map((jogos)=>
          <div key={jogos.id}>
            <p>{jogos.Nome}</p>
            <p>{jogos.preco}</p>
          </div>
      )
       }
  </div>
 
);
}

