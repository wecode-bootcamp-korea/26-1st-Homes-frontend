import React, { Component } from 'react';
import '../Modal/Modal.scss';

class Modal extends Component {
  render() {
    const { sequence, filter } = this.props;

    return (
      <div className="modal">
        <div className="circleBtn" />
        <p onClick={() => filter}>{sequence}</p>
      </div>
    );
  }
}

export default Modal;
