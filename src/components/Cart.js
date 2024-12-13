// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Carrito de Compras</h2>
    {cart.length === 0 ? (
      <p>El carrito está vacío</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;
