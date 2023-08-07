import React from 'react';
import { CarrinhoContainer, CarrinhoItem } from './estilos/carrinhoStyle';
import fotoPiscinas from '../imagens/piscinas.png'
import { ProdutoImagem } from './estilos/listaStyle';
import monetizationof from '../imagens/monetizationon (1).svg'
import cifrao from '../imagens/monetization_.svg'

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
            <span className='valores'>{item.nome} <img src={monetizationof}  /> R${item.valor.toFixed(2)}</span>
            <button className='fechar' onClick={() => handleRemoverItem(item)}>X</button>
            <button className='maismenos' onClick={() => handleAdicionarUm(item)}>+1</button>
            <button className='maismenos' onClick={() => handleRemoverUm(item)}>-1</button>
          </CarrinhoItem>
        ))}
      </ul>
      <p className='valorFinal'><img src={cifrao}/> R${total.toFixed(2)}</p>
    </CarrinhoContainer>
);
};


export default Carrinho;
