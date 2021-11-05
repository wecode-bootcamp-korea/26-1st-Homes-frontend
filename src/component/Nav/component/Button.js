import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavButton extends Component {
  render() {
    return MENU_LEFT_BUTTON_DATA.map(data => {
      return (
        <div className="NavButton">
          <Link key={data.id} to={data.link} className="loginLink">
            <button className={data.className}>
              {data.buttonName}
              {data.img && (
                <img src={data.img} alt="cart img" className="cartImg" />
              )}
            </button>
          </Link>
        </div>
      );
    });
  }
}

const MENU_LEFT_BUTTON_DATA = [
  {
    id: '1',
    className: 'store',
    buttonName: '스토어',
    link: '/product-lists',
  },
  {
    id: '2',
    className: 'contents',
    buttonName: '컨텐츠',
    link: '/',
  },
  {
    id: '3',
    className: 'community',
    buttonName: '커뮤니티',
    link: '/',
  },
];

export default NavButton;
