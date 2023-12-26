let output = document.querySelector("#output");
let start = document.querySelector("#start");
let pause = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let count = 0;
let time = null;
let hour = 0;
let minute = 0;
let second = 0;

//StartTime
function startTime() {
  count++;
  if (count == 1) {
    time = setInterval(() => {
      second++;
      if (second == 60) {
        minute++;
        second = 0;
        if (minute == 60) {
          hour++;
          minute = 0;
        }
      }
      let s = second < 10 ? "0" + second : second;
      let m = minute < 10 ? "0" + minute : minute;
      let h = hour < 10 ? "0" + hour : hour;
      output.innerText = `${h}:${m}:${s}`;
    }, 1000);
  }
}

//StopTime
function stopTime() {
  clearInterval(time);
  count = 0;
}

//resetTime
function resetTime() {
  clearInterval(time);
  count = 0;
  hour = 0;
  minute = 0;
  second = 0;
  output.innerText = "00:00:00";
}

//adding click Event
start.addEventListener("click", startTime);
pause.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);
