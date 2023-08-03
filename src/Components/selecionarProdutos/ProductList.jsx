
import React from 'react';
import { ProductListWrapper } from './ProductListStyles';
import fotoParque from './parque.png'
import svgcifrao from './monetization_on.svg'

const products = [
  { id: 1, name: 'Ingresso Diário Inteiro 2023', price:  10.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 },
  { id: 2, name: 'Ingresso Diário Inteiro 2023', price: 15.99 }
  // ... adicione outros itens se necessário
];

function ProductList({ onAddToCart }) {
  return (
    <ProductListWrapper>
      <div className='dataDaCompra'>27/03/2023</div>
      <ul>
        {products.map((produto) => (
          <li key={produto.id}>
            <div className="product-container">
              <img src={fotoParque} alt="Produto" />
              <span>{produto.name}</span>
            </div>
            <div className="price-container">
              <img src={svgcifrao} alt="Cifrão" style={{ width: '16px', height: '16px', marginRight: '5px',left:'0px',top:'0' }} />
              <span>R${produto.price}</span>
              <button onClick={() => onAddToCart(produto)}>Adicionar</button>
            </div>
          </li>
        ))}
      </ul>
    </ProductListWrapper>
  );
}

export default ProductList;
