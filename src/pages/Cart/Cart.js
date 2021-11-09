import React, { Component } from 'react';
import CartContents from './CartContents/CartContents';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

export class Cart extends Component {
  render() {
    return (
      <div className="Cart">{1 > 0 ? <CartContents /> : <EmptyCart />}</div>
    );
  }
}

export default Cart;
