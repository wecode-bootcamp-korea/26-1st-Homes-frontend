import React, { Component } from 'react';
import './Detail.scss';
import priceComma from '../../component/Utils/utils.js';

export class Detail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      shippingDropdown: true,
      productOptionDropdown: true,
      colorOptionDropdown: true,
      productName: '제품 이름',
      productColor: '색상 이름',
      productQuantity: 1,
      quantityPrice: 0,
      productPrice: 0,
      quantityBox: true,
      imageChange: true,
      imagePage: 1,
      productId: 0,
      colorId: 0,
    };
  }

  // 목데이터
  componentDidMount() {
    fetch(
      `http://10.58.0.131:8000/products/product/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data.product_group,
        });
      });
  }

  shippingDropdown = () => {
    const { shippingDropdown } = this.state;
    this.setState({
      shippingDropdown: !shippingDropdown === true,
    });
  };

  productOptionDropdown = () => {
    const { productOptionDropdown } = this.state;
    this.setState({
      productOptionDropdown: !productOptionDropdown === true,
    });
  };

  productOptionSelect = option => {
    const { productOptionDropdown, colorOptionDropdown } = this.state;
    this.setState({
      productOptionDropdown: !productOptionDropdown === true,
      productPrice: option.price,
      productName: option.name,
      productId: option.id,
      colorOptionDropdown: !colorOptionDropdown === true,
    });
  };

  colorOptionSelect = colorOption => {
    const { colorOptionDropdown, productPrice } = this.state;
    this.setState({
      colorOptionDropdown: !colorOptionDropdown === true,
      productColor: colorOption.name,
      productQuantity: 1,
      quantityPrice: productPrice,
      quantityBox: false,
      colorId: colorOption.id,
    });
  };

  quantityMinus = () => {
    const { productQuantity } = this.state;
    if (productQuantity > 1) {
      this.setState({
        productQuantity: productQuantity - 1,
      });
    }
  };

  quantityPlus = () => {
    const { productQuantity, productPrice } = this.state;
    if (productPrice !== 0) {
      this.setState({
        productQuantity: productQuantity + 1,
      });
    }
  };

  quantityBoxRemove = () => {
    this.setState({
      quantityBox: true,
      colorId: 0,
    });
  };

  slidePrevImage = () => {
    this.setState({
      imageChange: true,
      imagePage: 1,
    });
  };

  slideNextImage = () => {
    this.setState({
      imageChange: false,
      imagePage: 2,
    });
  };

  shippingBasketDataTransfer = () => {
    const { productQuantity, productId, colorId } = this.state;

    if (colorId !== 0) {
      fetch('http://10.58.7.212:8000/carts', {
        method: 'POST',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0', // 발행된 액세스 토큰
        },
        body: JSON.stringify({
          ProductId: productId,
          ColorId: colorId,
          quantity: productQuantity,
        }),
      }).then(response => response.json());
      alert('물건을 장바구니에 담았어요!');
    } else {
      alert('장바구니에 담을 제품을 골라주세요!');
    }
  };

  orderDataTransfer = () => {
    const { productQuantity, productId, colorId } = this.state;
    if (colorId !== 0) {
      fetch('http://10.58.7.212:8000/carts', {
        method: 'POST',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
        },
        body: JSON.stringify({
          ProductId: productId,
          ColorId: colorId,
          quantity: productQuantity,
        }),
      }).then(response => response.json());
    }
  };

  render() {
    const {
      imageChange,
      productInfo,
      shippingDropdown,
      productName,
      productOptionDropdown,
      productColor,
      productQuantity,
      colorOptionDropdown,
      quantityPrice,
      quantityBox,
      imagePage,
    } = this.state;

    const multiplyPrice = productQuantity * quantityPrice;
    const starView = productInfo.star_point * 20;

    return (
      <div className="Detail">
        <div className="imageAndProduct">
          <div className="imageWrap">
            <img
              className="firstImage"
              alt="제품사진"
              src={productInfo.image && productInfo.image[0]}
            />
            <img
              className={imageChange === true ? 'firstImage' : 'secondeImgae'}
              alt="제품사진"
              src={productInfo.image && productInfo.image[1]}
            />
          </div>
          <button className="imagePrevButton" onClick={this.slidePrevImage}>
            ＜
          </button>
          <button className="imageNextButton" onClick={this.slideNextImage}>
            ＞
          </button>
          <div className="imagePage">{imagePage} / 2</div>
          <div className="productInformation">
            <div className="brandName">{productInfo.company}</div>
            <div className="productName">{productInfo.name}</div>
            <div className="productPrice">
              <div>
                <p className="cost">
                  {priceComma(productInfo.displayed_price)}
                </p>
                <p className="disconutPercent">{productInfo.discount_rate}%</p>
              </div>
              <div className="discountPriceBox">
                <p className="discountPrice">
                  {priceComma(productInfo.discounted_price)}
                  <span className="won">원</span>
                </p>
              </div>
            </div>
            <div className="grade">
              <div className="starPointText">평점</div>
              <div className="starBox" style={{ width: starView }}>
                <img
                  className="pointOfStar"
                  alt="별"
                  src="/images/파란별들.png"
                />
              </div>
              <img
                className="backgroundStar"
                alt="별"
                src="/images/회색별들.png"
              />
              <span className="starPoint">{productInfo.star_point}</span>
            </div>
            <div className="shippingFeeBox">
              <div className="shippingFee">배송비</div>
              <div className="shippingListsBox">
                <ul className="shippingFeeLists">
                  개당 {priceComma(productInfo.delivery_fee)}원
                </ul>
                <li
                  className={
                    shippingDropdown === true
                      ? 'shippingFeeNone'
                      : 'shippingLists'
                  }
                >
                  <div className="shippingTypeBox">
                    <p className="shippingType">배송 타입</p>
                    <p>{productInfo.delivery_type}</p>
                  </div>
                  <div className="shippingTypeBox">
                    <p className="paymentType">결제 방식</p>
                    <p>{productInfo.payment_type}</p>
                  </div>
                </li>
              </div>
              <button
                className="shippingFeeButton"
                onClick={this.shippingDropdown}
              >
                ∨
              </button>
            </div>
            <div className="optionContour" />
            <div className="optionBox">
              <p>옵션 선택</p>
              <div
                onClick={this.productOptionDropdown}
                className={
                  productOptionDropdown === true
                    ? 'optionDropdownOffRadius'
                    : 'optionDropdownOnRadius'
                }
              >
                {productName}
              </div>
              <div
                className={
                  productOptionDropdown === true
                    ? 'optionDropdownOff'
                    : 'optionDropdownOn'
                }
              >
                {productInfo.product &&
                  productInfo.product.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className="selectBox"
                        onClick={() => this.productOptionSelect(option)}
                      >
                        <div className="textFlex">
                          <div>{index + 1}.</div>
                          <div>{option.name}</div>
                        </div>
                        <div className="optionPrice">
                          {priceComma(option.price)}원~
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div
                className={
                  colorOptionDropdown === true
                    ? 'colorDropdownOffRadius'
                    : 'colorDropdownOnRadius'
                }
              >
                {productColor}
              </div>
              <div
                className={
                  colorOptionDropdown === true
                    ? 'colorOptionDropdownOff'
                    : 'colorOptionDropdownOn'
                }
              >
                {productInfo.color &&
                  productInfo.color.map((colorOption, index) => {
                    return (
                      <div
                        key={index}
                        className="colorSelectBox"
                        onClick={() => this.colorOptionSelect(colorOption)}
                      >
                        <div>{index + 1}.</div>
                        <div>{colorOption.name}</div>
                      </div>
                    );
                  })}
              </div>
              <div className="boxAndBuy">
                <div className={quantityBox === true ? 'buyBoxOff' : ''}>
                  <div className="quantityBox">
                    <div className="closeButtonFlex">
                      <div className="nameAndColor">
                        {productName} / {productColor}
                      </div>
                      <button
                        onClick={this.quantityBoxRemove}
                        className="quantityBoxRemoveButton"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="buttonsAndPrice">
                      <div className="twoButtonsBox">
                        <button
                          onClick={this.quantityMinus}
                          className="quantityMinusButton"
                        >
                          -
                        </button>
                        <div className="calculator">{productQuantity}</div>
                        <button
                          onClick={this.quantityPlus}
                          className="quantityPlusButton"
                        >
                          +
                        </button>
                      </div>
                      <div className="priceCalculator">
                        {priceComma(multiplyPrice)}원
                      </div>
                    </div>
                  </div>

                  <div className="priceBox">
                    <div className="QuantityAndPrice">
                      <div className="QuantityBottom">
                        총 {productQuantity}개
                      </div>
                      <div className="PriceBottom">
                        {priceComma(multiplyPrice)}원
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buyButtons">
                  <button
                    onClick={this.shippingBasketDataTransfer}
                    className="shoppingBasket"
                  >
                    장바구니
                  </button>
                  <button onClick={this.orderDataTransfer} className="nowBuy">
                    바로구매
                  </button>
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
