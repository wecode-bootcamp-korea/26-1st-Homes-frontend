import React from 'react';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div id="loginPage">
        <div className="container">
          <div className="Logo">
            <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
            <div className="logoName">집꾸미기 로그인</div>
          </div>
          <div className="viewbtnBox">
            <button className="viewBtn1">위코드 계정으로 로그인</button>
            <button className="viewBtn2">카카오톡 계정으로 로그인</button>
            <button className="viewBtn3">네이버 계정으로 로그인</button>
          </div>
          <div className="textOr">
            <span>or</span>
          </div>
          <div className="inputBox">
            <input className="email" type="email" placeholder="E-MAIL" />
            <img id="emailIcon" src="./images/email.png" alt="이메일아이콘" />
            <input
              className="password"
              type="password"
              placeholder="PASSWORD"
            />
            <img id="pwdIcon" src="./images/padlock.png" alt="비밀번호아이콘" />
          </div>
          <div className="btnBox">
            <button className="loginBtn">LOGIN</button>
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
