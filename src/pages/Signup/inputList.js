import React, { Component } from 'react';
import './Signup.scss';

class inputList extends Component {
  render() {
    return (
      <div className="signupInputBox">
        <signupInputList>
          <input
            key={signup}
            className={emailAddress}
            type="email"
            placeholder={placeholder}
            onChange={this.handleEmail}
          />
        </signupInputList>
        <inputImages>
          <img
            id="emailaddressIcon"
            src="./images/email.png"
            alt="이메일주소아이콘"
          />
        </inputImages>
      </div>
    );
  }
}

export default inputList;
