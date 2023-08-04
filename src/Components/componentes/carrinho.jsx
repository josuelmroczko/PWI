import React from 'react';
import { CarrinhoContainer } from './estilos/carrinhoStyle';

const Carrinho = ({ carrinho, handleRemoverItem, handleAdicionarUm, handleRemoverUm }) => {
  const total = carrinho.reduce((total, item) => total + item.valor, 0);

  return (
    <CarrinhoContainer>
      <h2>Carrinho:</h2>
      <ul>
        {carrinho.map((item) => (
          <li key={item.id}>
            <span>{item.nome} - R${item.valor.toFixed(2)}</span>
            <span> - Data: {item.data.toLocaleDateString()}</span>
            <button onClick={() => handleRemoverItem(item)}>Remover</button>
            <button onClick={() => handleAdicionarUm(item)}>+1</button>
            <button onClick={() => handleRemoverUm(item)}>-1</button>
          </li>
        ))}
      </ul>
      <p>Total: R${total.toFixed(2)}</p>
    </CarrinhoContainer>
  );
};

export default Carrinho;
