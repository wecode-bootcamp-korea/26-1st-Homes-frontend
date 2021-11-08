import React, { Component } from 'react';
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
              <div className="totalPrice">
                총 상품 금액{' '}
                <span className="totalProductPrice">n00,000원</span>
              </div>
              <div className="totalPrice">
                총 배송비
                <span className="totalProductPrice">0원 + 착불 배송비</span>
              </div>
              <div className="totalPrice">
                적립 포인트
                <span className="totalProductPrice">0p</span>
                <span className="moreReviewMorePoint">
                  리뷰를 작성하면 최대 3,000p 추가 적립!
                </span>
              </div>
            </div>

            <div className="cartCheckBox">
              {/* TODO: check box는 재사용이 되어야 하므로 component로 따로 빼기 */}
              {/* TODO: input 속 문구와 버튼 문구는 조건문을 통해 변경 */}
              <input type="checkBox" />
              <span className="checkAll">모두선택(some numbers)</span>
              <button className="clearChooseThings">선택 삭제</button>
            </div>
          </div>
          {/* TODO: map 으로 돌려질 부분 */}
          <div className="cartProducts">
            <h1 className="brandName">삼익가구</h1>
            <div className="cartCheckBox">
              <input type="checkBox" />
              <button className="cleanChooseThings">삭제</button>
            </div>
            <div className="productOptionInfo">
              <div className="productInfo">
                <img className="productImg" src="/" alt="product img" />
                <div className="productName">
                  빅터 슬라이딩 빅수납 슈퍼싱글 침대 프레임(안전가드+계단포함)
                </div>
              </div>
            </div>
            <div className="productOption">
              <div className="optionInfo">
                <span className="optionName">1. 아무거나 침대</span>
                <span className="optionColor">그레이</span>
              </div>
              <img className="productClean" src="/" alt="product clean" />
              <div className="productQuantity">
                <img className="minus" src="/" alt="minus" />
                <span class="number">1</span>
                <img className="plus" src="/" alt="plus" />
                <span className="optionPrice"> 189,000원</span>
              </div>
            </div>
            <div className="totalProductPrice">
              상품 금액 399,999원 + 배송비 착불
            </div>
          </div>
          <div className="notification">
            <ul>
              안내사항
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
