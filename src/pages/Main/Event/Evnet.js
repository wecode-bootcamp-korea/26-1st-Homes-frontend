import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Event.scss';

export class Event extends Component {
  render() {
    const { img, title, subTilte, discount, date } = this.props;
    return (
      <div className="Event">
        <div className="eventList">
          <Link to="/" className="eventLink">
            <img src={img} alt="event slide img" className="eventSlideImg" />
            <div className="eventWrap">
              <h1 className="eventTitle">{title}</h1>
              <h3 className="eventSubTitle">
                {subTilte}
                <span>{discount}</span>
              </h3>
              <div className="evnetDate">{date}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Event;
