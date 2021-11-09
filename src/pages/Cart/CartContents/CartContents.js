import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProduct from '../CartedProduct/CartedProduct';
import './CartContents.scss';

export class CartContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      dataLists: [1, 2, 3, 4],
      cartedProductLists: [
        { id: 1, quantity: 33 },
        { id: 2, quantity: 2 },
      ],
    };
  }
  //${플러스 마이너스 딜리트 세개중에 하나}/${id},

  // componentDidMount() {
  //   fetch('http://10.58.1.116:8000/carts/', {
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.cart_itmes[0].color);
  //       this.setState({ cartLists: data.cart_itmes[0] });
  //     });
  // }

  isMinusQuantity = () => {
    const { quantity } = this.state;

    if (quantity === 1) {
      this.setState({ quantity: 1 });
    } else if (quantity > 1) {
      this.setState(prev => ({ quantity: prev.quantity - 1 }));
    }
  };

  isPlusQuantity = () => {
    this.setState(prev => ({ quantity: prev.quantity + 1 }));
  };

  isDeleteProductOne = id => {
    // fetch 를 사용해서 백엔드에 호출한다
    // fetch(`http://10.58.1.116:8000/carts/&{id}`, {
    // method: 'DELETE',
    // Headers: {
    //       Authorization: 로컬에서 토근 받기 = localStorage.getItem("Token"))
    //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
    //     },
    // body: {필요하다면 전달해줄것}
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })

    const { dataLists } = this.state;
    const listUpdate = dataLists.filter(
      deleted => id === deleted && dataLists.remove(deleted)
    );
    this.setState({ dataLists: listUpdate });
  };

  // TODO 플러스 마이너스 수량 체크
  // TODO: 상품 삭제
  // TODO: 체크박스
  // TODO: 주문 버튼 누르면 브랜드명, 사진, 이름, 색상, 개수, 상품금액 정보 전달

  render() {
    const { id, quantity, cartedProductLists } = this.state;

    return (
      <div className="CartContents">
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
          </div>

          <CheckBox />
        </div>
        {/* TODO: map 으로 돌려질 부분 */}
        {cartedProductLists.map(product => {
          return (
            <CartedProduct
              id={product.id}
              isMinusQuantity={this.isMinusQuantity}
              isPlusQuantity={this.isPlusQuantity}
              quantity={product.quantity}
              isDeleteProductOne={this.isDeleteProductOne}
            />
          );
        })}
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
    );
  }
}

export default CartContents;
