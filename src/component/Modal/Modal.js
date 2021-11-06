import React, { Component } from 'react';
import '../Modal/Modal.scss';

class Modal extends Component {
  render() {
    const { sequence, handleBtn } = this.props;

    return (
      <div className="Modal">
        <div className="circleBtn" />
        <p onClick={handleBtn}>{sequence}</p>
      </div>
    );
  }
}

export default Modal;
