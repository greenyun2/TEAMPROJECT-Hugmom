// 08-2-mypage-edit(1)
const inputPw = document.querySelector('.mypage_userInfo_identification .inputPw');
const inputCode = document.querySelector('.mypage_userInfo_identification .inputCode');
const errorPw = document.querySelector('.mypage_userInfo_identification .errorM_pw');
const errorCode = document.querySelector('.mypage_userInfo_identification .errorM_code');
const identificationBtn = document.querySelector('.mypage_userInfo_identification .identification_btn');


// 만약 비밀번호와 임산부코드가 정해져있다면 정의하기
// let userPw = hugmom123;
// let userCode = AAAAAA;

inputPw.addEventListener('input', () => {
  if(inputPw.value === '') {
    errorPw.style.display = 'inline-block';
  } else {
    errorPw.style.display = 'none';
  }
});

inputCode.addEventListener('input', () => {
  if(inputCode.value === '') {
    errorCode.style.display = 'inline-block';
  } else {
    errorCode.style.display = 'none';
  }
});

identificationBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(inputPw.value !== '' && inputCode.value !== '') {
    alert('본인인증이 완료되었습니다.');
    window.location.href = '08-2-mypage-edit(2).html';
  } else {
    alert('입력란이 비어있습니다.');
    errorPw.style.display = 'inline-block';
    errorCode.style.display = 'inline-block';
  }
  inputPw.value = '';
  inputCode.value = '';
});