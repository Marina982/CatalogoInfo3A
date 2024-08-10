// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


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
        </div>
    );
}

