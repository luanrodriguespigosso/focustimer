let buttonPlay = document.querySelector(".play");
let buttonPause = document.querySelector(".pause");
let buttonSet = document.querySelector(".set");
let buttonStop = document.querySelector(".stop");
let buttonSoundOn = document.querySelector(".sound-on");
let buttonSoundOff = document.querySelector(".sound-off");

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
});

buttonStop.addEventListener("click", function () {
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});
