import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProductOption from '../CartedProductOption/CartedProductOption';
import './CartedProduct.scss';

export class CartedProduct extends Component {
  render() {
    const {
      company,
      productName,
      quantity,
      productColor,
      productPrice,
      isMinusQuantity,
      isPlusQuantity,
      isDeleteProductOne,
    } = this.props;
    return (
      <div className="CartedProduct">
        <h1 className="brandName">{company}</h1>
        <CheckBox isDeleteProductOne={isDeleteProductOne} />
        <div className="productOptionWrap">
          <div className="productOptionInfo">
            <div className="productInfo">
              <img
                className="productImg"
                src="./images/HookahWoody.jpeg"
                alt="product img"
              />
              <div className="productName">{productName}</div>
            </div>
          </div>
          <div className="cartedProductOption">
            <CartedProductOption
              productName={productName}
              quantity={quantity}
              productColor={productColor}
              productPrice={productPrice}
              isMinusQuantity={isMinusQuantity}
              isPlusQuantity={isPlusQuantity}
            />
          </div>
        </div>
        <div className="totalPriceOrder">
          상품 금액 {productPrice}원 + 배송비 착불
        </div>
      </div>
    );
  }
}

export default CartedProduct;
