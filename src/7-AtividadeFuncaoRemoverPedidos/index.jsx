// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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


   const removerItemPedidos = (id) => {
    let remover = false
    let listaAux = listaPedidosJogos.filter((Jogos)=>{
        if (remover == false){
            if(jogos.id !== id){
                return jogos
            }else{
                remover = true
                return null
            }
        }else{
            return Jogos
        }
    }
    )
    setListaPedidosJogos(listaAux)
}
return (
  <div>
       <h1>Jogos</h1>


       {
        listaProdutos.map((jogos)=>
          <div key={jogos.id}>
            <p>{jogos.Nome}</p>
            <p>{jogos.preco}</p>
            <button onClick={()=> adicionarJogos(jogos)}>Selecionar</button>
          </div>    )
      }
       {
         listaPedidosJogos.map((jogos)=>
          <div key={jogos.id}>
            <p>{jogos.Nome}</p>
            <p>{jogos.preco}</p>
            
          </div>    )
      }
  
  </div>
  );
}
