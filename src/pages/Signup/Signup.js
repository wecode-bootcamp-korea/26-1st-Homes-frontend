import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nickName: '',
      phonNumvber: '',
      password: '',
      rePassword: '',
    };
  }

  gotoMain = () => {
    const { history } = this.props;
    history.push('./Main');
  };

  //이메일 인풋창 핸들링
  handleEmail = event => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
    console.log('이메일입력값>>', event.target.value);
  };

  //이메일 중복검사
  checkEmail = event => {
    event.preventDenfault();

    //이메일 유효성 검사
    const chkEmail = function (str) {
      let regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    //초기빈 이메일 값을 왜 주었을까
    const inputEmail = {
      email: this.state.email,
    };

    const emailInfo = {
      method: 'POST',
      body: JSON.stringify(inputEmail), //초기 값이 들어온다
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (chkEmail(this.state.email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.setState({
        //왜 여기서 이걸 주지?
        email: '',
      });
    } else {
      fetch('url', emailInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 아이디입니다.');
            this.setState({
              emailCheck: this.state.email,
            });
          } else {
            alert('이미 존재하는 아이디입니다.');
          }
        });
    }
  };

  //닉네임 핸들링
  handlenickName = event => {
    event.preventDefault();
    this.setState({
      nickName: event.target.value,
    });
    console.log('닉네임 사용자 입력값>>', event.target.value);
  };
  //닉네임 중복검사
  checknickName = event => {
    event.preventDenfault();

    const chknickName = function (str) {
      let regnicName =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return regnicName.test(str) ? true : false;
    };

    const inputnicName = {
      nickName: this.state.nickName,
    };

    const nickNameInfo = {
      method: 'POST',
      body: JSON.stringify(inputnicName),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (chknickName(this.state.nickName) === false) {
      alert('한글, 영문 대소문자 2~15자리만 사용 가능합니다.');
    } else {
      fetch('url', nickNameInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 닉네임입니다.');
            this.setState({
              chknickName: this.state.nickName,
            });
          } else {
            alert('이미 존재하는 닉네임입니다.');
          }
        });
    }
  };

  // 폰넘버
  // handelphonNum = event => {
  //   this.setState({
  //     phonNumver: event.target.value,
  //   });
  //   // console.log(event.target.value);
  // };
  // // 폰넘버
  // checkPhonNum = event => {
  //   event.preventDenfault();
  //   const checkPhonNum = function (str) {
  //     let rephonNum = str.indexOf('-');
  //   };

  //   const inputnicName = {
  //     nickName: this.state.nickName,
  //   };
  // };

  // 비밀번호 첫번째
  handelPwd = event => {
    event.preventDenfault();
    this.setState({
      password: event.target.value,
    });
    console.log('비번 첫번째 입력>>', event.target.value);
  };
  // 비빌번호 두번째
  handelpwdCheck = event => {
    this.setState({
      passwordCheck: event.target.value,
    });
    // console.log(event.target.value);
  };

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
              onChange={this.handelEmail}
            />
            <img
              id="emailaddressIcon"
              src="./images/email.png"
              alt="이메일주소아이콘"
            />
            <input
              className="nickName"
              type="text"
              placeholder="닉네임"
              onChange={this.handelnickName}
            />
            <img id="nicknameIcon" src="./images/user.png" alt="닉네임아이콘" />
            <input
              className="phonNumver"
              type="text"
              placeholder="휴대폰번호(- 제외)"
              onChange={this.handelphonNum}
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
              onChange={this.handelpwd}
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
              onChange={this.handelpwdCheck}
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
            <button
              className="signupBtn"
              onClick={this.gotoMain}
              disabled={
                this.state.email.indexOf('@') !== -1 &&
                this.state.nickName.length > 5
                  ? false
                  : true
              }
            >
              회원가입
            </button>
            <button button className="lostpwdBtn" onClick={this.goToMain}>
              로그인 하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
