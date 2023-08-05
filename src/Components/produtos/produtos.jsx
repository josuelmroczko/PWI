import React,{useState} from 'react';
import { EstiloProduto, AzulMaisClaroSVG, AzulEscuroSVG, FundoAzulMaisClaroSVG, FundoAzulEscuroSVG, ConteudoProduto, FooterMenu } from './style';
import CalendarioCarrinho from '../componentes/componentesPrincipal';
import Footer from '../footer/footer';






function Produto() {
  
  // Exemplo de estado para gerenciar a lista de itens no carrinho
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Produto 1', price: 10.99 },
    { id: 2, name: 'Produto 2', price: 15.99 },
    // ... adicione outros itens se necessário
  ]);

  // Função para remover um item do carrinho
  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };


  return (
     <>
    <EstiloProduto>
      <AzulMaisClaroSVG xmlns="http://www.w3.org/2000/svg" width="1516" height="267" viewBox="0 0 1516 267" fill="none">
        <path d="M0 77.5161C129.205 77.5161 249.795 0 379 0C508.205 0 628.795 77.5161 758 77.5161C887.205 77.5161 1007.8 0 1137 0C1266.2 0 1386.8 77.5161 1516 77.5161V267H0V77.5161Z" fill="#002E6A"/>
      </AzulMaisClaroSVG>
      <AzulEscuroSVG xmlns="http://www.w3.org/2000/svg" width="1515.677px" height="267" viewBox="0 0 1275 267" fill="none">
        <path d="M1516 77.5161C1386.82 77.5161 1266.26 0 1137.08 0C1007.9 0 887.339 77.5161 758.162 77.5161C628.985 77.5161 508.419 0 379.243 0C250.066 0 129.5 77.5161 0.323364 77.5161V267H1516V77.5161Z" fill="#00BEF1"/>
      </AzulEscuroSVG>

      <FundoAzulMaisClaroSVG xmlns="http://www.w3.org/2000/svg" width="1516" height="267" viewBox="0 0 1516 267" fill="none">
        <path d="M1516 189.484C1386.8 189.484 1266.2 267 1137 267C1007.8 267 887.205 189.484 758 189.484C628.795 189.484 508.205 267 379 267C249.796 267 129.205 189.484 0 189.484V0H1516V189.484Z" fill="#002E6A"/>
      </FundoAzulMaisClaroSVG>
      <FundoAzulEscuroSVG xmlns="http://www.w3.org/2000/svg" width="1515.677px" height="267" viewBox="0 0 1275 267" fill="none">
        <path d="M-241 189.484C-111.823 189.484 8.74217 267 137.919 267C267.096 267 387.661 189.484 516.838 189.484C646.015 189.484 766.581 267 895.757 267C1024.93 267 1145.5 189.484 1274.68 189.484V0H-241V189.484Z" fill="#00BEF1"/>
      </FundoAzulEscuroSVG>
      <div className='retanguloAzulEscuro
      '></div>
      
      <ConteudoProduto>
        <ul className='ulConteudoProduto'>
          <li className='liConteudoProduto'></li>
          <li className='liConteudoProduto'><CalendarioCarrinho/> </li>
          <li className='liConteudoProduto'></li>
        </ul>
        
      </ConteudoProduto>
    
    </EstiloProduto>

    
     <FooterMenu>
     <Footer/>
     </FooterMenu>
    </>
  );
}

export default Produto;