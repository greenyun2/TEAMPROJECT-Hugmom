
function changePhone1() {
  const phone1 = document.querySelector("#phone_1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone_2").focus();
  }
}

function changePhone2() {
  const phone2 = document.querySelector("#phone_2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone_3").focus();
  }
}

function changePhone3() {
  const phone1 = document.querySelector("#phone_1").value;
  const phone2 = document.querySelector("#phone_2").value;
  const phone3 = document.querySelector("#phone_3").value
  if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.querySelector("#token_button").style = "background-color: #72981e; color: #fff; cursor: pointer";
    document.querySelector("#token_button").removeAttribute("disabled")
  }
}

function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token_number").innerText = token;

  document.querySelector("#token_button").style = "background-color: #cccccc; color: #fff";
  document.querySelector("#token_button").setAttribute("disabled", "true");
  document.querySelector("#token_wrapper").style = "color: #333333"
  document.querySelector("#token_complete_btn").style = "background-color: #72981e; color: #fff; cursor: pointer";
  document.querySelector("#token_complete_btn").removeAttribute("disabled");
  getTokenTimer();
}

let interval;
function getTokenTimer() {
  let timer = 180;

  interval = setInterval(() => {
    if(timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
  
      document.querySelector("#token_timer").innerText = minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      document.querySelector("#token_number").innerText = "000000";
      document.querySelector("#token_button").style = "";
      document.querySelector("#token_button").setAttribute("disabled", "true");
      document.querySelector("#token_timer").innerText = "3:00";
      document.querySelector("#token_complete_btn").style = "";
      document.querySelector("#token_complete_btn").setAttribute("disabled", "true");

      clearInterval(interval)
    }
  } ,1000)
}

function getTokenTimerConfirm(event) {
  event.preventDefault();

  clearInterval(interval);
  const tokenNumber = document.querySelector("#token_number").innerText;
  const tokenInput = document.querySelector("#token_complete_input").value;
  if (tokenNumber === tokenInput) {
    document.querySelector("#token_complete_btn").style.backgroundColor = "#cccccc";
    document.querySelector("#token_complete_btn").setAttribute("disabled", "true");
    document.querySelector("#token_complete_btn").innerText = "인증완료";
    alert("인증이 완료되었습니다.");
  } else {
    alert("인증번호를 확인해 주세요.");
  }
  return false;
}

// 이름 확인
const nameInput = document.getElementById("user_info_name");
const errorName = document.getElementById("error_name");

nameInput.addEventListener("blur", validateName);

function validateName() {
  const name = nameInput.value;

  if (name === "") {
    errorName.innerText = "이름을 입력해주세요.";
  } else if (name.length < 2 || name.length > 4) {
    errorName.innerText = "이름의 길이는 2~4자 입니다";
  } else {
    errorName.innerText = "";
  }
}

//  아이디 확인
const idInput = document.querySelector("#user_info_id");
const idCheckButton = document.querySelector(".line_id_check button");
const idCheckResult = document.querySelector(".id_check_result");

idInput.addEventListener("input", updateButtonStyle);
idCheckButton.addEventListener("click", checkIdValidity);

function updateButtonStyle() {
  idCheckButton.style.backgroundColor = "#72981e"; // 버튼 배경색 변경
  idCheckButton.style.color = "#fff"; // 버튼 텍스트 컬러 변경
}

function checkIdValidity() {
  const id = idInput.value;
  let isValid = true;
  let errorMessage = "";

  // 길이 제한: 최소 4자 이상, 최대 20자까지
  if (id.length < 4 || id.length > 20) {
    isValid = false;
    errorMessage = "아이디는 4~20자여야 합니다.";
  }

  // 허용 문자: 알파벳 (대문자 및 소문자), 숫자만 허용
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(id)) {
    isValid = false;
    errorMessage = "아이디는 알파벳과 숫자만 허용됩니다.";
  }

  // 공백 제한
  if (id.includes(" ")) {
    isValid = false;
    errorMessage = "아이디에 공백은 포함될 수 없습니다.";
  }

  // 유일성: 이미 사용 중인 아이디인지 확인하는 로직을 추가해야 합니다.

  if (isValid) {
    idCheckResult.innerText = "사용 가능한 아이디입니다.";
    idCheckResult.style.color = "#72981e"; // 초록색으로 표시
  } else {
    idCheckResult.innerText = errorMessage;
    idCheckResult.style.color = "#ff0000"; // 빨간색으로 표시
  }
}



