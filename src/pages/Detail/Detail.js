import React, { Component } from 'react';
import './Detail.scss';
//나중에 컴포넌트화 할때 쓸 코드입니다.
// import ProductSelectOptions from './ProductSelectOptions/ProductSelectOptions';

export class Detail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      buttonValue: true,
      buttonDropDown: true,
      secondDropDown: true,
      productName: '제품 이름',
      productColor: '색상 이름',
      quantityCalculation: 1,
      quantityPrice: 0,
      productPrice: 0,
      buyBox: true,
      imageChange: true,
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data[0],
        });
      });
  }

  shippingButtonClick = () => {
    const { buttonValue } = this.state;
    this.setState({
      buttonValue: buttonValue === true ? false : true,
    });
  };

  optionButtonClick = () => {
    const { buttonDropDown } = this.state;
    this.setState({
      buttonDropDown: buttonDropDown === true ? false : true,
    });
  };

  optionSelectButton = option => {
    const { buttonDropDown, secondDropDown } = this.state;
    this.setState({
      buttonDropDown: buttonDropDown === true ? false : true,
      productPrice: option.price,
      productName: option.name,
      secondDropDown: secondDropDown === true ? false : true,
    });
  };

  colorSelectButton = colorOption => {
    const { secondDropDown, productPrice, buyBox } = this.state;
    this.setState({
      secondDropDown: secondDropDown === true ? false : true,
      productColor: colorOption.name,
      quantityCalculation: 1,
      quantityPrice: productPrice,
      buyBox: buyBox === false ? false : false,
    });
  };

  minusButton = () => {
    const { quantityCalculation } = this.state;
    if (quantityCalculation > 1) {
      this.setState({
        quantityCalculation: quantityCalculation - 1,
      });
    }
  };

  plusButton = () => {
    const { quantityCalculation, productPrice } = this.state;
    if (productPrice !== 0) {
      this.setState({
        quantityCalculation: quantityCalculation + 1,
      });
    }
  };

  removeButton = () => {
    const { buyBox } = this.state;
    this.setState({
      buyBox: buyBox === false,
    });
  };

  slidePrevImage = () => {
    const { imageChange } = this.state;
    this.setState({
      imageChange: true,
    });
    console.log(imageChange);
  };

  slideNextImage = () => {
    const { imageChange } = this.state;
    this.setState({
      imageChange: false,
    });
    console.log(imageChange);
  };
  render() {
    const {
      imageChange,
      productInfo,
      buttonValue,
      productName,
      buttonDropDown,
      productColor,
      quantityCalculation,
      secondDropDown,
      quantityPrice,
      buyBox,
    } = this.state;

    const multiplyPrice = quantityCalculation * quantityPrice;

    return (
      <div className="Detail">
        <div className="imageAndProduct">
          <button className="imagePrevButton" onClick={this.slidePrevImage}>
            ＜
          </button>
          <div className="imageWrap">
            <img
              className="imageSize"
              alt="제품사진"
              src={productInfo.image && productInfo.image[0]}
            />
            <img
              className={imageChange === true ? 'imageSize' : 'imageSize2'}
              alt="제품사진"
              src={productInfo.image && productInfo.image[1]}
            />
          </div>
          <button className="imageNextButton" onClick={this.slideNextImage}>
            ＞
          </button>
          <div className="productInformation">
            <div className="brandName">{productInfo.company}</div>
            <div className="productName">{productInfo.name}</div>
            <div className="productPrice">
              <div>
                <p className="cost">{productInfo.displayed_price}</p>
                <p className="percent">{productInfo.discount_rate}%</p>
              </div>
              <div className="discountPriceBox">
                <p className="discountPrice">
                  {productInfo.discounted_price}
                  <span className="won">원</span>
                </p>
              </div>
            </div>
            <div className="grade">
              <div className="starPointText">평점</div>
              <div className="stars">
                <img className="star" alt="별" src="/images/star.png" />
              </div>

              <span className="starPoint">{productInfo.star_point}</span>
            </div>
            <div className="shippingFeeBox">
              <div className="shippingFee">배송비</div>
              <div className="shippingListsBox">
                <ul className="shippingFeeLists">
                  개당 {productInfo.delivery_fee}원
                </ul>
                <li
                  className={
                    buttonValue === true ? 'shippingFeeNone' : 'shippingLists'
                  }
                >
                  <div className="typeBox">
                    <p className="shippingType">배송 타입</p>
                    <p className="shippingTypeValue">
                      {productInfo.delivery_type}
                    </p>
                  </div>
                  <div className="typeBox">
                    <p className="payType">결제 방식</p>
                    <p className="payTypeValue">{productInfo.payment_type}</p>
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
              <div
                onClick={this.optionButtonClick}
                className={
                  buttonDropDown === true ? 'dropDownOff' : 'dropDownOn'
                }
              >
                {productName}
              </div>
              <div className={buttonDropDown === true ? 'downOff' : 'downOn'}>
                {productInfo.product &&
                  productInfo.product.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className="selectBox"
                        onClick={() => this.optionSelectButton(option)}
                      >
                        <div className="textFlex">
                          <div>{index + 1}.</div>
                          <div className="clickBox">{option.name}</div>
                        </div>
                        <div className="priceBox">{option.price}원~</div>
                      </div>
                    );
                  })}
              </div>
              <div
                className={
                  secondDropDown === true ? 'dropDownOff2' : 'dropDownOn2'
                }
              >
                {productColor}
              </div>
              <div className={secondDropDown === true ? 'downOff2' : 'downOn2'}>
                {productInfo.color &&
                  productInfo.color.map((colorOption, index) => {
                    return (
                      <div
                        key={index}
                        className="selectBox2"
                        onClick={() => this.colorSelectButton(colorOption)}
                      >
                        <div>{index + 1}.</div>
                        <div className="clickBox">{colorOption.name}</div>
                      </div>
                      // 나중에 컴포넌트화 시킬 때 쓸 코드 입니다.
                      // <div key={option.id}>
                      //   <ProductSelectOptions
                      //     id={option.id}
                      //     productName={option.productName}
                      //     productPrice={option.productPrice}
                      //     // secondDropDown={this.secondDropDown}
                      //     optionSelectButton={this.optionSelectButton}
                      //   />
                      // </div>
                    );
                  })}
              </div>
              <div className="boxAndBuy">
                <div className={buyBox === true ? 'buyBoxOff' : ''}>
                  <div className="QuantityBox">
                    <div className="closeButtonFlex">
                      <div className="nameAndColor">
                        {productName} / {productColor}
                      </div>
                      <button
                        onClick={this.removeButton}
                        className="removeButton"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="buttonsAndPrice">
                      <div className="twoButtons">
                        <button
                          onClick={this.minusButton}
                          className="minusButton"
                        >
                          -
                        </button>
                        <div className="calculator">{quantityCalculation}</div>
                        <button
                          onClick={this.plusButton}
                          className="plusButton"
                        >
                          +
                        </button>
                      </div>
                      <div className="priceCalculator">{multiplyPrice}원</div>
                    </div>
                  </div>
                  <div className="priceBox">
                    <div className="QuantityAndPrice">
                      <div className="QuantityBottom">
                        총 {quantityCalculation}개
                      </div>
                      <div className="PriceBottom">{multiplyPrice}원</div>
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
