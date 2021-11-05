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
    fetch('http://localhost:3000/data/Categories.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      });
  }

  hendleMouseEvent = () => {};

  render() {
    const { categories } = this.state;

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
              // FIXME: 반복되는 함수라서 줄일 수 있어볼 듯
              onMouseEnter={() => {
                this.setState({ showMenu: true });
              }}
              onMouseLeave={() => {
                this.setState({ showMenu: false });
              }}
            >
              <div className="categoryMenuHover">
                <div className="categoryMenuImg" />
                <span className="categoryMenuName">카테고리</span>
              </div>
              <ul className="categoryList">
                {this.state.showMenu
                  ? categories.map(category => {
                      return (
                        <CategoryTable
                          key={category.id}
                          categoryImg={category.img}
                          categoryName={category.categoryName}
                          categoryLists={category.categoryLists}
                        />
                      );
                    })
                  : null}
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
              로그인/가입
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
