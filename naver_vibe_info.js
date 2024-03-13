function bar_100() {
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar) => {
    bar.classList.add("bar_active");
  });
}
setTimeout(bar_100, 500);

function word_up() {
  const elements = document.querySelectorAll(".word, .install_btn");

  elements.forEach((element) => {
    element.classList.add("word_active", "install_btn_active");
  });
}
setTimeout(word_up, 1300);
