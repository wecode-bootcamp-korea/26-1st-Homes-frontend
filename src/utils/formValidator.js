export default class FormValidator {
  // 닉네임 (특수 문자 제외 최소 2자 이상)
  static _checkNickname(props) {
    let regNickName = new RegExp(/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/);
    return regNickName.test(props) ? true : false;
  }

  static _checkEmail(props) {
    let regEmail = new RegExp(/^[a-z0-9.\-_]+@([a-z0-9-]+\.)+[a-z]{2,6}$/);
    return regEmail.test(props) ? true : false;
  }

  static _checkPhoneNumber(props) {
    let regPhone = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
    return regPhone.test(props) ? true : false;
  }

  // 비밀번호 (최소 8자리,대문자 1, 소문자1, 숫자1, 특수문자1)
  static _checkPassword(props) {
    let regPassword = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
    );
    return regPassword.test(props) ? true : false;
  }
}
