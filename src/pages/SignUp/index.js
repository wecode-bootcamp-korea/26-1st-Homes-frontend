import React from 'react';
import './index.scss';
import Form from '../../component/SignUp/Form';

export default class SignUpPage extends React.Component {
  render() {
    return (
      <div className="containerHome">
        <div className="Logo">
          <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
          <div className="logoName">집꾸미기 회원가입</div>
        </div>
        <Form />
        {/* <div className="checkBox">
          <input className="btn checkAll" type="checkbox" />
          전체 동의
          <input className="btn checkTerms" type="checkbox" />
          서비스 이용약관 동의 (보기)
          <input className="btn checkInfo" type="checkbox" />
          개인정보취급방침 동의 (보기)
          <input className="btn checkAge" type="checkbox" />
          본인은 만14세 이상입니다.
        </div> */}
      </div>
    );
  }
}
