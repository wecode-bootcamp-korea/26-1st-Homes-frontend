import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  goToSignup = () => {
    const { history } = this.props;
    history.push('./Signup');
  };

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    const { history } = this.props;
    const login_info = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('http://data/commentData.json', login_info)
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_DOES_NOT_EXIST') {
          alert('존재하지 않는 아이디입니다.');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
        } else if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('token', result.token);
          history.push('/Main');
        }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <div className="container">
          <div className="logoBox">
            <img id="homeLogo" src="/images/home.png" alt="집꾸미기로고" />
            <div className="logoName">집꾸미기 로그인</div>
          </div>
          <div className="viewbtnBox">
            <button className="viewBtnwecode">
              <a href="https://wecode.co.kr/">위코드</a>계정으로 로그인
            </button>
            <button className="viewBtnkakao">카카오톡 계정으로 로그인</button>
            <button className="viewBtnnaver">네이버 계정으로 로그인</button>
          </div>
          <div className="textOr">
            <span>or</span>
          </div>
          <div className="inputBox">
            <input
              name="email"
              className="email"
              type="email"
              placeholder="E-MAIL"
              onChange={this.handleInput}
            />
            <img id="emailIcon" src="./images/email.png" alt="이메일아이콘" />
            <input
              name="password"
              className="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handleInput}
            />
            <img id="pwdIcon" src="./images/padlock.png" alt="비밀번호아이콘" />
          </div>
          <div className="btnBox">
            <button
              id="loginBtn"
              type="submit"
              onClick={this.handleLogin}
              disabled={email.indexOf('@') !== -1 && !(password.length > 7)}
            >
              LOGIN
            </button>
          </div>
          <div className="linkBox">
            <button className="signupLink" onClick={this.goToSignup}>
              회원가입
            </button>
            <span className="lostpwdLink">비밀번호 찾기</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
