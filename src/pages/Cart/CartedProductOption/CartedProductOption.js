import React, { Component } from 'react';
import './CartedProductOption.scss';

export class CartedProductOption extends Component {
  render() {
    const {
      cart_id,
      isMinusQuantity,
      isPlusQuantity,
      quantity,
      productColor,
      productPrice,
      priceRgu,
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
              onClick={() => isMinusQuantity(quantity, cart_id)}
            />
            <span class="number">{quantity}</span>
            <img
              className="plus"
              src="./images/plus.png"
              alt="plus"
              onClick={() => isPlusQuantity(quantity, cart_id)}
            />
          </div>
          <span className="optionPrice">{priceRgu(productPrice)}원</span>
        </div>
      </div>
    );
  }
}

export default CartedProductOption;
