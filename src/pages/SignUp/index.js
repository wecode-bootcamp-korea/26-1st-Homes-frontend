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
      </div>
    );
  }
}
