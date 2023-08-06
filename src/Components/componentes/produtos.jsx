import React from 'react';
import { ProdutoItemContainer,
    ProdutoImagem, ProdutoInfo,  ProdutoNome,ProdutoValorHorario,  ProdutoValor, ProdutoHorario, ProdutoBotao,} from './estilos/listaStyle';
    import parque from '../imagens/piscinas.png'
    import cifrao from '../imagens/monetization_on.svg'
   
    import relogio from '../imagens/schedule.svg'
    import carrinho from '../imagens/add_shopping_cart.svg'
   

    const ProdutoItem = ({ produto, handleAdicionarCarrinho }) => {
        return (
          <ProdutoItemContainer>
            <ProdutoImagem src={parque} alt={produto.nome} />
            <ProdutoInfo>
              <ProdutoNome>{produto.nome}</ProdutoNome>
              <ProdutoValorHorario>
                <ProdutoValor><img src={cifrao} alt="cifrao" />R$  {produto.valor}</ProdutoValor>
                <ProdutoHorario>  <img src={relogio} alt="pesquisa" />14:40{produto.horario}</ProdutoHorario>
              </ProdutoValorHorario>
            </ProdutoInfo>
            <ProdutoBotao onClick={() => handleAdicionarCarrinho(produto)}> <img src={carrinho} alt="" /> Adicionar</ProdutoBotao>
          </ProdutoItemContainer>
        );
      };
      
     
      

export default ProdutoItem;
