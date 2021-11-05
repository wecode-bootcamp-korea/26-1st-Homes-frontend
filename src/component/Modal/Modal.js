import React, { Component } from 'react';
import '../Modal/Modal.scss';

class Modal extends Component {
  render() {
    const { sequence } = this.props;
    return (
      <div className="modal">
        <input type="radio" />
        <p>{sequence}</p>
      </div>
    );
  }
}

export default Modal;
