function inputcheck() {
  if (document.reggFrm.id.value == '') {
    alert('이메일 형식이 올바르지 않습니다.');
    document.reggFrm.id.focus();
    return;
  }

  if (document.reggNickname.id.value == '') {
    alert('사용하실 수 없는 닉네임입니다. 다른 닉네임을 선택해주세요.');
    document.regNickname.id.focus();
  }

  if (document.regPhonnum.id.value == '') {
    alert('휴대폰 번호를 입력해주세요!');
    document.regPhonnum.id.focus();
  }

  if (document.regPw.id.value == '') {
    alert('비밀번호를 8자 이상으로 입렵해주세요!');
    document.regPw.id.focus();
  }

  if (document.regFrm.pwd.value !== document.regFrm.repwd.value) {
    alert('비밀번호와 비밀번호 확인이 일치 하지 않습니다.');
    document.regFrm.regPw.value = '';
    document.regFrm.id.focus();
    return;
  }
}
