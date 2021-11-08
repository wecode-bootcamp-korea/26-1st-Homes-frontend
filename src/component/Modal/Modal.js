import React, { Component } from 'react';
import '../Modal/Modal.scss';

class Modal extends Component {
  render() {
    const { filteringBtns } = this.props;

    return (
      <div className="Modal">
        <button className="all" value="all" onClick={filteringBtns}>
          All
        </button>
        <button className="company" value="낮은가격순" onClick={filteringBtns}>
          낮은 가격순
        </button>
        <button className="price" value="높은가격순" onClick={filteringBtns}>
          높은 가격순
        </button>

        {/* <div className="circleBtn" />
        <p onClick={filteringBtns}>{sequence}</p> */}
      </div>
    );
  }
}

export default Modal;
