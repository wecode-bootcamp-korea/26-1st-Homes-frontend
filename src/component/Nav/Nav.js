import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryTable from './CategoryTable/CategoryTable';
import Button from './component/Button';

import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      showMenu: false,
    };
  }

  componentDidMount() {
    fetch('/data/Categories.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      });
  }

  hendleMouseEvent = showMenu => {
    !showMenu
      ? this.setState({ showMenu: true })
      : this.setState({ showMenu: false });
  };

  render() {
    const { categories, showMenu } = this.state;

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
                  categories.map(category => {
                    return (
                      <CategoryTable
                        key={category.id}
                        categoryImg={category.img}
                        categoryName={category.categoryName}
                        categoryLists={category.categoryLists}
                      />
                    );
                  })}
              </ul>
            </div>

            <Button />
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
              <img
                src="./images/shopping-cart (2).png"
                alt="cart img"
                className="cartImg"
              />
            </div>
            <div className="login">
              <span>로그인/가입</span>
              <Link to="/login" className="loginLink" />
            </div>
            <button className="help">고객센터</button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
