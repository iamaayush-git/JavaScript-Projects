let words = [
  "A sense of nostalgia washed over me as I opened the dusty old photo album, reliving cherished memories of days gone by.",
  "The scientist meticulously recorded the data, hoping to uncover the key to a groundbreaking discovery in the field of medicine.",
  "After a long hike through the dense forest, we finally reached the breathtaking waterfall, its crystal-clear waters cascading down into a sparkling pool.",
  "As the sun dipped below the horizon, the city skyline lit up with a dazzling display of colorful lights, creating a mesmerizing view from the rooftop bar.",
  "In the quiet of the library, I lost myself in the pages of a captivating novel, transported to a world of adventure and imagination.",
  "The astronaut gazed out of the spaceship window at the vastness of space, feeling both awed and humbled by the enormity of the universe.",
  "With determination in her eyes, she stepped onto the stage to deliver a powerful speech that would inspire change and unite a divided audience.    ",
  "A brown fox darted through the tall grass, its fur blending seamlessly with the earthy tones of the meadow, as it disappeared into the woods, a fleeting glimpse of wild beauty.",
  "The sun, a radiant sphere of warmth and light, cast its golden glow across the tranquil lake, illuminating the water's surface with a mesmerizing dance of reflections that shimmered in the early morning stillness.",
  "After a long day at work, I like to unwind by taking a relaxing bath.",
  "The chef prepared a gourmet meal that was a true work of art.",
  "If you come to a river and find a boat at the age, you will use that boat and it will serve you well, but once across the river, do you put the boat on your shoulders and carry it with you on the rest of your journey?"
];
let btn_obj = document.getElementById("btn");
let message_obj = document.getElementById("message");
let text_obj = document.getElementById("text");
let status_obj = document.getElementById("status");
let count=0;
let time_obj = {};

// Checking Errors
function checkerror() {
  let word1 = message_obj.innerText.split(" ");
  text_obj.addEventListener("keydown", (e) => {
      let word2 = text_obj.value.split(" ");
      word2.forEach((items, index) => {
        if (e.code == "Space") {
          if (word1[index] != items) {
            text_obj.style.color = "#A30000";
          } else if (word1[index] == items) {
            text_obj.style.color = "white";
            time_obj.word1length = word1.length
            time_obj.world2length = word2.length
            if(word1[time_obj.word1length-1]== items){
              stop();
            }
          }
        }
      });
  });
}

// Checking TimeTaken
function timeTaken() {
time_obj.minute = ((time_obj.stopTime - time_obj.startTime) / 1000)/60;
time_obj.speed = time_obj.world2length/time_obj.minute;
status_obj.innerText = Math.floor(time_obj.speed) + " wpm"
}

//Starting Game
function start() {
  let number = Math.floor(Math.random() * 12);
  btn_obj.innerText = "Stop";
  text_obj.disabled = false;
  text_obj.value = "";
  text_obj.focus();
  message_obj.innerText = words[number];
  let date = new Date();
  time_obj.startTime = date.getTime();
  status_obj.innerText = "";
  text_obj.style.color = "white";
  time_obj.world2length = 0;
  checkerror();
}

//Stopping Game
function stop() {
  btn_obj.innerText = "Start";
  message_obj.innerText = "";
  text_obj.disabled = true;
  let date = new Date();
  time_obj.stopTime = date.getTime();
  
  timeTaken();
}

//Adding Event listeners
btn_obj.addEventListener("click", () => {
  if (btn_obj.innerText === "Start") {
    start();
  } else if (btn_obj.innerText === "Stop") {
    stop();
  }
});
