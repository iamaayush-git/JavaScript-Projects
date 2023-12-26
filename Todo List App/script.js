let button = document.querySelector("#button");
let text = document.querySelector("#text");
let parent_ul = document.querySelector("#parent_ul");
let task = document.querySelector(".task");
let totalTask = 0;
let completedTask = 0;

//add function
function add() {
  if (text.value) {
    let li = document.createElement("li");
    li.innerText = text.value;
    parent_ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    text.value = "";
    totalTask++;
    task.innerText = `${completedTask}/${totalTask}`;
  }
  saveData();
}

// adding event listener in buttion(Add)
button.addEventListener("click", add);

//adding event listener in parent_ul
parent_ul.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    if (e.target.parentNode.classList.value == "checked") {
      if (totalTask > 0) {
        totalTask--;
      }
      if (completedTask > 0) {
        completedTask--;
      }
    } else if (e.target.parentNode.classList.value == "") {
      if (totalTask > 0) {
        totalTask--;
      }
    }
    e.target.parentNode.remove();
  } else if (e.target.tagName === "LI") {
    // console.log("clicked li");
    e.target.classList.toggle("checked");
    // console.log( e.target.classList)
    if (e.target.classList.value == "checked") {
      completedTask++;
      // console.log("checked");
    } else if (e.target.classList.value == "") {
      completedTask--;
    }
  }
  task.innerText = `${completedTask}/${totalTask}`;
  saveData();
});

// adding event on Enter key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    add();
  }
});

//Setting data on local storage
function saveData() {
  localStorage.setItem("data", parent_ul.innerHTML);
  localStorage.setItem("data1", totalTask);
  localStorage.setItem("data2", completedTask);
}

//fetching data from local storage
function showData() {
  parent_ul.innerHTML = localStorage.getItem("data");
  totalTask = localStorage.getItem("data1");
  completedTask = localStorage.getItem("data2");
  task.innerText = `${completedTask}/${totalTask}`;
}
showData();
// localStorage.clear();
