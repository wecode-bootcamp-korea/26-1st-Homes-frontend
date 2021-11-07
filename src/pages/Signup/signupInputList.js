import React from 'react';
import './Signup.scss';

export class signupInputList extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  inputHandle = e => {
    const { value } = e.target;
    const { temp } = this.props;
    this.setState({
      value: value,
    });
    temp(e);
  };

  render() {
    const { content, name, value, inputType, placeholder } = this.props;
    return (
      <div className="logoTitle">
        <input
          className="text"
          name={name}
          value={value}
          onChange={this.inputHandle}
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
export default signupInputList;
