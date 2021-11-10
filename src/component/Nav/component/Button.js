import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavButton extends Component {
  constructor() {
    super();

    this.state = {
      seletedButton: '',
    };
  }

  clickHandler = link => {
    this.setState({ seletedButton: link });
  };

  render() {
    const { selectedCategory } = this.props;
    const { seletedButton } = this.state;

    return MENU_LEFT_BUTTON_DATA.map(data => {
      return (
        // FIXME:카테고리에서 아무거나 선택 시 스토어 메뉴 색상 변경 되도록
        <div
          className="NavButton"
          key={data.id}
          onClick={() => this.clickHandler(data.link)}
        >
          <Link to={data.link} className="buttonLink">
            <button
              className={
                seletedButton === data.link || selectedCategory === data.link
                  ? 'buttonColor'
                  : data.className
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
    link: 'contents',
  },
  {
    id: '3',
    className: 'community',
    buttonName: '커뮤니티',
    link: 'community',
  },
];

export default NavButton;
