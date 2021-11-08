import React, { Component } from 'react';
import CheckBox from './component/CheckBox';
import './Cart.scss';

export class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartBox">
          {/* TODO: 조건문 걸어줄 부분 => 카트에 상품이 있으면 나타내기 */}
          <div className="cartInfo">
            <div className="cartInfoTitle">
              <h1 className="infoTitle">n개의 상품을 선택하셨어요</h1>
              <h1 className="infoTitle">예상 결제 금액은 n00,000원 이에요</h1>
            </div>
            <div className="priceInfo">
              <div className="totalPriceWrap">
                <span className="totalPrice">총 상품 금액</span>
                <span className="totalProductPrice">N00,000원</span>
              </div>
              <div className="totalPriceWrap">
                <span className="totalPrice">총 배송비</span>
                <span className="totalProductPrice">0원 + 착불 배송비</span>
              </div>
              <div className="totalPriceWrap point">
                <span className="totalPrice">적립 포인트</span>

                <div className="pointInfo">
                  <span className="totalProductPrice">0p</span>
                  <span className="moreReviewMorePoint">
                    리뷰를 작성하면 최대 3,000p 추가 적립!
                  </span>
                </div>
              </div>
            </div>

            <CheckBox />
          </div>
          {/* TODO: map 으로 돌려질 부분 */}
          <div className="cartProducts">
            <h1 className="brandName">삼익가구</h1>
            <CheckBox />
            {/* <div className="cartCheckBox">
              <input type="checkBox" />
              <button className="cleanChooseThings">삭제</button>
            </div> */}
            <div className="productOptionWrap">
              <div className="productOptionInfo">
                <div className="productInfo">
                  <img
                    className="productImg"
                    src="./images/HookahWoody.jpeg"
                    alt="product img"
                  />
                  <div className="productName">
                    빅터 슬라이딩 빅수납 슈퍼싱글 침대 프레임(안전가드+계단포함)
                  </div>
                </div>
              </div>
              <div className="productOption">
                <div className="optionWrap">
                  <div className="optionInfo">
                    <span className="optionName">1. 아무거나 침대</span>
                    <span className="optionColor">그레이</span>
                  </div>
                  <img
                    className="productClean"
                    src="./images/cross.png"
                    alt="product clean"
                  />
                </div>
                <div className="productQuantity">
                  <div className="quantity">
                    <img
                      className="minus"
                      src="./images/minus.png"
                      alt="minus"
                    />
                    <span class="number">1</span>
                    <img className="plus" src="./images/plus.png" alt="plus" />
                  </div>
                  <span className="optionPrice"> 189,000원</span>
                </div>
              </div>
            </div>
            <div className="totalPriceOrder">
              상품 금액 399,999원 + 배송비 착불
            </div>
          </div>
          <div className="notification">
            <div className="notificationTitle">안내사항</div>
            <ul>
              <li className="notiList">
                장바구니 상품은 최대 10일간 저장됩니다.
              </li>
              <li className="notiList">
                브랜드별로 각각의 배송비 정책이 적용됩니다.
              </li>
              <li className="notiList">
                제주도 혹은 도서산간 지역의 경우 별도의 배송비가 부과될 수
                있습니다.
              </li>
              <li className="notiList">제주도 흑돼지 맛있겠다.</li>
            </ul>
          </div>
          <div className="total">
            <span className="totalNumber">총 n 개</span>
            <button className="order">588,000원 구매하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
