import React, { Component } from 'react';
import Best from './Best/Best';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <ul className="eventSlideWrap">
          <li>
            <img
              src="./images/_ (2).jpeg"
              alt="event slide img"
              className="eventSlideImg"
            />
          </li>
          <li>
            <img
              src="./images/Lewisham House by Sanders & King _ Australian Interiors _ est living.png"
              alt="event slide img"
              className="eventSlideImg"
            />
          </li>
          <li>
            <img
              src="./images/오늘도 행복한  시골집.jpeg"
              alt="event slide img"
              className="eventSlideImg"
            />
          </li>
        </ul>
        <div className="bestProductLists">
          <h1 className="bestProductName">집꾸미기 베스트 30</h1>
          {/* TODO: 버튼 컴포넌트 가져와서 사용하기 */}
          <ul className="categoryBest">
            <li className="categoryName">가구</li>
            <li className="categoryName">패브릭</li>
            <li className="categoryName">조명</li>
            <li className="categoryName">주방</li>
            <li className="categoryName">수납/정리</li>
            <li className="categoryName">가전</li>
            <li className="categoryName">인테리어소품</li>
            <li className="categoryName">생활용품</li>
            <li className="categoryName">셀프인테리어</li>
            <li className="categoryName">반려동물</li>
          </ul>
          <div className="bestProductWrap">
            <Best />
            <Best />
            <Best />
            <Best />
            <Best />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
