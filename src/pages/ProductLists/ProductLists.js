import React, { Component } from 'react';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import Modal from '../../component/Modal/Modal';
import '../ProductLists/ProductLists.scss';

class ProductLists extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      copiedProducts: [],
      isModalOn: false,
    };
  }

  componentDidMount() {
    // fetch('/data/productData.json')
    //   .then(res => res.json())
    //   .then(info => {
    //     this.setState({
    //       products: info,
    //       copiedProducts: info,
    //     });
    //   });

    fetch(
      'http://10.58.5.129:8000/product/products?SubCategoryId=1&ordering=-review_star_point'
    )
      .then(res => res.json())
      .then(info => {
        // console.log(info);
        this.setState({
          products: info.product_groups,
          copiedProducts: info.product_groups,
        });
      });
  }

  toggleModal = () => {
    this.setState(state => ({
      isModalOn: !state.isModalOn,
    }));
  };

  sortLowPrice = (a, b) => {
    return a.discounted_price - b.discounted_price;
  };

  sortHighPrice = (a, b) => {
    return b.discounted_price - a.discounted_price;
  };

  sortIdStep = (a, b) => {
    return a.id - b.id;
  };

  filterProducts = e => {
    let products;
    const sequence = e.target.value;
    const { copiedProducts } = this.state;

    if (sequence === 'all') {
      products = copiedProducts.sort(this.sortIdStep);
    }

    if (sequence === '낮은가격순') {
      products = copiedProducts.sort(this.sortLowPrice);
    } else if (sequence === '높은가격순') {
      products = copiedProducts.sort(this.sortHighPrice);
    }
    this.setState({
      products,
    });
  };

  render() {
    // console.log(this.state.products);

    const { products, isModalOn } = this.state;
    return (
      <div className="Container">
        <div className="categoryTitle">
          <p>침대</p>

          <div className="filterBtn" onClick={this.toggleModal}>
            <p>Filtering ▼</p>
            {isModalOn && <Modal filterProducts={this.filterProducts} />}
          </div>
        </div>

        <div className="singleProduct">
          {products.map(productInfo => (
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
