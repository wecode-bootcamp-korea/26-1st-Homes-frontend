/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../ProductContainer/ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    return (
      <main className="ProductContainer">
        <img
          alt="상품사진"
          className="productImage"
          src="/images/unsplash_bed.jpg"
        />
        <div className="productInfo">
          <div className="brandName">{this.props.name}</div>
          <div className="productName">{this.props.productName}</div>

          <div className="priceInfo">
            <div className="discountInfo">
              <span className="percent">{this.props.percent}%</span>
              <span className="discountPrice">
                {this.props.discountPrice}원
              </span>
            </div>
            <del className="cost">300,000원</del>
          </div>

          <div className="reviewInfo">
            <span className="star">★</span>
            <span className="starPoint">4.7</span>
            <span className="reviewNumber">(365)</span>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductContainer;
