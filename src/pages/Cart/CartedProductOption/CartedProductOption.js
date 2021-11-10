import React, { Component } from 'react';
import './CartedProductOption.scss';

export class CartedProductOption extends Component {
  render() {
    const {
      isMinusQuantity,
      isPlusQuantity,
      quantity,
      productColor,
      productPrice,
    } = this.props;

    return (
      <div className="ProductOption">
        <div className="optionWrap">
          <div className="optionInfo">
            <span className="optionColor">{productColor}</span>
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
              onClick={() => isMinusQuantity(quantity)}
            />
            <span class="number">{quantity}</span>
            <img
              className="plus"
              src="./images/plus.png"
              alt="plus"
              onClick={() => isPlusQuantity(quantity)}
            />
          </div>
          <span className="optionPrice">{productPrice}</span>
        </div>
      </div>
    );
  }
}

export default CartedProductOption;
