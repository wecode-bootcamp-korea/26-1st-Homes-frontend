import React, { Component } from 'react';
import '../ProductContainer/ProductContainer.scss';
import { Link } from 'react-router-dom';

class ProductContainer extends Component {
  render() {
    const {
      id,
      company,
      product_name,
      discount_rate,
      discounted_price,
      price,
      review,
      star_point,
      image_url,
    } = this.props;

    return (
      <Link to={`detail/${id}`} className="goDetail">
        <main className="ProductContainer">
          <img alt="상품사진" className="productImage" src={`${image_url}`} />
          <div className="productInfo">
            <div className="company">{company}</div>
            <div className="productName">{product_name}</div>

            <div className="priceInfo">
              <div className="discountInfo">
                <span className="discountRate">
                  {Math.round(discount_rate)}%
                </span>
                <span className="discountPrice">{discounted_price}원</span>
              </div>
              <del className="cost">{price}원</del>
            </div>

            <div className="reviewInfo">
              <span className="star">★</span>
              <span className="starPoint">{star_point}</span>
              <span className="reviewNumber"> ({review}) </span>
            </div>
          </div>
        </main>
      </Link>
    );
  }
}

export default ProductContainer;
