import React, { Component } from 'react';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import Modal from '../../component/Modal/Modal';
import '../ProductLists/ProductLists.scss';

class ProductLists extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      modal: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sandBag.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          product: info,
        });
      });

    fetch('http://localhost:3000/data/modalData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(sequence => {
        this.setState({
          modal: sequence,
        });
      });
  }

  searchName = () => {
    const { product } = this.state;
    return product.filter(el => {
      return el.discountPrice >= 300000;
    });
  };

  render() {
    const { product, modal } = this.state;

    return (
      <div className="Container">
        <div className="categoryTitle">
          <p>침대</p>

          <div className="checkBox">
            <button className="filterBtn">
              인기순 ▼
              {modal.map(modalInfo => {
                return <Modal key={modalInfo.id} />;
              })}
            </button>
          </div>
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
          {product.map(productInfo => {
            return (
              <ProductContainer
                key={productInfo.id}
                name={productInfo.brandName}
                productName={productInfo.productName}
                percent={productInfo.percent}
                discountPrice={productInfo.discountPrice}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductLists;
