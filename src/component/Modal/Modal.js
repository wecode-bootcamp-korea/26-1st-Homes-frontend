import React, { Component } from 'react';
import '../Modal/Modal.scss';

class Modal extends Component {
  render() {
    const { filterProducts } = this.props;

    return (
      <div className="Modal">
        <button className="all" value="all" onClick={filterProducts}>
          All
        </button>
        <button className="company" value="낮은가격순" onClick={filterProducts}>
          낮은 가격순
        </button>
        <button className="price" value="높은가격순" onClick={filterProducts}>
          높은 가격순
        </button>
      </div>
    );
  }
}

export default Modal;
