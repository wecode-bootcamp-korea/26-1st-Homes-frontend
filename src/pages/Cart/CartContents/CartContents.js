import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProduct from '../CartedProduct/CartedProduct';
import priceComma from '../../../component/Utils/utils';
import './CartContents.scss';

// TODO: 주문 버튼 누르면 브랜드명, 사진, 이름, 색상, 개수, 상품금액 정보 전달
// TODO: 전체 삭제 버튼 구현
// TODO: 수량 조정 버튼

export class CartContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateQuantity: 1,
      cartDataLists: [],
      peymentTabel: [],
      updateDataList: [],
      selectedLists: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.7.212:8000/carts', {
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
    console.log('updateQuantity', updateQuantity);
    fetch(`http://10.58.7.212:8000/carts/${cart_id}`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
      body: JSON.stringify({
        quantity: updateQuantity,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
      });
  };

  isDeleteProductOne = cart_id => {
    fetch(`http://10.58.7.212:8000/carts/${cart_id}`, {
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

  // isDeleteAll = cart_id => {
  //   fetch(`http://10.58.7.212:8000/carts/delete/${cart_id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
  //     },
  //   }).then(res => {
  //     this.setState({
  //       cartDataLists: this.state.cartDataLists.filter(product => {
  //         if (product.cart_id === cart_id) {
  //           return false;
  //         }
  //         return true;
  //       }),
  //     });
  //   });
  // };

  // order = (updateQuantity, product_id, cart_id) => {
  //   fetch(`http://10.58.0.131:8000/order/${cart_id}`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
  //     },
  //     body: {
  //       product_id: product_id,
  //       // color_id: color,
  //       purchase_quantity: updateQuantity,
  //     },
  //   }).then(res => {
  //     this.setState({
  //       cartDataLists: this.state.cartDataLists.filter(product => {
  //         if (product.cart_id === cart_id) {
  //           return false;
  //         }
  //         return true;
  //       }),
  //     });
  //   });
  // };

  getQuantity = (number, cart_id) => {
    const { cartDataLists, updateDataList } = this.state;
    this.setState({
      updateQuantity: number,
      updateDataList: JSON.parse(JSON.stringify(cartDataLists)),
    });
    this.isUpdateQuantity(number, cart_id);

    console.log('updateDataList', updateDataList);
    for (const id of updateDataList) {
      if (cart_id === id.cart_id) {
        id.product.quantity = number;
        console.log('id.product.quantity', id.product.quantity);
      }
    }
  };

  render() {
    const { cartDataLists, peymentTabel, updateQuantity, updateDataList } =
      this.state;
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
              {priceComma(total_product_price)}원 이에요
            </h1>
          </div>
          <div className="priceInfo">
            <div className="totalPriceWrap">
              <span className="totalPrice">총 상품 금액</span>
              <span className="totalProductPrice">
                {priceComma(payment_price)}원
              </span>
            </div>
            <div className="totalPriceWrap">
              <span className="totalPrice">총 배송비</span>
              <span className="totalProductPrice">
                {priceComma(prepayment_delivery_fee)}원 + 착불 배송비
              </span>
            </div>
          </div>

          <CheckBox
            isDeleteAll={this.isDeleteAll}
            selectAll="모두 선택"
            select="선택"
          />
        </div>

        {cartDataLists.map(cart => {
          return (
            <CartedProduct
              key={cart.cart_id}
              {...cart}
              updateQuantity={updateQuantity}
              paymentPrice={cart.payment_price}
              prepaymentDeliveryFee={cart.prepayment_delivery_fee}
              totalProductPrice={cart.total_product_price}
              priceComma={priceComma}
              isDeleteProductOne={this.isDeleteProductOne}
              getQuantity={this.getQuantity}
              // sMinusQuantity={this.isMinusQuantity}
              // isPlusQuantity={this.isPlusQuantity}
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
          <button
            className="order"
            // onClick={this.order(cartDataLists.cart_id, cartDataLists.cart_id)}
          >
            {priceComma(total_product_price)}원 구매하기
          </button>
        </div>
      </div>
    );
  }
}

export default CartContents;
