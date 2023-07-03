// 카트 아이콘 클릭시 알림창 뜨기
const addCartIconBtn = document.querySelectorAll(".add_cart_icon_btn");
let cartCount = 3;
addCartIconBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("선택하신 상품이 장바구니에 담겼습니다");

    // 카트 아이콘 클릭시 헤더-카트아이콘에 숫자 추가
    cartCount += 1;
    document.querySelectorAll(".cart_count")[0].innerText = cartCount;
    document.querySelectorAll(".cart_count")[1].innerText = cartCount;
  });
});

// 인기상품 더보기 클릭시, 상품 다 뜨게
const usermallItems = document.querySelectorAll(".user_mall_item");
const moreHotItemBtn = document.querySelector(".more_view_hotitem_btn");

moreHotItemBtn.addEventListener("click", () => {
  for (let i = 0; i < usermallItems.length; i++) {
    if (i > 5) {
      usermallItems[i].style.display = "block";
    }
  }
  moreHotItemBtn.style.display = "none";
});

const recommendBtn = document.querySelector("#recommend_btn");
const newProductBtn = document.querySelector("#newProdut_btn");
const salesBtn = document.querySelector("#sales_btn");

recommendBtn.addEventListener("click", () => {
  // 추천순, 신상품순, 판매순 클릭시 순서 바꾸기
  const itemDiv = document.querySelectorAll(".user_mall_item")[0];
  const itemDiv2 = document.querySelectorAll(".user_mall_item")[1];
  const items = itemDiv.parentNode;
  items.insertBefore(itemDiv, items.firstChild);
  items.insertBefore(itemDiv2, items.firstChild);
  console.log(itemDiv);
  console.log(items);
});

newProductBtn.addEventListener("click", () => {
  // 추천순, 신상품순, 판매순 클릭시 순서 바꾸기
  const itemDiv = document.querySelectorAll(".user_mall_item")[3];
  const itemDiv2 = document.querySelectorAll(".user_mall_item")[0];
  const items = itemDiv.parentNode;
  items.insertBefore(itemDiv, items.firstChild);
  items.insertBefore(itemDiv2, items.childNodes[5]);
});

salesBtn.addEventListener("click", () => {
  // 추천순, 신상품순, 판매순 클릭시 순서 바꾸기
  const itemDiv = document.querySelectorAll(".user_mall_item")[3];
  const items = itemDiv.parentNode;
  items.insertBefore(itemDiv, items.lastChild);
});

// 추천순, 신상품순, 판매량순 클릭시 스타일주기
function newItemOrder() {
  newProductBtn.classList.add("order_checked");
  recommendBtn.classList.remove("order_checked");
  salesBtn.classList.remove("order_checked");
}
function recommendItemOrder() {
  recommendBtn.classList.add("order_checked");
  newProductBtn.classList.remove("order_checked");
  salesBtn.classList.remove("order_checked");
}
function salesItemOrder() {
  salesBtn.classList.add("order_checked");
  newProductBtn.classList.remove("order_checked");
  recommendBtn.classList.remove("order_checked");
}
