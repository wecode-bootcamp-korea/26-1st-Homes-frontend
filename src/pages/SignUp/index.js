import React from 'react';
import './index.scss';
import Form from '../../component/SignUp/Form';

export default class SignUpPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="Logo">
          <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
          <div className="logoName">집꾸미기 회원가입</div>
        </div>
        <Form />
        {/* <div className="checkBox">
          <span className="agreeText" id="agreeText1">
            <input type="checkbox" />
            전체 동의
          </span>
          <span className="agreeText">
            <input type="checkbox" />
            서비스 이용약관 동의 (보기)
            <input type="checkbox" />
            개인정보취급방침 동의 (보기)
            <input type="checkbox" />
            본인은 만14세 이상입니다.
          </span>
        </div> */}
      </div>
    );
  }
}
