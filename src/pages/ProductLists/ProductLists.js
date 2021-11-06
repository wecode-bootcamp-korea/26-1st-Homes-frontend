import React, { Component } from 'react';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import Modal from '../../component/Modal/Modal';
import '../ProductLists/ProductLists.scss';

class ProductLists extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      modalInfo: [],
      isModalOn: false,
    };
  }

  componentDidMount() {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(info => {
        this.setState({
          product: info,
        });
      });

    fetch('/data/modalData.json')
      .then(res => res.json())
      .then(sequence => {
        this.setState({
          modalInfo: sequence,
        });
      });
  }

  //모달창 on/off 함수 구현 시작

  handleClick = () => {
    this.setState(state => ({
      isModalOn: !state.isModalOn,
    }));
  };

  render() {
    const { product, modalInfo, isModalOn, handleBtn } = this.state;
    return (
      <div className="Container">
        <div className="categoryTitle">
          <p>침대</p>

          <div className="checkBox">
            <button className="filterBtn" onClick={this.handleClick}>
              인기순 ▼
              {isModalOn &&
                modalInfo.map(modalMenu => {
                  return (
                    <Modal
                      key={modalMenu.id}
                      sequence={modalMenu.sequence}
                      handleBtn={handleBtn}
                    />
                  );
                })}
            </button>
          </div>
        </div>

        {/* <div className="category">
          <p>일반침대</p>
          <p>수납침대</p>
          <p>LED침대</p>
          <p>깔판/저상형침대</p>
          <p>2층/벙커침대</p>
          <p>모션베드</p>
          <p>패밀리침대</p>
          <p>돌침대/흙침대</p>
        </div> */}
        <div className="productContainerFlex">
          {product.map(productInfo => {
            const { id, brandName, productName, percent, discountPrice } =
              productInfo;
            return (
              <ProductContainer
                key={id}
                id={id}
                name={brandName}
                productName={productName}
                percent={percent}
                discountPrice={discountPrice}
              />
            );
          })}
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
