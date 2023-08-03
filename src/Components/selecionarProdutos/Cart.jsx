import React from 'react';


 const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <CartWrapper>
      <h2 className='h2carrinho'>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - R${item.price}</span>
            <button onClick={() => onRemoveFromCart(item)}>Remover do Carrinho</button>
          </li>
        ))}
      </ul>
    </CartWrapper>
  );
};

export default Cart;