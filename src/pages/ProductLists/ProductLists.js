import React, { Component } from 'react';
// import Nav from '../../component/Nav/Nav';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import '../ProductLists/ProductLists.scss';

class ProductLists extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sandBag.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data,
        });
      });
  }
  render() {
    const { product } = this.state;

    return (
      <div className="container">
        <div className="categoryTitle">
          <p>침대</p>
          {/* <p className="menu">menu</p> */}
          <select className="selector">
            <option value="fameOrder">인기순</option>
            <option value="NewOrder">최신순</option>
            <option value="lowPriceOrder">낮은 가격 순</option>
            <option value="highPriceOrder">높은 가격 순</option>
            <option value="reviewOrder">리뷰 순</option>
          </select>
        </div>

        <div className="category">
          <p>일반침대</p>
          <p>수납침대</p>
          <p>LED침대</p>
          <p>깔판/저상형침대</p>
          <p>2층/벙커침대</p>
          <p>모션베드</p>
          <p>패밀리침대</p>
          <p>돌침대/흙침대</p>
        </div>
        <div className="productContainerFlex">
          {product.map(product => {
            return (
              <ProductContainer key={product.id} name={product.userName} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductLists;
