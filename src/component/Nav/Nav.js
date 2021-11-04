import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryTable from './CategoryTable/CategoryTable';

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
              onMouseOver={() => {
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
              {/* TODO: mock data 삽입 */}
              {this.state.showMenu ? <CategoryTable /> : null}
            </div>
            <div className="store">
              {/* TODO: 컴포넌트로 분리 & 상수 데이터 사용 */}
              <Link to="/product-lists" className="categoryMenuName">
                스토어
              </Link>
            </div>
            <div className="contents">
              <span className="categoryMenuName">컨텐츠</span>
            </div>
            <div className="community">
              <span className="categoryMenuName">커뮤니티</span>
            </div>
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
