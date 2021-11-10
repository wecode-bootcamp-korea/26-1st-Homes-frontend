import React, { Component } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CartedProduct from '../CartedProduct/CartedProduct';
import './CartContents.scss';

export class CartContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      cartDataLists: [],
    };
  }
  //${플러스 마이너스 딜리트 세개중에 하나}/${id},

  componentDidMount() {
    fetch('http://10.58.1.116:8000/carts', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ cartDataLists: data });
        console.log(this.props.isCartFill(data));
      });
  }

  isMinusQuantity = quantity => {
    // const { quantity } = this.props;
    console.log('minus');

    if (quantity === 1) {
      this.setState({ quantity: 1 });
    } else if (quantity > 1) {
      this.setState(prev => ({ quantity: prev.quantity - 1 }));
    }
  };

  isPlusQuantity = () => {
    console.log('plus');

    this.setState(prev => ({ quantity: prev.quantity + 1 }));
  };

  isDeleteProductOne = id => {
    // TODO: fetch 를 사용해서 백엔드에 호출한다
    fetch(`http://10.58.1.116:8000/carts/&{id}`, {
      method: 'DELETE',
      Headers: {
        // 로컬에서 토근 받기 = localStorage.getItem("Token"))
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.I5qie6smz2YzB6OsqsGevPDZ7QuS-Z4dtnrXEYoaLw0',
      },
      // body: {필요하다면 전달해줄것}
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

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
    const { cartDataLists } = this.state;
    // const selectNumner = cartDataLists.length;

    return (
      <div className="CartContents">
        <div className="cartInfo">
          <div className="cartInfoTitle">
            <h1 className="infoTitle">selectNumner개의 상품을 선택하셨어요</h1>
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

        {/* {cartDataLists.map(product => {
          // console.log(product);
          return (
            <CartedProduct
              id={product.cart_id}
              company={product.company}
              productName={product.product_name}
              quantity={product.quantity}
              productColor={product.color}
              productPrice={Math.round(product.price)}
              productImg={product.product_image}
              deliveryPaymentType={product.delivery_payment_type}
              deliveryFee={Math.round(product.delivery_fee)}
              isMinusQuantity={this.isMinusQuantity}
              isPlusQuantity={this.isPlusQuantity}
              isDeleteProductOne={this.isDeleteProductOne}
            />
          );
        })} */}
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
          <span className="totalNumber">총 selectNumner 개</span>
          <button className="order">588,000원 구매하기</button>
        </div>
      </div>
    );
  }
}

export default CartContents;

// const Data = [
//   {
//     product_name: cart.product.name,
//     quantity: cart.quantity,
//     price: cart.product.price,
//     color: cart.color.name,
//     product_image:
//       cart.product.product_group.productimage_set.all()[0].image_url,
//     cart_id: cart.id,
//     company: cart.product.product_group.company,
//     delivery_payment_type: cart.product.product_group.delivery.payment_type,
//     delivery_fee: cart.product.product_group.delivery.delivery_fee,
//   },
// ];
