import React from 'react';

import HeaderListaProdutos from './CabecaListaProdutos';
import { ListaProdutosContainer, ListaProdutosLista } from './estilos/listaStyle';
import ProdutoItem from './produtos';

const ListaProdutos = ({ produtos, handleAdicionarCarrinho }) => {
  // Obtém a data atual
  const dataAtual = new Date();

  return (
    <ListaProdutosContainer>
      <HeaderListaProdutos data={dataAtual} />
      <ListaProdutosLista>
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} handleAdicionarCarrinho={handleAdicionarCarrinho} />
        ))}
      </ListaProdutosLista>
    </ListaProdutosContainer>
  );
};

export default ListaProdutos;
