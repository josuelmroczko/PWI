import React, { useState } from 'react';
import ProductList from './ProductList';

function CarrinhoFinal() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (produto) => {
    setCartItems((itensAnteriores) => [...itensAnteriores, produto]);
  };

  const handleRemoveFromCart = (produto) => {
    setCartItems((itensAnteriores) => itensAnteriores.filter((item) => item.id !== produto.id));
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - R${item.price}</span>
            <button onClick={() => handleRemoveFromCart(item)}>Remover do Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarrinhoFinal;
