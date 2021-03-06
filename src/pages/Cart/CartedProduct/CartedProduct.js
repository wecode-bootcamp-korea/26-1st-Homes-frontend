import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProductOption from '../CartedProductOption/CartedProductOption';
import './CartedProduct.scss';

export class CartedProduct extends Component {
  render() {
    const { company, image, name, color, quantity, price } = this.props.product;
    const {
      cart_id,
      isDeleteProductOne,
      priceComma,
      getQuantity,
      isMinusQuantity,
      isPlusQuantity,
    } = this.props;

    return (
      <div className="CartedProduct">
        <h1 className="brandName">{company}</h1>
        <CheckBox isDeleteProductOne={isDeleteProductOne} id={cart_id} />
        <div className="productOptionWrap">
          <div className="productOptionInfo">
            <div className="productInfo">
              <img className="productImg" src={image} alt="product img" />
              <div className="productName">{name}</div>
            </div>
          </div>
          <div className="cartedProductOption">
            <CartedProductOption
              cart_id={cart_id}
              productName={name}
              quantity={quantity}
              productColor={color}
              productPrice={price}
              priceComma={priceComma}
              getQuantity={getQuantity}
              isMinusQuantity={isMinusQuantity}
              isPlusQuantity={isPlusQuantity}
            />
          </div>
        </div>
        <div className="totalPriceOrder">
          상품 금액 {priceComma(price)}원 + 배송비 착불
        </div>
      </div>
    );
  }
}

export default CartedProduct;
