import React from 'react';
import './Signup.scss';

export class SignupInputList extends React.Component {
  render() {
    const { inputType, placeholder, name, onChange } = this.props;
    return (
      <div signupInputList>
        <input
          name={name}
          className="text"
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
export default SignupInputList;
