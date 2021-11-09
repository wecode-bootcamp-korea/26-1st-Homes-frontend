import React from 'react';
import './Signup.scss';

export class SignupInputList extends React.Component {
  render() {
    const { inputType, placeholder, name, onChange, id, src, alt } = this.props;
    return (
      <div signupInputList>
        <input
          name={name}
          className="text"
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
        />
        <img name={name} id={id} alt={alt} src={src} />
      </div>
    );
  }
}
export default SignupInputList;
