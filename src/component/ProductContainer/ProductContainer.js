import React, { Component } from 'react';
import '../ProductContainer/ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    const {
      company,
      product_name,
      discount_rate,
      discounted_price,
      price,
      review,
      star_rate,
    } = this.props;

    return (
      <main className="ProductContainer">
        <img
          alt="상품사진"
          className="productImage"
          src="/images/unsplash_bed.jpg"
        />
        <div className="productInfo">
          <div className="company">{company}</div>
          <div className="productName">{product_name}</div>

          <div className="priceInfo">
            <div className="discountInfo">
              <span className="discountRate">{discount_rate}%</span>
              <span className="discountPrice">{discounted_price}원</span>
            </div>
            <del className="cost">{price}원</del>
          </div>

          <div className="reviewInfo">
            <span className="star">★</span>
            <span className="starPoint">{star_rate}</span>
            <span className="reviewNumber"> ({review}) </span>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductContainer;
