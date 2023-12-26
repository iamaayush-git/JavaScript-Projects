const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Tiger", correct: false },
      { text: "Elephant", correct: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
    ],
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      { text: "William Wordsworth", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
    ],
  },

  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Won", correct: false },
      { text: "Peso", correct: false },
      { text: "Baht", correct: false },
      { text: "Yen", correct: true },
    ],
  },
  {
    question: "In which year did Christopher Columbus first reach the Americas?",
    answers: [
      { text: "1492", correct: true },
      { text: "1588", correct: false },
      { text: "1620", correct: false },
      { text: "1776", correct: false },
    ],
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Endoplasmic reticulum", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Canberra", correct: true },
      { text: "Melbourne", correct: false },
      { text: "Brisbane", correct: false },
    ],
  },
  
];
let question = document.querySelector(".question");
let options = document.querySelectorAll(".options");
let next = document.querySelector("#next");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let num = 0;

function start(){
  options.forEach((item)=>{
    item.classList.remove('wrong');
    item.classList.remove('right');
    item.classList.remove('disabled')
  })
  question.innerText = questions[num].question
  options.forEach((item,index)=>{
    item.innerText = questions[num].answers[index].text;
  })
}

start();
// adding event listener on next button
next.addEventListener('click',()=>{
  if(num<=5){
  num++;
  }
  else{
    num = 0;
  }
  start();
})

options.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    questions[num].answers.forEach((data)=>{
      if(e.target.innerText == data.text && data.correct){
        e.target.classList.add('right');
      }
      else if(e.target.innerText == data.text && !data.correct){
       questions[num].answers.forEach((data2,index)=>{
        if(options[index].innerText == data2.text && data2.correct){
          options[index].classList.add('right');
        }
        else if(options[index].innerText == data2.text && !data2.correct){
          options[index].classList.add('wrong');
        }
       })
      }
    })
    options.forEach((item2)=>{
      item2.classList.add('disabled');
    })
  })
})


// (function () {
//   // randomNumber = Math.floor(Math.random() * 5);
//   randomNumber = 0;
//   question.innerText = questions[randomNumber].question;
//   questions[randomNumber].answers.forEach((item, index) => {
//     if (index == 0) {
//       first.innerText = item.text;
//     } else if (index == 1) {
//       second.innerText = item.text;
//     } else if (index == 2) {
//       third.innerText = item.text;
//     } else if (index == 3) {
//       fourth.innerText = item.text;
//     }
//   });
// })();

// next.addEventListener("click", () => {
//   options.forEach((data2)=>{
//     data2.classList.remove('disabled');
//     console.log(data2);
//   })
//   options.forEach((items) => {
//     items.classList.add("normal");
//     console.log(items);
//   });

//   // randomNumber = Math.floor(Math.random() * 5);
//   if (randomNumber <= 2) {
//     randomNumber++;
//   } else {
//     randomNumber = 0;
//   }
//   question.innerText = questions[randomNumber].question;
//   questions[randomNumber].answers.forEach((item, index) => {
//     if (index == 0) {
//       first.innerText = item.text;
//     } else if (index == 1) {
//       second.innerText = item.text;
//     } else if (index == 2) {
//       third.innerText = item.text;
//     } else if (index == 3) {
//       fourth.innerText = item.text;
//     }
//   });
// });

// options.forEach((items) => {
//   items.addEventListener("click", (e) => {
//     questions[randomNumber].answers.forEach((item) => {
//       if (e.target.innerText == item.text) {
//         if (item.correct) {
//           // e.target.style.backgroundColor = "green";
//           e.target.classList.remove("normal");
//           e.target.classList.add("correct");
//           // items.classList.add('disabled');
//         } else if (!item.correct) {
//           questions[randomNumber].answers.forEach((data, index) => {
//             if (data.correct) {
//               // options[index].style.backgroundColor = "green";
//               options[index].classList.remove("normal");
//               options[index].classList.add("correct");
//               // items.classList.add('disabled');
//             } else if (!data.correct) {
//               // options[index].style.backgroundColor = "red";
//               options[index].classList.remove("normal");
//               options[index].classList.remove("correct");
//               options[index].classList.add("wrong");
//             }
//           });
//         }
//       }
//       options.forEach((data2)=>{
//         data2.classList.add('disabled');
//         console.log(data2);
//       })
//     });
//   });
// });
