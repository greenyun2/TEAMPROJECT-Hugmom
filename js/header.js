/* Mobile ver. header Open & close */
const hedaerMenuList = document.querySelector(".header_menu_list");
const menuToggleBtn = document.querySelector(".menu_toggle_btn");
// 메뉴 토글버튼 클릭 열기, 닫기
menuToggleBtn.addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
});

// 모바일에서 메뉴 클릭시 하위 메뉴 나오기
const menuShop = document.querySelector(".header_menu.shop");
const menuShopList = document.querySelector(".shop_malls");
menuShop.addEventListener("click", () => {
  menuShopList.style.height = "74px";
  menuCsList.style.height = "0px";
  menuMypageList.style.height = "0px";
});

const menuCs = document.querySelector(".header_menu.cs");
const menuCsList = document.querySelector(".cs_menu_list");
menuCs.addEventListener("click", () => {
  menuCsList.style.height = "74px";
  menuShopList.style.height = "0px";
  menuMypageList.style.height = "0px";
});

const menuMypage = document.querySelector(".header_menu.mobile_myFage");
const menuMypageList = document.querySelector(".mobile_myFage_list");
menuMypage.addEventListener("click", () => {
  menuMypageList.style.height = "112px";
  menuShopList.style.height = "0px";
  menuCsList.style.height = "0px";
});

// 메뉴 닫기 X버튼 클릭시 닫기
const menuCloseBtn = document.querySelector(".mobile_close_menu_btn");

menuCloseBtn.addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
});
//메인영역 클릭해도 메뉴 닫기
document.querySelector("main").addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  }
});

/* Mobile ver. Header Tiltle-Text 변경 */
const headerTitle = document.querySelector(".header_title_section h1");

window.addEventListener("load", () => {
  const url = window.location.href;
  const urlElements = url.split("/").filter((value) => {
    return value.includes(".html");
  });
  const urlEl = urlElements.toString();

  if (urlEl.includes("mall")) {
    headerTitle.innerText = "SHOP";
  } else if (urlEl.includes("live")) {
    headerTitle.innerText = "LIVE";
  } else if (urlEl.includes("signin")) {
    headerTitle.innerText = "로그인";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  } else if (urlEl.includes("mypage")) {
  } else if (urlEl.includes("signup")) {
    headerTitle.innerText = "회원가입";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  } else if (urlEl.includes("mypage")) {
    headerTitle.innerText = "마이페이지";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  } else if (urlEl.includes("cs")) {
    headerTitle.innerText = "고객센터";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  } else if (urlEl.includes("inquiry")) {
    headerTitle.innerText = "문의하기";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  }
});