// 비밀번호 유효성 검사
function validatePassword() {
  const passwordInput = document.getElementById('user_info_pw');
  const password = passwordInput.value;
  const errorElement = document.getElementById('error_pw');

  // 최소길이 요구사항: 8자 이상
  if (password.length < 8) {
    errorElement.innerText = '비밀번호는 최소 8자 이상이어야 합니다.';
    errorElement.style.color = ''; // 오류 메시지의 스타일 초기화
    return false;
  }

  // 복잡성 요구사항: 소문자, 숫자, 특수문자는 무조건 사용, 대문자는 선택사항
  if (!/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    errorElement.innerText = '비밀번호는 소문자, 숫자, 특수문자를 포함해야 합니다.';
    errorElement.style.color = ''; // 오류 메시지의 스타일 초기화
    return false;
  }

  // 공백 제한
  if (password.includes(' ')) {
    errorElement.innerText = '비밀번호에 공백을 포함할 수 없습니다.';
    errorElement.style.color = ''; // 오류 메시지의 스타일 초기화
    return false;
  }

  // 모든 조건을 만족하는 경우
  errorElement.innerText = '비밀번호 사용이 가능합니다.';
  errorElement.style.color = '#72981e'; // 비밀번호 사용 가능한 경우의 스타일 설정
  return true;
}

// 비밀번호 유효성 검사 트리거 설정
const passwordInput = document.getElementById('user_info_pw');
passwordInput.addEventListener('blur', validatePassword);



// 비밀번호 확인 유효성 검사 함수
function validatePasswordConfirmation() {
  const passwordInput = document.getElementById('user_info_pw');
  const confirmPasswordInput = document.getElementById('user_info_confirm_pw');
  const confirmPassword = confirmPasswordInput.value;
  const errorElement = document.getElementById('error_pw2');

  // 비밀번호와 비밀번호 확인이 일치하지 않는 경우
  if (passwordInput.value !== confirmPassword) {
    errorElement.innerText = '비밀번호가 일치하지 않습니다.';
    errorElement.style.color = ''; // 기존 스타일 초기화
    return false;
  }

  // 비밀번호와 비밀번호 확인이 공백인 경우
  if (passwordInput.value === "" && confirmPassword === "") {
    errorElement.innerText = '비밀번호를 확인해 주세요.'
    errorElement.style.color = '';
    return false;
  }

  // 일치하는 경우
  errorElement.innerText = '비밀번호가 일치합니다!';
  errorElement.style.color = '#72981e'; // 일치하는 경우의 스타일 설정
  return true;
}

// 비밀번호 확인 유효성 검사 트리거 설정
const confirmPasswordInput = document.getElementById('user_info_confirm_pw');
confirmPasswordInput.addEventListener('blur', validatePasswordConfirmation);



// 생년월일 유효성 검사
const birthInput = document.getElementById('user_info_birth_date');
const errorElement = document.getElementById('error_birth');

birthInput.addEventListener('blur', validateBirthDate);

function validateBirthDate() {
  const birthDate = birthInput.value;

// 1. 형식 검사: yyyymmdd
const regex = /^\d{8}$/;
if (!regex.test(birthDate)) {
  errorElement.innerText = '생년월일은 yyyymmdd 형식으로 입력해야 합니다.';
  return false;
}

  // 2. 유효한 날짜 검사
  const isValidDate = isValidDateFormat(birthDate);
  if (!isValidDate) {
    errorElement.innerText = '유효하지 않은 날짜입니다.';
    return false;
  }

  // 3. 날짜 범위 검사
  const isValidRange = isValidDateRange(birthDate);
  if (!isValidRange) {
    errorElement.innerText = '생년월일은 현재 날짜보다 과거여야 합니다.';
    return false;
  }

  // 4. 연령 제한: 20세 이상
  const isValidAge = isValidAgeRestriction(birthDate);
  if (!isValidAge) {
    errorElement.innerText = '20세 이상만 등록 가능합니다.';
    return false;
  }

  // 모든 조건을 만족하는 경우
  errorElement.innerText = '';
  return true;
}

function isValidDateFormat(birthDate) {
  const regex = /^\d{8}$/;
  return regex.test(birthDate);
}

function isValidDateRange(birthDate) {
  const currentDate = new Date();
  const year = parseInt(birthDate.substring(0, 4));
  const month = parseInt(birthDate.substring(4, 6)) - 1;
  const day = parseInt(birthDate.substring(6, 8));
  const birthDateObject = new Date(year, month, day);

  return birthDateObject <= currentDate;
}

function isValidAgeRestriction(birthDate) {
  const currentDate = new Date();
  const year = parseInt(birthDate.substring(0, 4));
  const month = parseInt(birthDate.substring(4, 6)) - 1;
  const day = parseInt(birthDate.substring(6, 8));
  const birthDateObject = new Date(year, month, day);

  const ageDiffMs = currentDate - birthDateObject;
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age >= 20;
}


