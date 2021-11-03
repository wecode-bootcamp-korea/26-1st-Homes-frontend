import React, { Component } from 'react';
import './Detail.scss';
export class Detail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data[0],
        });
      });
  }
  render() {
    const { productInfo } = this.state;
    const costPrice = () => {
      return Math.round(
        ((productInfo.cost * (1 - productInfo.percent)) / 10) * 10
      );
    };
    return (
      <div className="detailPageBox">
        <div className="ImageAndProduct">
          <img className="detailImage" alt="제품사진" src="/images/bed.jpg" />
          <div className="productInformation">
            <div className="brandName">{productInfo.brandName}</div>
            <div className="productName">{productInfo.productName}</div>
            <div className="productPrice">
              <div className="costAndPercent">
                <p className="cost">{productInfo.cost}</p>
                <p className="percent">{productInfo.percent * 100}%</p>
              </div>
              <div className="discountPriceBox">
                <p className="discountPrice">
                  {costPrice()}
                  <span className="won">원</span>
                </p>
              </div>
            </div>
            <div className="grade">
              <div className="starPointText">평점</div>
              <img className="star" alt="별" src="/images/star.png" />
              <span className="starPoint">{productInfo.starPoint}</span>
            </div>
            <div className="shippingFeeBox">
              <div className="shippingFee">배송비</div>
              <div className="shippingListsBox">
                <ul className="shippingFeeLists">배송비 리스트</ul>
              </div>
              <bitton className="shippingFeeButton">∨</bitton>
            </div>
            <div className="contour" />
            <div className="optionBox">
              <p>옵션 선택</p>
              <div>
                <button className="optionTop">
                  <p className="firstLeftText">제품 선택</p>
                  <p className="firstRightText">∨</p>
                </button>
              </div>
              <div>
                <button className="optionBottom">
                  <p className="secondLeftText">색상 선택</p>
                  <p className="secondRightText">∨</p>
                </button>
              </div>
            </div>
            <div className="buyButtons">
              <button className="shoppingB1asket">장바구니</button>
              <button className="shoppingBasket">바로구매</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
