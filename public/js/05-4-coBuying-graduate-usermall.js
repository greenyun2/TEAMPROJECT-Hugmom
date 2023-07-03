const coBuyingTimer = document.querySelectorAll(".co-timer"); //타이머 출력공간
let time = 12960; //3시간 36분을 초로 나타냄
let coTimer = setInterval(function () {
  //coTimer 라는 셋인터벌함수
  if (time >= 0) {
    let hour = String(Math.floor(time / 3600)).padStart("2", 0); //시간
    let timeOrigin = time % 3600;
    let min = String(Math.floor(timeOrigin / 60)).padStart("2", 0); //분
    let sec = String(time % 60).padStart("2", 0); //초
    time = time - 1; //1초씩 줄어들기
    // console.log(`${hour}:${min}:${sec}`);

    coBuyingTimer.forEach((timer) => {
      //타이머출력공간에
      timer.innerHTML = `남은공구시간 ${hour}:${min}:${sec}`; //출력하기
    });
  } else {
    // time < 0 이라면 함수종료
    clearInterval(coTimer);
  }
}, 1000); // 1초마다 함수실행.
