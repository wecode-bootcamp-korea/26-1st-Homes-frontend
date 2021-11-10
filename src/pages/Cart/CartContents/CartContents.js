import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProduct from '../CartedProduct/CartedProduct';
import './CartContents.scss';

// TODO 플러스 마이너스 수량 체크
// TODO: 상품 삭제
// TODO: 체크박스
// TODO: 주문 버튼 누르면 브랜드명, 사진, 이름, 색상, 개수, 상품금액 정보 전달

export class CartContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateQuantity: 1,
      peymentTabel: [],
      cartDataLists: [],
      dataList: [{ id: 1, quantity: 2 }],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.116:8000/carts', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartDataLists: data.cart_items,
          peymentTabel: data,
        });
      });
  }

  isUpdateQuantity = (updateQuantity, cart_id) => {
    fetch(`http://10.58.1.116:8000/carts/${cart_id}`, {
      method: 'PETCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
      body: {
        quantity: updateQuantity,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('is Worked');
      });
  };

  isDeleteProductOne = cart_id => {
    fetch(`http://10.58.1.116:8000/carts/delete/${cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
    }).then(res => {
      this.setState({
        cartDataLists: this.state.cartDataLists.filter(product => {
          if (product.cart_id === cart_id) {
            return false;
          }
          return true;
        }),
      });
    });
  };

  isMinusQuantity = () => {
    const { updateQuantity, cartDataLists } = this.state;

    console.log('minus');
    this.setState({ updateQuantity: 1 });

    if (cartDataLists.quantity === 1) {
      this.setState({ updateQuantity: 1 });
    } else if (cartDataLists.quantity > 1) {
      this.setState(prev => ({ updateQuantity: prev.updateQuantity - 1 }));
    }
    console.log(updateQuantity);
  };

  isPlusQuantity = () => {
    const { updateQuantity, cartDataLists } = this.state;

    console.log('plus');

    this.setState(prev => ({ updateQuantity: prev.updateQuantity + 1 }));
    console.log(updateQuantity);
  };

  priceRgu = price => {
    const result = Math.round(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result;
  };

  render() {
    const { cartDataLists, peymentTabel, quantityLists } = this.state;
    const { total_product_price, payment_price, prepayment_delivery_fee } =
      peymentTabel;

    const selectNumner = cartDataLists.length;

    return (
      <div className="CartContents">
        <div className="cartInfo">
          <div className="cartInfoTitle">
            <h1 className="infoTitle">
              {selectNumner}개의 상품을 선택하셨어요
            </h1>
            <h1 className="infoTitle">
              예상 결제 금액은
              {this.priceRgu(total_product_price)}원 이에요
            </h1>
          </div>
          <div className="priceInfo">
            <div className="totalPriceWrap">
              <span className="totalPrice">총 상품 금액</span>
              <span className="totalProductPrice">
                {this.priceRgu(payment_price)}원
              </span>
            </div>
            <div className="totalPriceWrap">
              <span className="totalPrice">총 배송비</span>
              <span className="totalProductPrice">
                {this.priceRgu(prepayment_delivery_fee)}원 + 착불 배송비
              </span>
            </div>
          </div>

          <CheckBox />
        </div>

        {cartDataLists.map(cart => {
          return (
            <CartedProduct
              key={cart.cart_id}
              {...cart}
              quantityLists={quantityLists}
              paymentPrice={cart.payment_price}
              prepaymentDeliveryFee={cart.prepayment_delivery_fee}
              totalProductPrice={cart.total_product_price}
              priceRgu={this.priceRgu}
              isMinusQuantity={this.isMinusQuantity}
              isPlusQuantity={this.isPlusQuantity}
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
          <span className="totalNumber">총 {selectNumner} 개</span>
          <button className="order">
            {this.priceRgu(total_product_price)}원 구매하기
          </button>
        </div>
      </div>
    );
  }
}

export default CartContents;
