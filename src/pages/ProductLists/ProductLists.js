import React, { Component } from 'react';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import Modal from '../../component/Modal/Modal';
import '../ProductLists/ProductLists.scss';

class ProductLists extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      newProduct: [],
      isModalOn: false,
    };
  }

  componentDidMount() {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(info => {
        this.setState({
          product: info,
          newProduct: info,
        });
      });
  }

  //모달창 on/off 함수 구현 시작

  handleClick = () => {
    this.setState(state => ({
      isModalOn: !state.isModalOn,
    }));
  };

  //filtering button functionality
  filteringBtns = e => {
    let product;

    const { newProduct } = this.state;
    if (e.target.value === 'all') {
      product = newProduct;
    } else if (e.target.value === '낮은가격순') {
      product = newProduct
        .filter(item => item.discounted_price)
        .sort((a, b) => a.discounted_price - b.discounted_price);
    } else if (e.target.value === '높은가격순') {
      product = newProduct
        .filter(item => item.discounted_price)
        .sort((a, b) => b.discounted_price - a.discounted_price);
    }
    this.setState({
      product: product,
    });
  };

  render() {
    const { product, isModalOn } = this.state;
    return (
      <div className="Container">
        <div className="categoryTitle">
          <p>침대</p>

          <div className="filterBtn" onClick={this.handleClick}>
            <p>Filtering ▼</p>
            {isModalOn && <Modal filteringBtns={this.filteringBtns} />}
          </div>
        </div>

        <div className="singleProduct">
          {product.map(productInfo => (
            <ProductContainer key={productInfo.id} {...productInfo} />
          ))}
        </div>
        <div className="pageNation">
          <span className="firstPage">1</span>
          <span className="secondPage">2</span>
        </div>
      </div>
    );
  }
}

export default ProductLists;
