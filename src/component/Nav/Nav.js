import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories/Categories';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="logoWrap">
            <img src="./images/home.png" alt="logoImg" className="logoImg" />
            <span className="logo">꾸며줘홈즈</span>
          </div>
          <div className="menuLeft">
            <div className="categoryMenu">
              <div className="categoryMenuHover">
                <div className="categoryMenuImg" />
                <span className="categoryMenuName">카테고리</span>
              </div>
              {/* 상수 데이터와 함께 컴포넌트로 따로 뺄 수 있도록 */}
              <ul className="categories">
                <Categories />
              </ul>
            </div>
            <div className="store">
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
                alt="searchImg"
                className="searchImg"
              />
            </div>
            <div className="cartWrap">
              <img
                src="./images/shopping-cart (2).png"
                alt="cartImg"
                className="cartImg"
              />
            </div>
            <div className="login">
              로그인/가입
              <Link to="/login" className="loginLink" />
            </div>
            <button className="help">고객센터</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
