const inquiryBtn = document.querySelector(".btn_inquiry_submit button");
const inquiryText = document.querySelector(".inquiry_text_input textarea");
const inquirySel1 = document.querySelector("#select_1");
const inquirySel2 = document.querySelector("#select_2");
const inquiryTitle = document.querySelector(".inquiry_title input");

inquiryBtn.addEventListener("click", () => {
  if (inquirySel1.value === "0") {
    alert("문의유형을 선택해주세요.");
    inquirySel1.focus();
  } else {
    if (inquirySel2.value === "0") {
      alert("상세유형을 선택해주세요.");
      inquirySel2.focus();
    } else {
      if (inquiryTitle.value === "") {
        alert("제목을 입력해주세요");
        inquiryTitle.focus();
      } else {
        if (inquiryText.value === "") {
          alert("문의하실 내용을 입력해주세요");
          inquiryText.focus();
        } else {
          alert("문의하신 내용이 등록되었습니다.");
          inquirySel1.value = "0";
          inquirySel2.value = "0";
          inquiryTitle.value = "";
          inquiryText.value = "";
        }
      }
    }
  }
});

// 선택한 문의유형에 따라 상세유형이 보이게 하기
function categoryChange(e) {
  const opt1 = [
    "주문취소 해주세요",
    "상품 반품을 원해요",
    " 상품 교환을 원해요",
    "주문/결제는 어떻게 하나요?",
    "주문/결제 오류",
    "기타",
  ];
  const opt2 = ["불량상품이에요", "상품에대해 알려주세요", "기타"];
  const opt3 = [
    "배송상품이 안왔어요",
    "배송지 변경해주세요",
    "포장상태가 좋지 않아요",
    "기타",
  ];
  const opt4 = [
    "이용중에 오류가 발생했어요",
    "산후조리원 코드가 무엇인가요?",
    "제안하고 싶어요",
    "기타",
  ];
  let opt;
  if (e.value === "1") {
    opt = opt1;
  } else if (e.value === "2") {
    opt = opt2;
  } else if (e.value === "3") {
    opt = opt3;
  } else if (e.value === "4") {
    opt = opt4;
  }
  inquirySel2.options.length = 0;

  for (let el in opt) {
    const newOpt = document.createElement("option");
    newOpt.value = opt[el];
    newOpt.innerHTML = opt[el];
    inquirySel2.appendChild(newOpt);
  }
}

// 이미지 업로드
const fileInput = document.querySelector("#file_upload");

const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();

  fileReader.readAsDataURL(selectedFile[0]);
  fileReader.onload = () => {
    document.querySelector("#previewImg").src = fileReader.result;
  };
};

fileInput.addEventListener("change", handleFiles);
