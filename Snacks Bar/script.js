let notify = document.querySelectorAll(".notify");
let notificationBox = document.querySelector(".notificationBox");

notify.forEach((item) => {
  item.addEventListener("click", (e) => {
    let div = document.createElement("div");
    if (e.target.innerText == "Success") {
      div.classList.add("success");
      div.innerText = "Success";
      notificationBox.appendChild(div);
      setTimeout(() => {
        div.remove();
      }, 5000);
    } else if (e.target.innerText == "Error") {
      div.classList.add("error");
      div.innerText = "Error";
      notificationBox.appendChild(div);
      setTimeout(() => {
        div.remove();
      }, 5000);
    } else if (e.target.innerText == "Invalid") {
      div.classList.add("invalid");
      div.innerText = "Invalid";
      notificationBox.appendChild(div);
      setTimeout(() => {
        div.remove();
      }, 5000);
    }
  });
});
