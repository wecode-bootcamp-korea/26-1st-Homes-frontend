import React, { Component } from 'react';
import CartContents from './CartContents/CartContents';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: 1,
    };
  }

  render() {
    return (
      <div className="Cart">
        {this.state.cart > 0 ? <CartContents /> : <EmptyCart />}
      </div>
    );
  }
}

export default Cart;
