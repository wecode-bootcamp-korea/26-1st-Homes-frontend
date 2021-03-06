import React, { Component } from 'react';
import './Best.scss';

export class Best extends Component {
  render() {
    const {
      rank,
      company,
      discountRate,
      discountedPrice,
      img,
      name,
      review,
      starPoint,
    } = this.props;

    const addComma = Math.round(discountedPrice)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className="bestProduct">
        <span className="bestNumber">{rank}</span>
        <img src={img} alt="bestImg" className="bestImg" />
        <div className="bestProductInfo">
          <p className="product brandName">{company}</p>
          <p className="product productName">{name}</p>
          <div className="product priceWrap">
            <span className="price percent">{discountRate}%</span>
            <span className="price discountPrice">
              {discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
          </div>
          <div className="product reviewWrap">
            <img
              className="review star"
              src="./images/star.png"
              alt="star img"
            />
            <span className="review startPoin">
              {Math.round(starPoint * 10) / 10}
            </span>
            <span className="review reviewNumber">({review})</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Best;
