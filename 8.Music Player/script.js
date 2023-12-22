let songIndex = 0;
let audioelement = new Audio("songs/1.mp3");
let myprogressbar = document.querySelector(".range");
let masterPlay = document.querySelector("#masterPlay");
let songdivarr = Array.from(document.querySelectorAll(".song-div"));
let masterPrevious = document.querySelector("#masterPrevious");
let masterNext = document.querySelector("#masterNext");

let songs = [
  {
    songName: "See You Again",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  { songName: "Sorry", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  {
    songName: "Uptown Funk",
    filePath: "songs/2.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Blank Space",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  { songName: "Lean On", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Hello", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Roar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Sugar", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
];
masterPlay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioelement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});
audioelement.addEventListener("timeupdate", () => {
  myprogressbar.max = audioelement.duration;
  myprogressbar.value = audioelement.currentTime;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime = myprogressbar.value;
});
songdivarr.forEach((items, index) => {
  items.querySelectorAll("img")[0].src = songs[index].coverPath;
  items.querySelectorAll("span")[0].innerText = songs[index].songName;
});
songdivarr.forEach((items, index) => {
  items.addEventListener("click", (element) => {
    songIndex = parseInt(items.id);
    audioelement.src = `songs/${songIndex}.mp3`;
    audioelement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});

masterPrevious.addEventListener("click", () => {
  if (masterPlay.classList.contains("fa-pause")) {
    if (songIndex >= 2) {
      songIndex -= 1;
    } else {
      songIndex = 1;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    audioelement.play();
  }
});
masterNext.addEventListener("click", () => {
  if (masterPlay.classList.contains("fa-pause")) {
    if (songIndex <= 7) {
      songIndex += 1;
    } else {
      songIndex = 8;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
    audioelement.play();
  }
});
