// 백그라운드 동영상 scrollTop
const video1 = document.querySelector(".back_v1");
const video2 = document.querySelector(".back_v2");
const video3 = document.querySelector(".back_v3");

document.addEventListener("scroll", () => {
  console.log(window.scrollY); // 스크롤 위치 출력
  if (window.scrollY < 750) {
    video1.classList.add("back_v_on");
    video2.classList.remove("back_v_on");
    video3.classList.remove("back_v_on");
  } else if (window.scrollY >= 750 && window.scrollY < 2300) {
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

// 소개 페이지 - 2번 section animation 정지 / 재생
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
