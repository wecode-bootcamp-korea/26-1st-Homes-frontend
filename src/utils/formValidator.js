export default class FormValidator {
  static _checkName(props) {
    let regcheckName = new RegExp(/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/);
    return regcheckName.test(props) ? true : false;
  }

  static _checkNickname(props) {
    let regNickName = new RegExp(/^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/);
    return regNickName.test(props) ? true : false;
  }

  static _checkEmail(props) {
    let regEmail = new RegExp(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'/
    );
    return regEmail.test(props) ? true : false;
  }

  static _checkPhoneNumber(props) {
    let regPhone = new RegExp(/^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/);
    return regPhone.test(props) ? true : false;
  }

  static _checkPassword(props) {
    let regPassword = new RegExp(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/
    );
    return regPassword.test(props) ? true : false;
  }

  static _checkrePassword(props) {
    let regPassword = new RegExp(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$/
    );
    return regPassword.test(props) ? true : false;
  }
}
