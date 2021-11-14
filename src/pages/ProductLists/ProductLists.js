import React, { Component } from 'react';
import ProductContainer from '../../component/ProductContainer/ProductContainer';
import Modal from '../../component/Modal/Modal';
import { CHAN_URL } from '../../config';
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
    fetch(`${CHAN_URL}/products?SubCategoryId=1&ordering=-review_star_point`)
      .then(res => res.json())
      .then(info => {
        this.setState({
          products: info.product_groups,
          copiedProducts: info.product_groups,
        });
      });
  }

  componentDidUpdate(prevProps, _) {
    const { location } = this.props;
    if (prevProps.location.search !== location.search) {
      fetch(
        `${CHAN_URL}/products?SubCategoryId=1&ordering=review_star_point&${location.search}`
      )
        .then(res => res.json())
        .then(product => {
          this.setState({
            products: product.product_groups,
            copiedProducts: product.product_groups,
          });
        });
    }
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

  sortStarPoint = (a, b) => {
    return b.star_point - a.star_point;
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
    } else if (sequence === '별점순') {
      products = copiedProducts.sort(this.sortStarPoint);
    }
    this.setState({
      products,
    });
  };

  movePage = index => {
    const { history } = this.props;
    const limit = 16;
    const query = `limit=${limit}&offset=${index * limit}`;
    history.push(`/product-lists?${query}`);
  };

  render() {
    const { products, isModalOn } = this.state;

    return (
      <div className="Container">
        <div className="categoryTitle">
          <p>침대</p>

          <div className="filterBtn" onClick={this.toggleModal}>
            <p>Filtering ▼</p>
            {isModalOn && (
              <Modal className="modal" filterProducts={this.filterProducts} />
            )}
          </div>
        </div>

        <div className="goDetail">
          <div className="singleProduct">
            {products &&
              products.map(productInfo => (
                <ProductContainer
                  key={productInfo.id}
                  {...productInfo}
                  movepage={this.movePage}
                />
              ))}
          </div>
        </div>

        <div className="pageNation">
          <button onClick={() => this.movePage(0)} className="firstPage">
            1
          </button>
          <button onClick={() => this.movePage(1)} className="secondPage">
            2
          </button>
        </div>
      </div>
    );
  }
}

export default ProductLists;
