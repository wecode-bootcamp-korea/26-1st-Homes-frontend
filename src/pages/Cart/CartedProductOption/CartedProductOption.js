import React, { Component } from 'react';
import './CartedProductOption.scss';

export class CartedProductOption extends Component {
  render() {
    const { isMinusQuantity, isPlusQuantity, quantity } = this.props;

    return (
      <div className="ProductOption">
        <div className="optionWrap">
          <div className="optionInfo">
            <span className="optionColor">{/*props 들어와야햄*/}</span>
          </div>
          <img
            className="productClean"
            src="./images/cross.png"
            alt="product clean"
          />
        </div>
        <div className="productQuantity">
          <div className="quantity">
            <img
              className="minus"
              src="./images/minus.png"
              alt="minus"
              onClick={isMinusQuantity}
            />
            <span class="number">{quantity}</span>
            <img
              className="plus"
              src="./images/plus.png"
              alt="plus"
              onClick={isPlusQuantity}
            />
          </div>
          <span className="optionPrice">{/*props 들어와야햄*/}</span>
        </div>
      </div>
    );
  }
}

export default CartedProductOption;
