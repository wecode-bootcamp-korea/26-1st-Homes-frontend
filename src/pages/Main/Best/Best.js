import React, { Component } from 'react';

export class Best extends Component {
  render() {
    return (
      <div className="bestProduct">
        <span className="bestNumber">1</span>
        <img src="#" alt="bestImg" className="bestImg" />
        <div className="bestProductInfo">
          <p className="product brandName">여름이었다..</p>
          <p className="product productName">
            호텔식 고밀도 바이오워싱 어쩌구 담요
          </p>
          <div className="product priceWrap">
            <span className="price percent">30%</span>
            <span className="price discountPrice">62,500원</span>
          </div>
          <div className="product reviewWrap">
            <span className="review star">별</span>
            <span className="review startPoin">4.8</span>
            <span className="review reviewNumber">(리뷰468)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Best;
