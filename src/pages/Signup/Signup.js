// import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import SignupInputList from './SignupInputList';
// import inputList from './inputList.json';

import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
      email: '',
      nickName: '',
      phone_number: '',
      password: '',
      rePassword: '',
    };
  }

  componentDidMount() {
    fetch('./data/inputList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          inputList: res,
        });
      });
  }

  gotoLogin = () => {
    const { history } = this.props;
    history.push('./Login');
  };

  //이메일 인풋창 핸들링
  handleEmail = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      email: value,
    });
    console.log('이메일>>', event.target.value);
  };

  //이메일 중복검사
  checkEmail = event => {
    event.preventDenfault();
    const { email } = this.state;

    //이메일 유효성 검사
    const chkEmail = function (str) {
      let regExp = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
      return regExp.test(str) ? true : false;
    };

    const inputEmail = {
      email: email,
    };

    const emailInfo = {
      method: 'POST',
      body: JSON.stringify(inputEmail), //초기 값이 들어온다
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (chkEmail(email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.setState({
        email: '',
      });
    } else {
      fetch('hhttp://data/inputList.json', emailInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 아이디입니다.');
            this.setState({
              emailCheck: email,
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
    console.log('닉네임 입력>>', event.target.value);
  };
  //닉네임 중복검사
  checknickName = event => {
    event.preventDenfault();
    const { nickName } = this.state;

    const chknickName = function (str) {
      let regnicName =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return regnicName.test(str) ? true : false;
    };

    const inputnicName = {
      nickName: nickName,
    };

    const nickNameInfo = {
      method: 'POST',
      body: JSON.stringify(inputnicName),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (chknickName(nickName) === false) {
      alert('한글, 영문 대소문자 2~15자리만 사용 가능합니다.');
    } else {
      fetch('http://data/inputList.json', nickNameInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 닉네임입니다.');
            this.setState({
              chknickName: nickName,
            });
          } else {
            alert('이미 존재하는 닉네임입니다.');
          }
        });
    }
  };

  // 폰넘버
  handlephonNum = event => {
    event.preventDefault();

    this.setState({
      phonNumber: event.target.value,
    });
    console.log('폰번호>>', event.target.value);
  };

  //폰넘버 중복검사
  checkPhonNum = event => {
    event.preventDenfault();
    const { phone_number } = this.state;

    //이메일 유효성 검사
    const chkPhonNum = function (str) {
      let regPhonNum = '^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$';
      return regPhonNum.test(str) ? true : false;
    };

    const inputPhonNum = {
      phone_number: phone_number,
    };

    const phonNumInfo = {
      method: 'POST',
      body: JSON.stringify(inputPhonNum),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (chkPhonNum(this.state.phonNumber) === false) {
      alert('-을 제외하고 입력해주세요');
    } else {
      fetch('http://data/inputList.json', phonNumInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 전화번호입니다. ');
            this.setState({
              chkPhonNum: phone_number,
            });
          } else {
            alert('이미 존재하는 전화번호입니다.');
          }
        });
    }
  };

  // 비밀번호 첫번째
  handlePwd = event => {
    event.preventDefault();

    this.setState({
      password: event.target.value,
    });
    console.log('비번>>', event.target.value);
  };

  // 비빌번호 두번째
  handlepwdCheck = event => {
    event.preventDefault();

    this.setState({
      rePassword: event.target.value,
    });
    console.log('비번확인>>', event.target.value);
  };

  //비밀번호 확인
  chkPw = event => {
    event.preventDenfault();

    const chkPwd = function (str) {
      let regPwd =
        '^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$';
      return regPwd.test(str) ? true : false;
    };

    if (chkPwd(this.state.rePassword) === false) {
      alert('영문, 숫자, 기호를 혼합하여 8자 이상');
      this.setState({
        password: '',
        rePassword: '',
      });
    } else {
      if (this.state.password === this.state.rePassword) {
        alert('일치합니다.');
        this.setState({
          pwCheck: this.state.rePassword,
        });
      } else {
        alert('비밀번호를 확인해주세요');
      }
    }
  };

  gotoMain = () => {
    const { history } = this.props;
    history.push('./Main');
  };

  //가입하기버튼
  handleSubmit = event => {
    // event.preventDenfault();
    const { email, nickName, phonNumvber, password, rePassword } = this.state;
    const signupInfo = {
      method: 'POST',
      body: JSON.stringify(signupInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (
      email &&
      nickName &&
      phonNumvber &&
      password === rePassword &&
      email === this.checkEmail
    ) {
      fetch('http://data/inputList.json', signupInfo)
        .then(alert('가입이 완료되었습니다.'))
        .then(this.props.history.push('/Main'));
    } else {
      alert('입력값을 확인해주세요');
    }
  };

  render() {
    const { inputList } = this.state;
    return (
      <div id="SignupPage">
        <div className="container">
          <div className="Logo">
            <img id="homeLogo" src="./images/home.png" alt="집꾸미기로고" />
            <div className="logoName">집꾸미기 회원가입</div>
          </div>
          <div className="signupInputBox">
            {inputList.map(inputList => {
              return (
                <SignupInputList
                  key={inputList.id}
                  name={inputList.name}
                  type={inputList.inputType}
                  placeholder={inputList.placeholder}
                  onChange={inputList.onChange}
                  src={inputList.src}
                />
              );
            })}
          </div>

          <div className="checkBox">
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
              onClick={this.handleSubmit}
              disabled={
                this.state.email.indexOf('@') !== -1 &&
                this.state.nickName.length > 5
                  ? true
                  : false
              }
            >
              회원가입
            </button>
            <button className="lostpwdBtn" onClick={this.gotoLogin}>
              로그인 하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
