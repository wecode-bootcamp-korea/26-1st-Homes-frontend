import React from 'react';
import './index.scss';
import Input from '../../Input';
import { SignUpForms } from '../signUpForms';
import FormValidator from '../../../utils/formValidator';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nickName: '',
      phone_number: '',
      password: '',
      rePassword: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @description 입력한 Input 값을 state에 반영해주는 함수
   */
  handleInput = event => {
    event.preventDefault();
    if (FormValidator._checkEmail(event.target.value)) {
      console.log('email 통과');
    } else {
      console.log('email 에러');
    }
    if (FormValidator._checkNickname(event.target.value)) {
      console.log('nick 통과');
    } else {
      console.log('nick 에러');
    }
    if (FormValidator._checkPhoneNumber(event.target.value)) {
      console.log('phone 통과');
    } else {
      console.log('phone 에러');
    }
    if (FormValidator._checkPassword(event.target.value)) {
      console.log('password 통과');
    } else {
      console.log('password 에러');
    }
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * @description 회원가입 요청을 실행하는 함수
   * Fetch 함수 들어가야함
   */
  handleSubmit = event => {
    event.preventDefault();
    let userData = this.state;
    // userData 안에 들어있는 값들 유효성 검사 통과시 fetch 함수 실행
    console.log('submit clicked', userData);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {SignUpForms.map((item, index) => (
            <ul key={index}>
              <li key={index}>
                <Input
                  id={item.name}
                  name={item.name}
                  inputType={item.inputType}
                  placeholder={item.placeholder}
                  onChange={this.handleInput}
                />
              </li>
            </ul>
          ))}
          <input
            className="signBtn"
            type="submit"
            value="가입하기"
            style={{ cursor: 'pointer' }}
          />
          <input
            className="loginBtn"
            type="submit"
            value="로그인하기"
            style={{ cursor: 'pointer' }}
          />
        </form>
        <button type="button" style={{ cursor: 'pointer' }}>
          이메일주소 중복확인
        </button>
      </div>
    );
  }
}
