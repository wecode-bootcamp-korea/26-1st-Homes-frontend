import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavButton extends Component {
  constructor() {
    super();

    this.state = {
      selectedIdx: 0,
    };
  }

  clickHandler = idx => {
    this.setState({ selectedIdx: idx });
  };

  render() {
    return MENU_LEFT_BUTTON_DATA.map((data, idx) => {
      return (
        // FIXME:카테고리에서 아무거나 선택 시 스토어 메뉴 색상 변경 되도록
        <div
          className="NavButton"
          key={data.id}
          onClick={() => this.clickHandler(idx)}
        >
          <Link to={data.link} className="loginLink">
            <button
              className={
                this.state.selectedIdx === idx ? 'buttonColor' : data.className
              }
            >
              {data.buttonName}
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
    link: '/contents',
  },
  {
    id: '3',
    className: 'community',
    buttonName: '커뮤니티',
    link: '/community',
  },
];

export default NavButton;
