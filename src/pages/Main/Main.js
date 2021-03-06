import React, { Component } from 'react';
import Event from './Event/Evnet';
import Best from './Best/Best';
import { CHAN_URL } from '../../config';

import './Main.scss';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      bestLists: [],
      imgCurrentNo: 0,
    };
  }

  componentDidMount() {
    fetch('/data/Event.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ events: data });
      });

    fetch(
      `${CHAN_URL}/products?SubCategoryId=1&ordering=-best_ranking&limit=10`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ bestLists: data.product_groups });
      });
  }

  onChangeImage = idx => {
    const { events } = this.state;
    let num = idx;
    if (events.length <= num) num = 0;
    if (num < 0) num = events.length - 1;
    this.setState({ imgCurrentNo: num });
  };

  render() {
    const { events, imgCurrentNo, bestLists } = this.state;

    return (
      <main className="main">
        <div className="eventSlideWrap">
          <div className="eventSlide">
            {events.slice(imgCurrentNo, imgCurrentNo + 1).map(event => {
              return (
                <Event
                  key={event.id}
                  img={event.event_img}
                  title={event.event_title}
                  subTilte={event.event_sub_title}
                  discount={event.discount_rate}
                  date={event.event_date}
                />
              );
            })}
            <div className="slideInfoWrap">
              <span className="current">{imgCurrentNo + 1}</span>
              <span>|</span>
              <span className="total">{events.length}</span>
              <img
                className="slideArrow"
                src="./images/20190715125150lBQ89aXpQD.png"
                alt="slide arrow"
              />
            </div>
          </div>
          <div
            className="buttonPrev"
            onClick={() => this.onChangeImage(imgCurrentNo - 1)}
          >
            <img
              className="prevArrow"
              src="./images/free-icon-arrowhead-thin-outline-to-the-left-32542.png"
              alt="prev button arrow"
            />
          </div>
          <div
            className="buttonNext"
            onClick={() => this.onChangeImage(imgCurrentNo + 1)}
          >
            <img
              className="nextArrow"
              src="./images/free-icon-right-arrow-271228.png"
              alt="prev button arrow"
            />
          </div>
        </div>
        <div className="bestProductLists">
          <h1 className="bestProductName">???????????? ????????? 30</h1>
          {/* TODO: ?????? ???????????? ???????????? ???????????? */}
          <ul className="categoryBest">
            <li className="categoryName">??????</li>
            <li className="categoryName">?????????</li>
            <li className="categoryName">??????</li>
            <li className="categoryName">??????</li>
            <li className="categoryName">??????/??????</li>
            <li className="categoryName">??????</li>
            <li className="categoryName">??????????????????</li>
            <li className="categoryName">????????????</li>
            <li className="categoryName">??????????????????</li>
            <li className="categoryName">????????????</li>
          </ul>
          <div className="bestProductWrap">
            {bestLists.map((best, index) => {
              return (
                <Best
                  key={best.id.toString()}
                  rank={index + 1}
                  company={best.company}
                  discountRate={best.discount_rate}
                  discountedPrice={best.discounted_price}
                  img={best.image_url}
                  price={best.price}
                  name={best.product_name}
                  review={best.review}
                  starPoint={best.star_point}
                />
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
