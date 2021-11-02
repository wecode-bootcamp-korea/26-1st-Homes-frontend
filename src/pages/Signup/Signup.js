import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <div id="SignupPage">
        <div className="container">
          <div className="Logo">
            <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
            <div className="logoName">집꾸미기 회원가입</div>
          </div>
          <div className="signupInputBox">
            <input
              className="emailAddress"
              type="email"
              placeholder="이메일 주소"
            />
            <img
              id="emailaddressIcon"
              src="./images/email.png"
              alt="이메일주소아이콘"
            />
            <input className="nickName" type="text" placeholder="닉네임" />
            <img id="nicknameIcon" src="./images/user.png" alt="닉네임아이콘" />
            <input
              className="phonNumver"
              type="text"
              placeholder="휴대폰번호(- 제외)"
            />
            <img
              id="phonnumverIcon"
              src="./images/phone.png"
              alt="폰번호아이콘"
            />
            <input
              className="signupPassword"
              type="password"
              placeholder="비밀번호"
            />
            <img
              id="signuppwdIcon"
              src="./images/lock.png"
              alt="비밀번호아이콘"
            />
            <input
              className="signupPassword_checkt"
              type="password"
              placeholder="비밀번호 확인"
            />
            <img
              id="signupPassword_checktIcon"
              src="./images/lock.png"
              alt="가입비밀번호체크아이콘"
            />
          </div>

          <div className="checkBox">
            {/* <input type="checkbox" id="check" name="check"><label for="check">전체 동의</label> */}
            <span className="agreeText" id="agreeText1">
              ㅁ 전체 동의
            </span>
            <span className="agreeText">ㅁ 서비스 이용약관 동의 (보기)</span>
            <span className="agreeText">ㅁ 개인정보취급방침 동의 (보기)</span>
            <span className="agreeText">ㅁ 본인은 만14세 이상입니다.</span>
          </div>

          <div className="btnBox">
            <button className="signupBtn">회원가입</button>
            <button className="lostpwdBtn">로그인 하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
