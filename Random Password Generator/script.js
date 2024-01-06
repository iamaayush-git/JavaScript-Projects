let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!@#$%^&*?";
let number = "0123456789";
let mix = upperCase + lowerCase + symbol + number;
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let img = document.querySelector("#img");
let password;
function generate() {
  img.setAttribute("src", "copyimg.png");
  password = "";
  for (let i = 0; i < 9; i++) {
    password += mix[Math.floor(Math.random() * mix.length)];
  }
  output.value = password;
}
function copy() {
  output.select();
  document.execCommand("copy");
  img.setAttribute("src", "right.png");
}
img.addEventListener("click", copy);
btn.addEventListener("click", generate);
