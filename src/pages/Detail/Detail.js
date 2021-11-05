import React, { Component } from 'react';
import './Detail.scss';

export class Detail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      buttonValue: true,
      buttonDropDown: true,
      secondDropDown: true,
      disabled: false,
      productName: '제품 이름',
      productPrice: 0,
      productColor: '색상 이름',
      quantityCalculation: 1,
    };
  }

  componentDidMount() {
    fetch('http:/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data[0],
        });
      });
  }

  shippingButtonClick = event => {
    this.setState({
      buttonValue: this.state.buttonValue == true ? false : true,
    });
  };

  optionButtonClick = event => {
    this.setState({
      buttonDropDown: this.state.buttonDropDown == true ? false : true,
      secondDropDown: true,
    });
  };

  firstProductSelect = event => {
    this.setState({
      secondDropDown: this.state.secondDropDown == true ? false : true,
      buttonDropDown: true,
      productName: this.state.productInfo.firstProductName,
      productPrice: this.state.productInfo.firstProductPrice,
    });
  };

  secondProductSelect = event => {
    this.setState({
      secondDropDown: this.state.secondDropDown == true ? false : true,
      buttonDropDown: true,
      productName: this.state.productInfo.secondProductName,
      productPrice: this.state.productInfo.secondProductPrice,
    });
  };

  firstProductColor = event => {
    this.setState({
      secondDropDown: this.state.secondDropDown == true ? false : true,
      secondDropDown: true,
      productColor: this.state.productInfo.firstProductColor,
    });
  };

  secondProductColor = event => {
    this.setState({
      secondDropDown: this.state.secondDropDown == true ? false : true,
      secondDropDown: true,
      productColor: this.state.productInfo.secondProductColor,
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
              <bitton
                className="shippingFeeButton"
                onClick={this.shippingButtonClick}
              >
                ∨
              </bitton>
            </div>
            <div className="contour" />
            <div className="optionBox">
              <p>옵션 선택</p>
              <div className="optionTop">
                <bitton className="flexBox" onClick={this.optionButtonClick}>
                  <p className="firstLeftText">{this.state.productName}</p>
                  <p className="firstRightText">∨</p>
                </bitton>
                <div
                  className={
                    this.state.buttonDropDown == true ? 'firstOnOff' : ''
                  }
                >
                  <div className="firstOptionHover">
                    <div
                      className="optionFlexBox "
                      onClick={this.firstProductSelect}
                    >
                      <p className="optionLeftText">
                        1. {productInfo.firstProductName}
                      </p>
                      <p className="optionRightText">
                        {productInfo.firstProductPrice}원~
                      </p>
                    </div>
                  </div>
                  <div className="secondOptionHover">
                    <div
                      className="optionFlexBox"
                      onClick={this.secondProductSelect}
                    >
                      <p className="optionLeftText">
                        2. {productInfo.secondProductName}
                      </p>
                      <p className="optionRightText">
                        {productInfo.secondProductPrice}원~
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="optionBottom">
                <div className="flexBox">
                  <p className="secondLeftText">{this.state.productColor}</p>
                  <p className="secondRightText">∨</p>
                </div>
                <div
                  className={
                    this.state.secondDropDown == true ? 'secondOnOff' : ''
                  }
                >
                  <div className="firstOptionHover">
                    <div
                      className="optionFlexBox "
                      onClick={this.firstProductColor}
                    >
                      <p className="optionLeftText">
                        1. {productInfo.firstProductColor}
                      </p>
                    </div>
                  </div>
                  <div className="secondOptionHover">
                    <div
                      className="optionFlexBox "
                      onClick={this.secondProductColor}
                    >
                      <p className="optionLeftText">
                        2. {productInfo.secondProductColor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxAndBuy">
                <div className="QuantityBox">
                  <div className="closeButtonFlex">
                    <div className="nameAndColor">
                      {this.state.productName} / {this.state.productColor}
                    </div>
                    <button>✕</button>
                  </div>
                  <div className="buttonsAndPrice">
                    <div className="twoButtons">
                      <button className="minusButton">-</button>
                      <div className="calculator">
                        {this.state.quantityCalculation}
                      </div>
                      <button className="plusButton">+</button>
                    </div>
                    <div className="priceCalculator">
                      {this.state.productPrice}
                    </div>
                  </div>
                </div>
                <div className="priceBox">
                  <div className="QuantityAndPrice">
                    <div className="QuantityBottom">
                      총 {this.state.quantityCalculation}개
                    </div>
                    <div className="PriceBottom">
                      {this.state.productPrice}원
                    </div>
                  </div>
                </div>
                <div className="buyButtons">
                  <button className="shoppingBasket">장바구니</button>
                  <button className="nowBuy">바로구매</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
