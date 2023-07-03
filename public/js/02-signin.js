const idInput = document.querySelector("#idInput");
const pwInput = document.querySelector("#pwInput");
// 버튼
const loginBtn = document.querySelector(".signin_page_login_btn");

loginBtn.addEventListener("click", () => {
  const loginId = "hugmom123";
  const loginPw = "hugmom123";

  if (idInput.value === "" && pwInput.value === "") {
    alert("아이디와 비밀번호를 입력해 주세요!");
  } else if (idInput.value === loginId && pwInput.value === "") {
    alert("비밀번호를 입력해 주세요!");
  } else if (idInput.value === "" && pwInput.value === loginPw) {
    alert("아이디를 입력해 주세요!");
  } else if (idInput.value === loginId && pwInput.value !== loginPw) {
    alert("비밀번호를 확인해 주세요!");
  } else if (idInput.value !== loginId && pwInput.value === loginPw) {
    alert("아이디를 확인해 주세요");
  } else if (idInput.value !== loginId && pwInput.value !== loginPw) {
    alert("아이디와 비밀번호를 확인해 주세요!");
  } else {
    alert(`환영합니다 ${loginId}님!`);
    location.href = "/html/01-intro.html";
  }
});
