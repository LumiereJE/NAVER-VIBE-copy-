// 백그라운드 동영상 scrollTop
const video1 = document.querySelector(".back_v1");
const video2 = document.querySelector(".back_v2");
const video3 = document.querySelector(".back_v3");

document.addEventListener("scroll", () => {
  if (window.scrollY < 750) {
    video1.classList.add("back_v_on");
    video2.classList.remove("back_v_on");
    video3.classList.remove("back_v_on");
  } else if (window.scrollY >= 750 && window.scrollY < 4300) {
    video1.classList.remove("back_v_on");
    video2.classList.add("back_v_on");
    video3.classList.remove("back_v_on");
  } else {
    video1.classList.remove("back_v_on");
    video2.classList.remove("back_v_on");
    video3.classList.add("back_v_on");
  }
});

// 소개 페이지 - 1번 section bar width 100%
function bar_100() {
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar) => {
    bar.classList.add("bar_active");
  });
}
setTimeout(bar_100, 500);

// 소개 페이지 - 1번 section bar 이후 글자 올라오기
function word_up() {
  const elements = document.querySelectorAll(".word, .install_btn");

  elements.forEach((element) => {
    element.classList.add("word_active", "install_btn_active");
  });
}
setTimeout(word_up, 1300);

//-------------------------------------------------------------------------

// 소개 페이지 - 2번 section opacity=0; → 1; → 0;

window.addEventListener("scroll", function () {
  // --1. 목업(센터에 와야 할 사진)이 화면 중앙에 있는지 확인
  const centerImage_1_1 = document.getElementById("center_image_1_1");
  const centerImage_1_2 = document.getElementById("center_image_1_2");
  const centerImage_1_3 = document.getElementById("center_image_1_3");
  const rect_1_1 = centerImage_1_1.getBoundingClientRect();
  const isImgCentered_1_1 =
    rect_1_1.top <= window.innerHeight / 2 &&
    rect_1_1.bottom >= window.innerHeight / 2;

  const centerImage_2_1 = document.getElementById("center_image_2_1");
  const centerImage_2_2 = document.getElementById("center_image_2_2");
  const centerImage_2_3 = document.getElementById("center_image_2_3");
  const centerImage_2_4 = document.getElementById("center_image_2_4");
  const rect_2_1 = centerImage_2_1.getBoundingClientRect();
  const isImgCentered_2_1 =
    rect_2_1.top <= window.innerHeight / 2 &&
    rect_2_1.bottom >= window.innerHeight / 2;

  const centerImage_3_1 = document.getElementById("center_image_3_1");
  const rect_3_1 = centerImage_3_1.getBoundingClientRect();
  const isImgCentered_3_1 =
    rect_3_1.top <= window.innerHeight / 2 &&
    rect_3_1.bottom >= window.innerHeight / 2;

  // --2. 목업 범위 위치 확인
  const mockupPart = document.getElementById("mockup_fixed_part");
  const mockupRect = mockupPart.getBoundingClientRect();
  const isMockupPart =
    mockupRect.top <= window.innerHeight / 2 &&
    mockupRect.bottom >= window.innerHeight / 2;

  // --3. 목업별 파트 확인
  const setMockup_1 = document.getElementById("setMockup_1");
  const setMockupRect_1 = setMockup_1.getBoundingClientRect();
  const isSetMockup_1 =
    setMockupRect_1.top <= window.innerHeight / 2 &&
    setMockupRect_1.bottom >= window.innerHeight / 2;

  const setMockup_2 = document.getElementById("setMockup_2");
  const setMockupRect_2 = setMockup_2.getBoundingClientRect();
  const isSetMockup_2 =
    setMockupRect_2.top <= window.innerHeight / 2 &&
    setMockupRect_2.bottom >= window.innerHeight / 2;

  const setMockup_3 = document.getElementById("setMockup_3");
  const setMockupRect_3 = setMockup_3.getBoundingClientRect();
  const isSetMockup_3 =
    setMockupRect_3.top <= window.innerHeight / 2 &&
    setMockupRect_3.bottom >= window.innerHeight / 2;

  // 목업이 떠야하는 범위가 시작 + 요소가 센터에 오면, opacity=0; → 1; 로 변경
  if (isMockupPart) {
    console.log("목업 범위에 들어옴");

    // 3개의 파트별로 도달할 때 마다 목업이 각각 변경되어야 함
    if (isSetMockup_1 && isImgCentered_1_1) {
      console.log("섹션1");
      centerImage_1_1.style.opacity = "1";
      centerImage_1_2.style.opacity = "0";
      centerImage_1_3.style.opacity = "0";
      centerImage_2_1.style.opacity = "0";
      centerImage_2_2.style.opacity = "0";
      centerImage_2_3.style.opacity = "0";
      centerImage_2_4.style.opacity = "0";
      centerImage_3_1.style.opacity = "0";
    } else if (isSetMockup_2 && isImgCentered_2_1) {
      console.log("섹션2");
      centerImage_1_1.style.opacity = "0";
      centerImage_1_2.style.opacity = "0";
      centerImage_1_3.style.opacity = "0";
      centerImage_2_1.style.opacity = "1";
      centerImage_2_2.style.opacity = "0";
      centerImage_2_3.style.opacity = "0";
      centerImage_2_4.style.opacity = "0";
      centerImage_3_1.style.opacity = "0";
    } else if (isSetMockup_3 && isImgCentered_3_1) {
      console.log("섹션3");
      centerImage_1_1.style.opacity = "0";
      centerImage_1_2.style.opacity = "0";
      centerImage_1_3.style.opacity = "0";
      centerImage_2_1.style.opacity = "0";
      centerImage_2_2.style.opacity = "0";
      centerImage_2_3.style.opacity = "0";
      centerImage_2_4.style.opacity = "0";
      centerImage_3_1.style.opacity = "1";
    }
  } else {
    // --목업이 떠야하는 범위가 끝나면 opacity=0;
    if (!isMockupPart) {
      console.log("목업 범위에서 나감");
      centerImage_1_1.style.opacity = "0";
      centerImage_1_2.style.opacity = "0";
      centerImage_1_3.style.opacity = "0";
      centerImage_2_1.style.opacity = "0";
      centerImage_2_2.style.opacity = "0";
      centerImage_2_3.style.opacity = "0";
      centerImage_2_4.style.opacity = "0";
      centerImage_3_1.style.opacity = "0";
    }
  }
});

