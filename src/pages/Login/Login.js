import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
    };
  }

  goToMain = () => {
    this.props.history.push('./Main');
  };

  handleemailInput = event => {
    this.setState({
      email: event.target.value,
    });
    console.log('아이디input값>>', event.target.value);
  };

  handelpwdInput = event => {
    this.setState({
      pwd: event.target.value,
    });
    console.log('비밀번호input값>>', event.target.value);
  };

  sign_in = event => {
    this.setState({
      pw: event.target.value,
    });
    console.log('비밀번호 로그인값>>', event.target.value);
  };

  render() {
    return (
      <div id="loginPage">
        <div className="container">
          <div className="Logo">
            <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
            <div className="logoName">집꾸미기 로그인</div>
          </div>
          <div className="viewbtnBox">
            <button className="viewBtn1">
              <a href="">위코드</a>계정으로 로그인
            </button>
            <button className="viewBtn2">카카오톡 계정으로 로그인</button>
            <button className="viewBtn3">네이버 계정으로 로그인</button>
          </div>
          <div className="textOr">
            <span>or</span>
          </div>
          <div className="inputBox">
            <input
              className="email"
              type="email"
              placeholder="E-MAIL"
              onChange={this.handleemailInput}
            />
            <img id="emailIcon" src="./images/email.png" alt="이메일아이콘" />
            <input
              className="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handelpwdInput}
            />
            <img id="pwdIcon" src="./images/padlock.png" alt="비밀번호아이콘" />
          </div>
          <div className="btnBox">
            <button
              id="loginBtn"
              onClick={this.goToMain}
              disabled={
                this.state.email.indexOf('@') !== -1 &&
                this.state.pwd.length > 7
                  ? false
                  : true
              }
            >
              LOGIN
            </button>
          </div>
          <div className="linkBox">
            <span className="signupLink">회원가입</span>
            <span className="lostpwdLink">비밀번호 찾기</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
