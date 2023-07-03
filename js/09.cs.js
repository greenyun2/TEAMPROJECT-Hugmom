const chatbotbtn = document
  .querySelector(".chatbotbtn")
  .addEventListener("click", () => {
    alert("챗봇 페이지로 연결됩니다.");
  });
const list_item = document.querySelectorAll(".cs_ask_ques_accordion_item");
const text = document.querySelectorAll(".text");

list_item.forEach(function (e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  let open_text = e.currentTarget.classList;

  if (open_text.contains("open")) {
    open_text.remove("open");
  } else {
    list_item.forEach(function (e) {
      e.classList.remove("open");
    });
    open_text.add("open");
  }
}

const filterbtn = document.querySelector(".filterbtn");
const valueInput = document.querySelector("#valueInput");
const err = document.querySelector(".err");

filterbtn.addEventListener("click", filter);
valueInput.addEventListener("keyup", handleInputChange);

function filter() {
  let value = valueInput.value;
  let item = document.querySelectorAll(".cs_ask_ques_accordion_item");
  let searchResults = 0;

  for (let i = 0; i < item.length; i++) {
    let title = item[i].querySelector(".accordionTitle");
    let titleText = title.innerText;

    let regex = new RegExp(
      value.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
      "i"
    );
    if (regex.test(titleText)) {
      item[i].style.display = "flex";
      searchResults++;
    } else {
      item[i].style.display = "none";
    }
  }

  if (searchResults === 0) {
    err.style.display = "flex";
    err.innerHTML = `<h1>검색 결과가 없습니다</h1>`;
  }
}

function handleInputChange(e) {
  if (valueInput.value === "") {
    let item = document.querySelectorAll(".cs_ask_ques_accordion_item");
    for (let i = 0; i < item.length; i++) {
      item[i].style.display = "flex";
      err.style.display = "none";
    }
  }
  if (e.keyCode === 13) {
    filterbtn.click();
  }
}
