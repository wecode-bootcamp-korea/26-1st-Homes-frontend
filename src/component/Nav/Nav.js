import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CHAN_URL } from '../../config';
import CategoryTable from './CategoryTable/CategoryTable';
import Button from './component/Button';

import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      showMenu: false,
      selectedCategory: '',
    };
  }

  componentDidMount() {
    fetch(`${CHAN_URL}/products/menus`)
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data.menus });
      });
  }

  hendleMouseEvent = showMenu => {
    !showMenu
      ? this.setState({ showMenu: true })
      : this.setState({ showMenu: false });
  };

  isCategoryClick = category => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { categories, showMenu, selectedCategory } = this.state;
    const categoryLink = 'product-lists';

    return (
      <nav className="Nav">
        <div className="navWrap">
          <div className="logoWrap">
            <img src="./images/home.png" alt="logo img" className="logoImg" />
            <span className="logo">꾸며줘홈즈</span>
          </div>
          <div className="menuLeft">
            <div
              className="categoryMenu"
              onMouseEnter={() => {
                this.hendleMouseEvent(showMenu);
              }}
              onMouseLeave={() => {
                this.hendleMouseEvent(showMenu);
              }}
            >
              <div className="categoryMenuHover">
                <div className="categoryMenuImg" />
                <span className="categoryMenuName">카테고리</span>
              </div>
              <ul className="categoryList">
                {showMenu &&
                  categories.map(menu => {
                    return (
                      <CategoryTable
                        key={menu.menu_id}
                        menuImg={menu.image_url}
                        menuName={menu.menu_name}
                        menuLists={menu.categories}
                        categoryLink={categoryLink}
                        isCategoryClick={this.isCategoryClick}
                      />
                    );
                  })}
              </ul>
            </div>

            <Button selectedCategory={selectedCategory} />
          </div>
          <div className="menuRight">
            <div className="searchWrap">
              <input
                type="search"
                className="searchInput"
                placeholder="내 스타일 매거진, 상품, 사진 검색"
              />
              <img
                src="images/premium-icon-magnifier-2311526.png"
                alt="search img"
                className="searchImg"
              />
            </div>
            <div className="cartWrap">
              <Link to="/cart">
                <img
                  src="./images/shopping-cart (2).png"
                  alt="cart img"
                  className="cartImg"
                />
                <div className="notice">1</div>
              </Link>
            </div>
            <div className="login">
              <Link to="/login" className="loginLink">
                <span>로그인/가입</span>
              </Link>
            </div>
            <button className="help">고객센터</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