//-------------------------------------------------------------------------

// 소개 페이지 - 2번 파트 클릭 시, 목업 이미지 전환 + 폰트 css
const wordSection = document.querySelectorAll(".dumi_item");
const dumi_h6 = document.querySelectorAll(".dumi_h6");
const dumi_p = document.querySelectorAll(".dumi_p");
const mockupImage = document.querySelectorAll(".scroll_mockup");

wordSection.forEach((dumi, index) => {
  dumi.addEventListener("click", () => {
    console.log(`Box ${index + 1} clicked`);

    // 모든 이미지의 active class, z-index 초기화
    mockupImage.forEach((img) => img.classList.remove("active"));
    dumi_h6.forEach((h6) => h6.classList.remove("active"));
    dumi_p.forEach((p) => p.classList.remove("active"));

    // mockup img 전환
    // 위 scroll event에서 opacity=0이 적용되기 때문에. 여기서 opacity를 한번 더 써줘야 나타남.
    mockupImage.forEach((img) => {
      img.style.opacity = "0";
    });
    mockupImage[index].style.opacity = "1";
    mockupImage[index].classList.add("active");
    dumi_h6[index].classList.add("active");
    dumi_p[index].classList.add("active");
  });
});

// 소개 페이지 - 3번 section playlist animation 정지 / 재생
const playPauseButton = document.querySelector(".play_btn_box");
const btnOn = document.querySelector(".btn_on");
const btnOff = document.querySelector(".btn_off");
const playlistBox = document.querySelector(".playlist_box");
let isPaused = false;

playPauseButton.addEventListener("click", function () {
  if (isPaused) {
    playlistBox.classList.remove("paused");
    btnOn.style.display = "block";
    btnOff.style.display = "none";
    isPaused = false;
  } else {
    playlistBox.classList.add("paused");
    btnOn.style.display = "none";
    btnOff.style.display = "block";
    isPaused = true;
  }
});
