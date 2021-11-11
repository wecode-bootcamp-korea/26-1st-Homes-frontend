import React, { Component } from 'react';
import './CartedProductOption.scss';

export class CartedProductOption extends Component {
  isMinusQuantity = () => {
    const { quantity, getQuantity, cart_id } = this.props;

    if (quantity === 1) {
      getQuantity(1);
    } else if (quantity > 1) {
      const minus = quantity - 1;
      getQuantity(minus, cart_id);
    }
  };

  isPlusQuantity = () => {
    const { quantity, getQuantity, cart_id } = this.props;
    const plus = quantity + 1;
    getQuantity(plus, cart_id);
  };

  render() {
    const { cart_id, quantity, productColor, productPrice, priceComma } =
      this.props;

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
              onClick={() => this.isMinusQuantity(quantity, cart_id)}
            />
            <span class="number">{quantity}</span>
            <img
              className="plus"
              src="./images/plus.png"
              alt="plus"
              onClick={() => this.isPlusQuantity(quantity, cart_id)}
            />
          </div>
          <span className="optionPrice">{priceComma(productPrice)}원</span>
        </div>
      </div>
    );
  }
}

export default CartedProductOption;
