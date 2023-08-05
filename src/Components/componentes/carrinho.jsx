import React from 'react';
import { CarrinhoContainer, CarrinhoItem } from './estilos/carrinhoStyle';
import fotoPiscinas from '../imagens/piscinas.png'
import { ProdutoImagem } from './estilos/listaStyle';

const Carrinho = ({ carrinho, handleRemoverItem, handleAdicionarUm, handleRemoverUm }) => {
  const total = carrinho.reduce((total, item) => total + item.valor, 0);

  return (
    <CarrinhoContainer>
      <h2>Carrinho de Compras</h2>
      <span></span>
      <ul>
        {carrinho.map((item) => (
          <CarrinhoItem key={item.id}>
            <ProdutoImagem src={fotoPiscinas} alt="Imagem do Produto" />
            <span>{item.nome} - R${item.valor.toFixed(2)}</span>
            <span>  {item.data.toLocaleDateString()}</span>
            <button onClick={() => handleRemoverItem(item)}>X</button>
            <button onClick={() => handleAdicionarUm(item)}>+1</button>
            <button onClick={() => handleRemoverUm(item)}>-1</button>
          </CarrinhoItem>
        ))}
      </ul>
      <p>R${total.toFixed(2)}</p>
    </CarrinhoContainer>
);
};


export default Carrinho;
