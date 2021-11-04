import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavButton extends Component {
  render() {
    // const { className, img, buttonName, link } = this.props;

    // TODO: 컴포넌트 재사용 menuLeft 만 적용
    return MENU_LEFT_BUTTON_DATA.map(data => {
      return (
        <div className="NavButton">
          {data.link && (
            <Link to={data.link} className="loginLink">
              <button className={data.className}>
                {data.buttonName}
                {data.img && (
                  <img src={data.img} alt="cart img" className="cartImg" />
                )}
              </button>
            </Link>
          )}
        </div>
      );
    });
  }
}

const MENU_LEFT_BUTTON_DATA = [
  {
    className: 'store',
    buttonName: '스토어',
    link: '/product-lists',
  },
  {
    className: 'contents',
    buttonName: '컨텐츠',
    link: '/',
  },
  {
    className: 'community',
    buttonName: '커뮤니티',
    link: '/login', // test
  },
];

const MENU_RIGHT_BUTTON_DATA = [
  {
    type: 'name',
    text: '이름',
  },
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];
export default NavButton;
