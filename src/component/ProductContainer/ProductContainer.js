import React, { Component } from 'react';
import '../../component/ProductContainer/ProductContainer.scss';
import '../ProductContainer/ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    return (
      <main className="productContainer">
        {/* <div className="productImage">사진대신</div> */}
        <img
          alt="상품사진"
          className="productImage"
          src="./images/unsplash_bed.jpg"
        />
        <div className="productInfo">
          <div className="brandName">{this.props.name}</div>
          <div className="productName">
            캐더린 도리스 씨에라 통수납 침대 SSQ(상품명)
          </div>

          <div className="priceInfo">
            <div className="discountInfo">
              <span className="percent">30%</span>
              <span className="discountPrice">270,000원</span>
            </div>
            <span className="cost">300,000원</span>
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
