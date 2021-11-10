import React from 'react';
import './index.scss';
import Input from '../../Input';
import { SignUpForms } from '../signUpForms';
import FormValidator from '../../../utils/formValidator';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      nickName: '',
      phone_number: '',
      password: '',
      rePassword: '',
    };
  }

  goToLogin = () => {
    const { history } = this.props;
    history.push('./Login');
  };
  /**
   * @description 입력한 Input 값을 state에 반영해주는 함수
   */
  handleInput = event => {
    event.preventDefault();

    if (FormValidator._checkName(event.target.value)) {
      console.log('name 통과');
    } else {
      console.log('name 에러');
    }
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
   */
  handleSubmit = event => {
    event.preventDefault();
    const { email, nickName, phone_number, password, rePassword, name } =
      this.state;
    let userData = this.state;
    // userData 안에 들어있는 값들 유효성 검사 통과시 fetch 함수 실행
    fetch('http://10.58.1.116:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        nickname: nickName,
        phone_number: phone_number,
        password: password,
        rePassword: rePassword,
        name: name,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'EMAIL_VALIDATION_ERROR') {
          alert('이메일을 확인해주세요.');
        }
        if (result.message === 'PASSWORD_VALIDATION_ERROR') {
          alert('비밀번호를 확인해주세요.');
        }
        if (result.message === 'DUPLICATED EMAI') {
          alert('존재하고 있는 메일입니다.');
        }
        if (result.message === 'DUPLICATED NICKNAME') {
          alert('닉네임을 확인해주세요.');
        }
        if (result.message === 'PHONE_NUMBER_ERROR') {
          alert('전화번호를 확인해주세요.');
        }
        console.log('submit clicked', userData);
      });
  };

  render() {
    // const { name, id, src, alt } = this.props;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul>
            {SignUpForms.map((item, index) => (
              <li key={index}>
                <Input
                  id={item.name}
                  name={item.name}
                  inputType={item.inputType}
                  placeholder={item.placeholder}
                  src={item.src}
                  onChange={this.handleInput}
                />
              </li>
            ))}
          </ul>

          <div className="checkBox checkBoxAll">
            <input className="btn checkAll" type="checkbox" />
            <span className="checkAllText">전체 동의</span>
          </div>
          <div className="checkBox">
            <input className="btn checkAll" type="checkbox" />
            <span className="checkAllText">서비스 이용약관 동의 (보기)</span>
          </div>
          <div className="checkBox">
            <input className="btn checkAll" type="checkbox" />
            <span className="checkAllText">개인정보취급방침 동의 (보기)</span>
          </div>
          <div className="checkBox">
            <input className="btn checkAll" type="checkbox" />
            <span className="checkAllText">본인은 만14세 이상입니다.</span>
          </div>
          <input
            className="signBtn"
            type="submit"
            value="회원가입"
            style={{ cursor: 'pointer' }}
            onClick={this.handleSubmit}
          />
          <input
            className="loginBtn"
            type="submit"
            value="로그인하기"
            style={{ cursor: 'pointer' }}
            onClick={this.goToLogin}
          />
        </form>
        {/* <button type="button" style={{ cursor: 'pointer' }}>
          이메일주소 중복확인
        </button> */}
      </div>
    );
  }
}
