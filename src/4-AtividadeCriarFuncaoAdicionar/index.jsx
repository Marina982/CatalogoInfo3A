// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProduto] = useState([
    {id: 1, Nome: "jogo1", preco: "10,20"},
    {id: 2, Nome: "jogo2", preco: "17,20"},
    {id: 1, Nome: "jogo3", preco: "33,20"}
]);


  const [listaPedidosJogos, setListaPedidosJogos] = useState([]);

   const adicionarJogos = (objeto) => {
    setListaPedidosJogos([...listaPedidosJogos, objeto])
   }
   
   return (
  
    <div>
         <h1>Jogos</h1>


         {
          listaProdutos.map((jogos)=>
            <div key={jogos.id}>
              <p>{jogos.nome}</p>
              <p>{jogos.preco}</p>
            </div>
        )
         }
    </div>
    );
}

