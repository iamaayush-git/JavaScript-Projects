let btnobj = document.getElementById("btn");
let txtobj = document.getElementById("text");
let msgobj = document.getElementById("message");
let statusobj= document.getElementById("status");

let startTime, endTime;

function checkerror(str1, str2) {
  let word1 = str1.split(" ");
  let word2 = str2.split(" ");
  let count = 0;
  word1.forEach((item,index) => {
    if(item == word2[index]){
     count++;
    }
    
  });
}
function startgame() {
  let number = Math.floor(Math.random() * 11);
  txtobj.disabled = false;
  document.getElementById("text").autofocus;
  btnobj.innerText = "Stop";
  msgobj.innerText = words[number];
  let date = new Date();
  startTime = date.getTime();
}
function stopgame() {
  txtobj.disabled = true;
  btnobj.innerText = "Start";
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000 / 60;
  let totalWord = totalStr.split(" ").length;
  let speed = Math.floor(totalWord / totalTime);
  statusobj.innerText = speed + " WPM";
  checkerror(msgobj.innerText , totalStr);
}
btnobj.addEventListener("click", () => {
  if (btnobj.innerText == "Start") {
    startgame();
  } else if (btnobj.innerText == "Stop") {
    stopgame();
  }
});