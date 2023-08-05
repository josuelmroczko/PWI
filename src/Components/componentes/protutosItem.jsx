import React from 'react';
import HeaderListaProdutos from './CabecaListaProdutos';
import DataAtualTopoComponent from './DataAtualTopo'; // Importe o novo componente
import { DataAtualTopo, ListaProdutosContainer, ListaProdutosLista } from './estilos/listaStyle';
import ProdutoItem from './produtos';

const ListaProdutos = ({ produtos, handleAdicionarCarrinho }) => {
  // Obtém a data atual
  const dataAtual = new Date();

  return (
    <>
    <DataAtualTopo>
     <h2>Selecione os produtos</h2>
     <span>27/03/2023</span>
 

    </DataAtualTopo>
      <ListaProdutosContainer>
        <ListaProdutosLista>
          {produtos.map((produto) => (
            <ProdutoItem key={produto.id} produto={produto} handleAdicionarCarrinho={handleAdicionarCarrinho} />
          ))}
        </ListaProdutosLista>
      </ListaProdutosContainer>
    </>
  );
};

export default ListaProdutos;