// 이메일
const emailInput = document.querySelector("#user_info_email");
const errorEmail = document.querySelector("#error_email");

emailInput.addEventListener("blur", validateEmail);

function validateEmail() {
  const email = emailInput.value;
  let errorMessage = "";

  // 형식 검사
  const formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatRegex.test(email)) {
    errorMessage = "유효한 이메일 주소를 입력해야 합니다.";
    errorEmail.innerText = errorMessage;
    errorEmail.style.color = "";
    return false;
  }

  // 도메인 검사
  const domain = email.split("@")[1];
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domain)) {
    errorMessage = "유효한 도메인을 사용해야 합니다.";
    errorEmail.innerText = errorMessage;
    errorEmail.style.color = "";
    return false;
  }

  // 유효한 이메일 주소인 경우
  errorEmail.style.color = "#72981e"
  errorEmail.innerText = "이메일 사용이 가능합니다.";
  
  // 추가 로직 작성
}

// 주소 우편번호 API
const addressBtn = document.querySelector("#address_btn");
addressBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let width = 500; //팝업의 너비
  let height = 600; //팝업의 높이
  new daum.Postcode({
    width: width,
    height: height,
    oncomplete: function(data) {
      document.querySelector('#zip_code').value = data.zonecode;
      let fullAddr = '';
      let extraAddr = '';

      if(data.userSelectedType === 'R') {
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      if(data.userSelectedType === 'R') {
        if(data.bname !== '') {
          extraAddr += data.bname;
        }
        if(data.buildingName !== '') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }

        fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
      }
      document.querySelector('#address_1').value = fullAddr;
      document.querySelector('#user_info_location').focus();
    }
}).open({
  left: (window.screen.width / 2) - (width / 2),
  top: (window.screen.height / 2) - (height / 2)
});
})

// 산후조리원 주소 API
const careCenterBtn = document.querySelector("#carecenter_btn");
careCenterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let width = 500; //팝업의 너비
  let height = 600; //팝업의 높이
  new daum.Postcode({
    width: width,
    height: height,
    oncomplete: function(data) {
      let fullAddr = '';
      let extraAddr = '';

      if(data.userSelectedType === 'R') {
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      if(data.userSelectedType === 'R') {
        if(data.bname !== '') {
          extraAddr += data.bname;
        }
        if(data.buildingName !== '') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }

        fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
      }
      document.querySelector('#carecenter_address').value = fullAddr;
      document.querySelector('#carecenter_info_sub').focus();
    }
}).open({
  left: (window.screen.width / 2) - (width / 2),
  top: (window.screen.height / 2) - (height / 2)
});
})

// 약관동의
const agreementCheck1 = document.querySelector('#agreement_check1');
const agreementCheck2 = document.querySelector('#agreement_check2');
const agreementCheck3 = document.querySelector('#agreement_check3');
const allAgreement = document.querySelector('#all_agreement');

agreementCheck1.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#agreement_circle_1').classList.toggle('check');
})
agreementCheck2.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#agreement_circle_2').classList.toggle('check');
})
agreementCheck3.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#agreement_circle_3').classList.toggle('check');
})

allAgreement.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#agreement_circle_1').classList.toggle('check');
  document.querySelector('#agreement_circle_2').classList.toggle('check');
  document.querySelector('#agreement_circle_3').classList.toggle('check');
})

// 전체동의 
function signup(event) {
  event.preventDefault()
  let isValid;
  const checkCircle1 = document.querySelector('#agreement_circle_1');
  const checkCircle2 = document.querySelector('#agreement_circle_2');

  if(checkCircle1.classList.contains('check') !== true && checkCircle2.classList.contains('check') === true) {
    alert("이용약관에 동의해주세요!");
    isValid = false;
  }

  if(checkCircle1.classList.contains('check') === true && checkCircle2.classList.contains('check') !== true) {
    alert("개인정보 취급방침에 동의해주세요!");
    isValid = false;
  }

  if(checkCircle1.classList.contains('check') !== true && checkCircle2.classList.contains('check') !== true) {
    alert("이용약관과 개인정보 취급방침에 동의해주세요!");
    isValid = false;
  }

  if(checkCircle1.classList.contains('check') === true && checkCircle2.classList.contains('check') === true) {
    alert("회원가입을 환영합니다!");
    isValid = true;
  }

  navigateToOtherPage(isValid);
}
function navigateToOtherPage(isValid) {
  if(isValid !== false) {
    location.href = "02-signin.html";
  }
}












