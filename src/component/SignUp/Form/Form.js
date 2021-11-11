import React from 'react';
import Input from '../../Input';
import { withRouter } from 'react-router-dom';
import { SIGN_UP_FORMS } from '../data';
import './Form.scss';

class Form extends React.Component {
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
    history.push('/Login');
  };

  handleInput = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    const { email, nickName, phone_number, password, rePassword, name } =
      this.state;
    fetch('http://10.58.7.212:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        nickname: nickName,
        phone_number: phone_number,
        password: password,
        rePassword: rePassword,
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'EMAIL_VALIDATION_ERROR') {
          alert('항목을 작성해주세요.');
        } else if (result.message === 'DUPLICATED EMAIL') {
          alert(
            '다른 계정에서 이미 사용중인 이메일 주소입니다. 다른 이메일주소를 선택해주세요.'
          );
        } else if (result.message === 'DUPLICATED NICKNAME') {
          alert('사용하고 있는 닉네임입니다. 다른 닉네임을 선택해주세요.');
        } else if (result.message === 'PHONE_NUMBER_ERROR') {
          alert('전화번호를 확인해주세요.');
        } else if (result.message === 'PASSWORD_VALIDATION_ERROR') {
          alert('비밀번호를 확인해주세요.');
        } else if (result.message === 'NO_DATA') {
          alert('빈 칸을 모두 입력해주세요.');
        } else if (result.message === 'SUCCESS') {
          alert('환영합니다!');
          localStorage.setItem('token', result.access_token);
          history.push('/');
        }
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul>
            {SIGN_UP_FORMS.map((item, index) => (
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
          <div className="inputImages">
            <img className="nameImg" src="./images/user.png" alt="이름아이콘" />{' '}
            <img
              className="emailImg"
              src="./images/email.png"
              alt="이메일아이콘"
            />
            <img
              className="nicNameImg"
              src="./images/user.png"
              alt="닉네임아이콘"
            />
            <img
              className="phonImg"
              src="./images/phone.png"
              alt="핸드폰아이콘"
            />
            <img
              className="pwdImg"
              src="./images/lock.png"
              alt="비밀번호아이콘"
            />
            <img
              className="repwdImg"
              src="/images/lock.png"
              alt="비밀번호확인아이콘"
            />
          </div>

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
            onClick={this.handleSubmit}
          />
          <input
            className="loginBtn"
            type="submit"
            value="로그인하기"
            onClick={this.goToLogin}
          />
        </form>
      </div>
    );
  }
}
export default withRouter(Form);
