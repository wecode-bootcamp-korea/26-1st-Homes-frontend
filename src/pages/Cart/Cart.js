import React, { Component } from 'react';
import CartContents from './CartContents/CartContents';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
    };
  }
  render() {
    const { dataList } = this.state;
    const isCartFill = dataList => {
      console.log(dataList);
      if (dataList) {
        this.setState({ dataList });
      }
    };

    return (
      <div className="Cart">
        {dataList ? <CartContents isCartFill={isCartFill} /> : <EmptyCart />}
      </div>
    );
  }
}

export default Cart;
