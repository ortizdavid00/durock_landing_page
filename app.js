function imgSlider(anything) {
  document.querySelector(".t1").src = anything;
}
function changeBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}
function changeTextColor(color) {
  const titleText = document.querySelector(".titleText");
  titleText.style.color = color;
}
function changeInfoColor(color) {
  const infoText = document.querySelector(".infoText");
  infoText.style.color = color;
}
function menuToggle() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
