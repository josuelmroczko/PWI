import React from 'react';
import { ProdutoItemContainer,
    ProdutoImagem, ProdutoInfo,  ProdutoNome,ProdutoValorHorario,  ProdutoValor, ProdutoHorario, ProdutoBotao,} from './estilos/listaStyle';
    import parque from '../imagens/piscinas.png'

    const ProdutoItem = ({ produto, handleAdicionarCarrinho }) => {
        return (
          <ProdutoItemContainer>
            <ProdutoImagem src={parque} alt={produto.nome} />
            <ProdutoInfo>
              <ProdutoNome>{produto.nome}</ProdutoNome>
              <ProdutoValorHorario>
                <ProdutoValor>R$ {produto.valor}</ProdutoValor>
                <ProdutoHorario>{produto.horario}</ProdutoHorario>
              </ProdutoValorHorario>
            </ProdutoInfo>
            <ProdutoBotao onClick={() => handleAdicionarCarrinho(produto)}>Adicionar</ProdutoBotao>
          </ProdutoItemContainer>
        );
      };
      
     
      

export default ProdutoItem;
