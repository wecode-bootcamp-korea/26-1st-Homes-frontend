import React from 'react';
import './Signup.scss';

export class signupInputList extends React.Component {
  render() {
    const { text, name, value, inputHandle, type, placeholder } = this.props;
    return (
      <div className="signupInputList">
        <input
          className={text}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={inputHandle}
        />
      </div>
    );
  }
}
export default signupInputList;
