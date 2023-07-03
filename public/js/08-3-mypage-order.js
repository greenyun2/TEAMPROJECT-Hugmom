// 08-3-mypage-order
const allProduct = document.querySelector('.order_type .allProduct');
const reservedProduct = document.querySelector('.order_type .reservedProduct');

const month1 = document.querySelector('.inquiry_period .month1');
const month3 = document.querySelector('.inquiry_period .month3');
const month6 = document.querySelector('.inquiry_period .month6');
const year1 = document.querySelector('.inquiry_period .year1');

const orderChkBtn = document.querySelector('.orderChk_btn');
const historyBox = document.querySelectorAll('.mypage_shoppingInfo_order_history .contents');
// const history1All = document.querySelectorAll('.mypage_shoppingInfo_order_history .history1');
const history1 = document.querySelectorAll('.mypage_shoppingInfo_order_history .history1');
const history2 = document.querySelector('.mypage_shoppingInfo_order_history .history2');
const history3 = document.querySelector('.mypage_shoppingInfo_order_history .history3');
const history4 = document.querySelector('.mypage_shoppingInfo_order_history .history4');
const reserve1 = document.querySelector('.mypage_shoppingInfo_order_history .reserve1');


// 주문종류 선택
function orderType() {
  // 주문종류 > 전체
  allProduct.addEventListener('click', () => {
    if(!allProduct.classList.contains('selected_btn')) {
      allProduct.classList.add('selected_btn');
      reservedProduct.classList.remove('selected_btn');
    }
  });
  // 주문종류 > 예약상품
  reservedProduct.addEventListener('click', () => {
    if(!reservedProduct.classList.contains('selected_btn')) {
      reservedProduct.classList.add('selected_btn');
      allProduct.classList.remove('selected_btn');
    }      
  });
}

// 조회기간 선택
function inquiryPeriod() {
  // 조회기간 > 1개월
  month1.addEventListener('click', () => {
    if(!month1.classList.contains('selected_btn')) {
      month1.classList.add('selected_btn');
      month3.classList.remove('selected_btn');
      month6.classList.remove('selected_btn');
      year1.classList.remove('selected_btn');
    }
  });
  // 조회기간 > 3개월
  month3.addEventListener('click', () => {
    if(!month3.classList.contains('selected_btn')) {
      month3.classList.add('selected_btn');
      month1.classList.remove('selected_btn');
      month6.classList.remove('selected_btn');
      year1.classList.remove('selected_btn');
    }
  });
  // 조회기간 > 6개월
  month6.addEventListener('click', () => {
    if(!month1.classList.contains('selected_btn')) {
      month6.classList.add('selected_btn');
      month1.classList.remove('selected_btn');
      month3.classList.remove('selected_btn');
      year1.classList.remove('selected_btn');
    }
  });
  // 조회기간 > 1년
  year1.addEventListener('click', () => {
    if(!year1.classList.contains('selected_btn')) {
      year1.classList.add('selected_btn');
      month1.classList.remove('selected_btn');
      month3.classList.remove('selected_btn');
      month6.classList.remove('selected_btn');
    }
  });
}
orderType();
inquiryPeriod();

// 초기화면 history1 3개 모두 화면에 표시
for (let i = 0; i < history1.length; i++) {
  history1[i].style.display = 'flex';
}

// 조회 버튼 눌렀을 시 주문내역 표시
orderChkBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (reservedProduct.classList.contains('selected_btn')) {
    // reservedProduct를 눌렀을 때
    for (let i = 0; i < history1.length; i++) {
      history1[i].style.display = 'none';
    }
    history2.style.display = 'none';
    history3.style.display = 'none';
    history4.style.display = 'none';
    reserve1.style.display = 'flex';
  } else {
    // reservedProduct 이외의 경우
    if (allProduct.classList.contains('selected_btn')) {
      if (month1.classList.contains('selected_btn')) {
        for (let i = 0; i < history1.length; i++) {
          history1[i].style.display = 'flex';
        }
        history2.style.display = 'none';
        history3.style.display = 'none';
        history4.style.display = 'none';
        reserve1.style.display = 'none';
      } else if (month3.classList.contains('selected_btn')) {
        for (let i = 0; i < history1.length; i++) {
          history1[i].style.display = 'flex';
        }
        history2.style.display = 'flex';
        history3.style.display = 'none';
        history4.style.display = 'none';
        reserve1.style.display = 'none';
      } else if (month6.classList.contains('selected_btn')) {
        for (let i = 0; i < history1.length; i++) {
          history1[i].style.display = 'flex';
        }
        history2.style.display = 'flex';
        history3.style.display = 'flex';
        history4.style.display = 'none';
        reserve1.style.display = 'none';
      } else {
        for (let i = 0; i < history1.length; i++) {
          history1[i].style.display = 'flex';
        }
        history2.style.display = 'flex';
        history3.style.display = 'flex';
        history4.style.display = 'flex';
        reserve1.style.display = 'none';
      }
    } else {
      for (let i = 0; i < historyBox.length; i++) {
        historyBox[i].style.display = 'none';
      }
    }
  }
});