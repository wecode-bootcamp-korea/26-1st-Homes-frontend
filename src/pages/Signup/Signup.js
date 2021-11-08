import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import signupInputList from '../Signup/signupInputList';
import inputImages from '../Signup/inputImages';

import './Signup.scss';
import { InputList } from './inputList';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
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
          signupData: res,
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
    console.log('이메일 입력>>', event.target.value);
  };

  //이메일 중복검사
  checkEmail = event => {
    event.preventDenfault();

    //이메일 유효성 검사
    const chkEmail = function (str) {
      let regExp = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
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
      fetch('http://10.58.4.252/8000', emailInfo)
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
    console.log('닉네임 입력>>', event.target.value);
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
      nickName: this.state.nickMame,
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
      fetch('http://10.58.4.252/users/signin', nickNameInfo)
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
  handlephonNum = event => {
    event.preventDefault();
    this.setState({
      phonNumber: event.target.value,
    });
    console.log('전화번호 입력>>', event.target.value);
  };

  //이메일 중복검사
  checkPhonNum = event => {
    event.preventDenfault();

    //이메일 유효성 검사
    const chkPhonNum = function (str) {
      let regPhonNum = '^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$';
      return regPhonNum.test(str) ? true : false;
    };

    const inputPhonNum = {
      phone_number: this.state.phone_number,
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
      fetch('http://10.58.4.252/users/signin', phonNumInfo)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert('사용가능 한 전화번호입니다. ');
            this.setState({
              chkPhonNum: this.state.phone_number,
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
    console.log('비번 첫번째 입력>>', event.target.value);
  };
  // 비빌번호 두번째
  handlepwdCheck = event => {
    event.preventDefault();
    this.setState({
      rePassword: event.target.value,
    });
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
    event.preventDenfault();

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
      fetch('http://localhost:3000/data/commentData.json/user', signupInfo)
        .then(alert('가입이 완료되었습니다.'))
        .then(this.props.history.push('/Main'));
    } else {
      alert('입력값을 확인해주세요');
    }
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
            {/* const INPUT_ARR = ['email', 'nickName',
            'phone_number','password','rePassword'];
            {INPUT_ARR.map(signupInput => {
              return (
                <signupInputList>
                  <input
                    key={signupInputList}
                    onChange={this.handleEmail}
                    className={signupInputList}
                    type={email}
                    placeholder={placeholder}
                  />
                </signupInputList>
              );
            })}
            ; */}

            {InputList.map(input => {
              return (
                <signupInputList
                  key={input.id}
                  name={input.name}
                  content={input.content}
                  inputType={input.inputType}
                  placeholder={input.placeholder}
                />
              );
            })}
            <signupInputList>
              <input
                key={signupInputList}
                className="emailAddress"
                type="email"
                placeholder="이메일 주소"
                onChange={this.handleEmail}
              />
            </signupInputList>
            <inputImages>
              <img
                id="emailaddressIcon"
                src="./images/email.png"
                alt="이메일주소아이콘"
              />
            </inputImages>
            <signupInputList>
              <input
                key={signupInputList}
                className="nickName"
                type="text"
                placeholder="닉네임"
                onChange={this.handlenickName}
              />
            </signupInputList>
            <inputImages>
              <img
                id="nicknameIcon"
                src="./images/user.png"
                alt="닉네임아이콘"
              />
            </inputImages>
            <signupInputList>
              <input
                key={signupInputList}
                className="phonNumver"
                type="text"
                placeholder="휴대폰번호 (- 제외)"
                onChange={this.handlephonNum}
              />
            </signupInputList>
            <inputImages>
              <img
                id="phonnumverIcon"
                src="./images/phone.png"
                alt="폰번호아이콘"
              />
            </inputImages>
            <signupInputList>
              <input
                key={signupInputList}
                className="signupPassword"
                type="text"
                placeholder="비밀번호"
                onChange={this.handlePwd}
              />
            </signupInputList>
            <inputImages>
              <img
                id="signuppwdIcon"
                src="./images/lock.png"
                alt="비밀번호아이콘"
              />
            </inputImages>
            <signupInputList>
              <input
                key={signupInputList}
                className="signupPassword_checkt"
                type="text"
                placeholder="비밀번호 확인"
                onChange={this.handlepwdCheck}
              />
            </signupInputList>
            <inputImages>
              <img
                id="signupPassword_checktIcon"
                src="./images/lock.png"
                alt="가입비밀번호체크아이콘"
              />
            </inputImages>
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
              onClick={this.handleSubmit}
              disabled={
                this.state.email.indexOf('@') !== -1 &&
                this.state.nickName.length > 5
                  ? false
                  : true
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
