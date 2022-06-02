let audioElemet = new Audio("./audio/dbs.mp3");
let masterPlay = document.querySelector(".background");
// console.log(masterPlay);
masterPlay.addEventListener("click", () => {
  if (audioElemet.paused || audioElemet.currentTime <= 0) {
    audioElemet.play();
  } else {
    audioElemet.pause();
  }
});
