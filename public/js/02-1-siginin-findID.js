// 휴대폰 인증
const getTokenBtn = document.querySelector(".find_get_token");
const nameInput1 = document.querySelectorAll(".signin_find_name")[0];
const phoneInput = document.querySelector(".signin_find_phone");

getTokenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = nameInput1.value;
  const phoneVal = phoneInput.value;
  if (nameVal.length == 0 && phoneVal.length == 0) {
    document.querySelector(".error_m_1").style.display = "block";
    document.querySelector(".error_m_2").style.display = "block";
    nameInput1.focus();
  } else if (nameVal.length == 0) {
    document.querySelector(".error_m_1").style.display = "block";
    nameInput1.focus();
  } else if (phoneVal.length == 0) {
    document.querySelector(".error_m_2").style.display = "block";
    phoneInput.focus();
  } else {
    alert("인증번호를 발송하였습니다.");
    nameInput1.value = "";
    phoneInput.value = "";
  }
});

nameInput1.addEventListener("keyup", () => {
  const nameVal = nameInput1.value;

  if (nameVal.length > 0) {
    document.querySelector(".error_m_1").style.display = "none";
  } else {
    document.querySelector(".error_m_1").style.display = "block";
  }
});
phoneInput.addEventListener("keyup", () => {
  const phoneVal = phoneInput.value;
  if (phoneVal.length > 0) {
    document.querySelector(".error_m_2").style.display = "none";
  } else {
    document.querySelector(".error_m_2").style.display = "block";
  }
});

// 이메일 인증
const getEmailBtn = document.querySelector(".find_get_email");
const nameInput2 = document.querySelectorAll(".signin_find_name")[1];
const emailInput = document.querySelector(".signin_find_email");

getEmailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = nameInput2.value;
  const emailVal = emailInput.value;

  if (nameVal.length == 0 && emailVal.length == 0) {
    document.querySelector(".error_m_3").style.display = "block";
    document.querySelector(".error_m_4").style.display = "block";
    nameInput2.focus();
  } else if (nameVal.length == 0) {
    document.querySelector(".error_m_3").style.display = "block";
    nameInput2.focus();
  } else if (emailVal.length == 0) {
    document.querySelector(".error_m_4").style.display = "block";
    emailInput.focus();
  } else {
    alert("인증메일을 발송하였습니다.");
    nameInput2 = "";
    emailInput = "";
  }
});

nameInput2.addEventListener("keyup", () => {
  const nameVal = nameInput2.value;
  if (nameVal.length > 0) {
    document.querySelector(".error_m_3").style.display = "none";
  } else {
    document.querySelector(".error_m_3").style.display = "block";
  }
});
emailInput.addEventListener("keyup", () => {
  const emailVal = emailInput.value;
  if (emailVal.length > 0) {
    document.querySelector(".error_m_4").style.display = "none";
  } else {
    document.querySelector(".error_m_4").style.display = "block";
  }
});
