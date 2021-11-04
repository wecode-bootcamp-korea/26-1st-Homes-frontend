import React, { Component } from 'react';
import './Detail.scss';

export class Detail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      buttonValue: true,
      buttonDropDown: true,
    };
  }
  buttonClick = event => {
    this.setState({
      buttonValue: this.state.buttonValue == true ? false : true,
    });
  };
  componentDidMount() {
    fetch('http:/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data[0],
        });
      });
  }

  buttonClick = event => {
    this.setState({
      buttonValue: this.state.buttonValue == true ? false : true,
    });
  };

  render() {
    const { productInfo } = this.state;
    const costPrice = () => {
      return Math.round(
        ((productInfo.cost * (1 - productInfo.percent)) / 10) * 10
      );
    };

    return (
      <div className="Detail">
        <div className="imageAndProduct">
          <img className="detailImage" alt="제품사진" src="/images/bed.jpg" />
          <div className="productInformation">
            <div className="brandName">{productInfo.brandName}</div>
            <div className="productName">{productInfo.productName}</div>
            <div className="productPrice">
              <div>
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
                <ul className="shippingFeeLists">
                  개당 {productInfo.shippingFee}원
                </ul>
                <li
                  className={
                    this.state.buttonValue == true
                      ? 'shippingFeeNone'
                      : 'shippingLists'
                  }
                >
                  <div className="typeBox">
                    <p className="shippingType">배송 타입</p>
                    <p className="shippingTypeValue">
                      {productInfo.shippingTypeValue}
                    </p>
                  </div>
                  <div className="typeBox">
                    <p className="payType">결제 방식</p>
                    <p className="payTypeValue">{productInfo.payTypeValue}</p>
                  </div>
                </li>
              </div>
              <bitton className="shippingFeeButton" onClick={this.buttonClick}>
                ∨
              </bitton>
            </div>
            <div className="contour" />
            <div className="optionBox">
              <p>옵션 선택</p>
              <div className="optionTop">
                <div className="flexBox" onClick={this.buttonClick}>
                  <p className="firstLeftText">제품 선택</p>
                  <p className="firstRightText">∨</p>
                </div>
                <div className="firstOnOf">
                  <div className="firstOptionHover">
                    <div className="optionFlexBox ">
                      <p className="optionLeftText">
                        1. 캐더린 통수납 침대 SS 프레임만
                      </p>
                      <p className="optionRightText">189,000원~</p>
                    </div>
                  </div>
                  <div className="secondOptionHover">
                    <div className="optionFlexBox">
                      <p className="optionLeftText">
                        2. 캐더린린론 수납 침대 AS 프레임만
                      </p>
                      <p className="optionRightText">229,000원~</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="optionBottom">
                <div className="flexBox">
                  <p className="secondLeftText">색상 선택</p>
                  <p className="secondRightText">∨</p>
                </div>
                <div className="secondOnOff">
                  <div className="optionFlexBox ">
                    <p className="optionLeftText">1. 화이트</p>
                  </div>
                  <div className="optionFlexBox ">
                    <p className="optionLeftText">2. 블루</p>
                  </div>
                </div>
              </div>
              <div className="buyButtons">
                <button className="shoppingB1asket">장바구니</button>
                <button className="shoppingBasket">바로구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
