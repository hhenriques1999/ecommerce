import React from 'react';
import './Cart.css';

import HomemDeGiz from '../imagens/o-homem-de-giz.jpg';  
import Extraordinario from '../imagens/extraordinario.jpg';
import CaminhoDosReis from '../imagens/o-caminho-dos-reis.jpg';

function Cart() {
    const cartItems = [
        { image: HomemDeGiz, name: 'O Homem de Giz', author: 'C.J. Tudor', price: 15.00, quantity: 2 },
        { image: Extraordinario, name: 'O Extraordinário', author: 'R.J. Palacio', price: 15.00, quantity: 1 },
        { image: CaminhoDosReis, name: 'O Caminho dos Reis', author: 'Brandon Sanderson', price: 16.00, quantity: 1 },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart-bg">
            <div className="cart-container">
                <h2>Carrinho de Compras</h2>
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-info">
                                <span className="item-name">{item.name}</span>
                                <span className="item-author">Autor: {item.author}</span>
                                <span className="item-price">R${item.price},00</span>
                                <span className="item-quantity">Quantidade: {item.quantity}</span>
                            </div>
                            <button className="remove-button">Remover</button>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    Total: R${total}
                </div>
				<button className="checkout-button">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;
