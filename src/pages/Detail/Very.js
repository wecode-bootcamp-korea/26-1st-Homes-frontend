import React, { Component } from 'react';
import './Detail.scss';

export class Very extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="productInformation">
        <div className="brandName">{this.props.brandName}</div>
        <div className="productName">{this.props.productName}</div>
        <div className="productPrice">
          <div className="costAndPercent">
            <p className="cost">599,000</p>
            <p className="percent">68%</p>
          </div>
          <div className="discountPriceBox">
            <p className="discountPrice">189,000원</p>
          </div>
        </div>
        <div className="grade">
          <div className="starPoint">평점</div>
          <img className="star" alt="별" src="/images/star.png" />
          <span>4.8</span>
        </div>
        <div className="shippingFeeBox">
          <div className="shippingFee">배송비</div>
          <div className="shippingListsBox">
            <ul className="shippingFeeLists">배송비 리스트</ul>
          </div>
          <bitton className="shippingFeeButton">∨</bitton>
        </div>
      </div>
    );
  }
}

export default Very;
