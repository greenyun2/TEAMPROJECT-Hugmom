// Banner Slides
const slideWrapper = document.querySelector(".intro_page_banner_section_slide_wrapper");
const slides = document.querySelectorAll(".intro_page_banner_section_slide");
const prevBtn = document.querySelector(".banner_slide_prev_btn");
const nextBtn = document.querySelector(".banner_slide_next_btn");
const indexNumber = document.querySelector(".index_number");
const indexLength = document.querySelector(".index_length");

let currentIdx = 0;
let slideCount = slides.length;
let slideWidth = slides[0].offsetWidth;
let slideInterval;

indexLength.innerText = slides.length; + 1

function startSlideInterval() {
  slideInterval = setInterval(() => {
    moveSlides(1);
  }, 3000)
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

prevBtn.addEventListener('click', () => {
  moveSlides(-1);
  stopSlideInterval()
});

nextBtn.addEventListener('click', () => {
  moveSlides(1);
  stopSlideInterval()
});

function moveSlides(direction) {
  currentIdx += direction;

  if (currentIdx < 0) {
    currentIdx = slideCount - 1;
  } else if (currentIdx >= slideCount) {
    currentIdx = 0;
  }

  const offset = -currentIdx * slideWidth;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}px)`;
  });

  indexNumber.innerText = currentIdx + 1;

  stopSlideInterval();
  startSlideInterval();
}

function handleMouseOver() {
  stopSlideInterval();
}

function handleMouseOut() {
  startSlideInterval();
}

slideWrapper.addEventListener('mouseover', handleMouseOver);
slideWrapper.addEventListener('mouseout', handleMouseOut);

startSlideInterval();





// Live Slides

const livePrevBtn = document.querySelector(".live_slide_prev_btn");
const liveNextBtn = document.querySelector(".live_slide_next_btn");
const liveSlideWrapper = document.querySelector(".live_broadcast_items");
const liveSlides = document.querySelectorAll(".live_item");


let liveCurrentIdx = 0;
const liveSlideCount = liveSlides.length;
const liveSlideWidth = liveSlides[0].offsetWidth;
const liveSlideMargin = 20

livePrevBtn.addEventListener('click', () => {
  if (liveCurrentIdx > 0) {
    liveCurrentIdx--;
    moveLiveSlide();
    console.log(liveCurrentIdx);
  }
});

liveNextBtn.addEventListener('click', () => {
  if (liveCurrentIdx < liveSlideCount) {
    liveCurrentIdx++;
    moveLiveSlide();
    console.log(liveCurrentIdx);
  }
  if(liveCurrentIdx > 6) {
    liveCurrentIdx--;
    moveLiveSlide();
  }
});

function moveLiveSlide() {
  const translateX = -liveCurrentIdx * (liveSlideWidth + liveSlideMargin);
  liveSlides.forEach((liveSlide) => {
    liveSlide.style.transform = `translateX(${translateX}px)`;
  });

}


