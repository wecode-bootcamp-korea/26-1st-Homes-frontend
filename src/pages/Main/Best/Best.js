import React, { Component } from 'react';
import './Best.scss';

export class Best extends Component {
  render() {
    const {
      key,
      company,
      discountRate,
      discountedPrice,
      img,
      price,
      name,
      review,
      starRate,
    } = this.props;

    return (
      <div className="bestProduct" key={key}>
        <span className="bestNumber">1</span>
        <img src={img} alt="bestImg" className="bestImg" />
        <div className="bestProductInfo">
          <p className="product brandName">{company}</p>
          <p className="product productName">{name}</p>
          <div className="product priceWrap">
            <span className="price percent">{Math.round(discountRate)}%</span>
            <span className="price discountPrice">{discountedPrice}원</span>
          </div>
          <div className="product reviewWrap">
            <span className="review star">별</span>
            <span className="review startPoin">{starRate}</span>
            <span className="review reviewNumber">({starRate})</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Best;
