import React, { Component } from 'react';
import '../ProductContainer/ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    const {
      company,
      productName,
      discountRate,
      discountedPrice,
      review,
      starRate,
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
          <div className="productName">{productName}</div>

          <div className="priceInfo">
            <div className="discountInfo">
              <span className="discountRate">{discountRate}%</span>
              <span className="discountPrice">{discountedPrice}원</span>
            </div>
            <del className="cost">300,000원</del>
          </div>

          <div className="reviewInfo">
            <span className="star">★</span>
            <span className="starPoint">{starRate}</span>
            <span className="reviewNumber"> ({review}) </span>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductContainer;
