import React from 'react';
import './index.scss';

export default class Input extends React.Component {
  render() {
    const { name, inputType, placeholder, onChange } = this.props;
    return (
      <input
        className="input"
        name={name}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}
