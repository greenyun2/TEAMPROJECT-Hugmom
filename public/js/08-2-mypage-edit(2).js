
// 수정하기 버튼
const editBtn = document.querySelector('.mypage_userInfo_edit #editBtn');

editBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(birthYear.value !== '' && birthMonth.value !== '선택' && birthDate.value !== '' && emailId.value !== '' && emailAuto.value !== '' && postNumber.value !== '' && addressHomeDetail.value !== '' && careCenter.value !== '' && addressCenterDetail.value !== '') {
    alert('회원정보 수정이 완료되었습니다! 💚');
    window.location.href = '08-1-mypage.html';
  } else {
    alert('입력란이 비어있습니다.');
  }

  if (birthYear.value !== '' && birthMonth.value !== '선택' && birthDate.value !== '') {
    errorBirth.style.display = 'none';
  } else {
    errorBirth.style.display = 'inline-block';
  }

  if (emailId.value !== '' && emailAuto.value !== '') {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'inline-block';
  }

  if(postNumber.value !== '' && addressHomeDetail.value !== '') {
    errorAddHome.style.display = 'none';
  } else {
    errorAddHome.style.display = 'inline-block';
  }

  if(careCenter.value !== '' && addressCenterDetail.value !== '') {
    errorAddCenter.style.display = 'none';
  } else {
    errorAddCenter.style.display = 'inline-block';
  }

  if(document.querySelector('#p1').value !== "" && document.querySelector('#p2').value !== "" && document.querySelector('#p3').value !== "") {
    errorPhone.style.display = "none";
  } else {
    errorPhone.style.display = "inline-block";
  }
})

// 비밀번호 재설정, 비밀번호 재설정 확인
const resetPw = document.querySelector('.mypage_userInfo_edit .resetPw');
const resetPwChk = document.querySelector('.mypage_userInfo_edit .resetPw_chk');
const errorPw = document.querySelector('.mypage_userInfo_edit .errorPw');

resetPwChk.addEventListener('input', () => {
  if (resetPw.value === resetPwChk.value) {
    errorPw.style.display = 'none';
  } else {
    errorPw.style.display = 'inline-block';
  }
});

// 생년월일
const birthYear = document.querySelector('.mypage_userInfo_edit .birthYear');
const birthMonth = document.querySelector('.mypage_userInfo_edit .birthMonth');
const birthDate = document.querySelector('.mypage_userInfo_edit .birthDate');
const errorBirth = document.querySelector('.mypage_userInfo_edit .errorBirth');

birthYear.addEventListener('input', () => {
  if (birthYear.value !== '' && birthMonth.value !== '선택' && birthDate.value !== '') {
    errorBirth.style.display = 'none';
  } else {
    errorBirth.style.display = 'inline-block';
  }
});
birthMonth.addEventListener('change', () => {
  if (birthYear.value !== '' && birthMonth.value !== '선택' && birthDate.value !== '') {
    errorBirth.style.display = 'none';
  } else {
    errorBirth.style.display = 'inline-block';
  }
});
birthDate.addEventListener('input', () => {
  if (birthYear.value !== '' && birthMonth.value !== '선택' && birthDate.value !== '') {
    errorBirth.style.display = 'none';
  } else {
    errorBirth.style.display = 'inline-block';
  }
});


// 이메일
const emailId = document.querySelector('.mypage_userInfo_edit .emailId');
const emailAuto = document.querySelector('.mypage_userInfo_edit .emailAuto');
const errorEmail = document.querySelector('.mypage_userInfo_edit .errorEmail');
const selectEmail = document.querySelector('.mypage_userInfo_edit .selectEmail');

emailId.addEventListener('input', () => {
  if (emailId.value !== '' && emailAuto.value !== '') {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'inline-block';
  }
});
emailAuto.addEventListener('input', () => {
  if (emailId.value !== '' && emailAuto.value !== '') {
    errorEmail.style.display = 'none';
  } else {
    errorEmail.style.display = 'inline-block';
  }
});

selectEmail.addEventListener('change', () => {
  const selectedOpt = selectEmail.value;
  emailAuto.value = selectedOpt;
  errorEmail.style.display = 'none';
});


// 집주소
const postNumber = document.querySelector('.mypage_userInfo_edit .postNumber');
const addressHomeDetail = document.querySelector('.mypage_userInfo_edit .address_home');
const errorAddHome = document.querySelector('.mypage_userInfo_edit .errorAddHome');
const searchAddNum = document.querySelector('.mypage_userInfo_edit #searchAddNum');

postNumber.addEventListener('input', () => {
  if (postNumber.value !== '' && addressHomeDetail.value !== '') {
    errorAddHome.style.display = 'none';
  } else {
    errorAddHome.style.display = 'inline-block';
  }
});

addressHomeDetail.addEventListener('input', () => {
  if (postNumber.value !== '' && addressHomeDetail.value !== '') {
    errorAddHome.style.display = 'none';
  } else {
    errorAddHome.style.display = 'inline-block';
  }
});
searchAddNum.addEventListener('click', () => {
  window.open('https://www.epost.go.kr/search.RetrieveIntegrationNewZipCdList.comm', '_blank')
});


// 산후조리원 주소
const careCenter = document.querySelector('.mypage_userInfo_edit .careCenter');
const addressCenterDetail = document.querySelector('.mypage_userInfo_edit .address_center');
const errorAddCenter = document.querySelector('.mypage_userInfo_edit .errorAddCenter');
const searchCenterNum = document.querySelector('.mypage_userInfo_edit #searchCenterNum');

addressCenterDetail.addEventListener('input', () => {
  if (careCenter.value !== '' && addressCenterDetail.value !== '') {
    errorAddCenter.style.display = 'none';
  } else {
    errorAddCenter.style.display = 'inline-block';
  }
});
searchCenterNum.addEventListener('click', () => {
  window.open('https://www.epost.go.kr/search.RetrieveIntegrationNewZipCdList.comm', '_blank')
});



// 휴대폰
let isStarted = false;
const btn = document.querySelector('.mypage_userInfo_edit .send-btn');
const resultTime = document.querySelector('.mypage_userInfo_edit .result-time');
const errorPhone = document.querySelector('.mypage_userInfo_edit .errorPhone');

const inputNum = document.querySelector('.mypage_userInfo_edit .input-num');
const completeBtn = document.querySelector('.mypage_userInfo_edit .complete');

const changeFocus1 = () => {
  let phone1 = document.querySelector('#p1').value;
  if(phone1.length === 3) {
    document.querySelector('#p2').focus();
  }
}
const changeFocus2 = () => {
  let phone2 = document.querySelector('#p2').value;
  if(phone2.length === 4) {
    document.querySelector('#p3').focus();
  }
}
const changeFocus3 = () => {
  let p1 = document.querySelector('#p1').value;
  let p2 = document.querySelector('#p2').value;
  let p3 = document.querySelector('#p3').value;

  if(p1 && p2 && p3) {
    btn.disabled = false;

  } else {
    btn.disabled = true;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if(isStarted === false) {
    // 카운터가 작동중일 때
    isStarted = true;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    alert(`인증번호 : ${token}`);
    console.log(token);
  
    let time = 180;

    let timer = setInterval(function () {
      if(time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        resultTime.innerText = min + " : " + sec;
        time -= 1;
      } else {
        // 카운터 작동이 끝났을 때
        completeBtn.disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000); 

    completeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(inputNum.value === token) {
        alert('인증이 완료되었습니다.');
      } else {
        alert('인증번호가 일치하지 않습니다.');
        location.reload();
      }
    });
  }
});
