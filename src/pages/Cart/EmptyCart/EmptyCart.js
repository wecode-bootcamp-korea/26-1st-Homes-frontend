import React, { Component } from 'react';
import './EmptyCart.scss';

export class EmptyCart extends Component {
  render() {
    return (
      <div className="EmptyCart">
        <div className="isEmpty">
          <img
            src="./images/shopping-cart (2).png"
            alt="cart img"
            className="cartImg"
          />
          <span className="nothing">장바구니에 담긴 상품이 없습니다.</span>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
