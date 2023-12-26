let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let quotebtn = document.querySelector("#quotebtn");
let twitterbtn = document.querySelector("#twitterbtn");
let quoteArea = document.querySelector('.quoteArea')

quotebtn.addEventListener("click", () => {
  fetch("https://api.quotable.io/random")
    .then((data) => {
      return data.json();
    })
    .then((data2) => {
      quote.innerText = `"${data2.content}"`;
      author.innerText = `-- ${data2.author}`;
    })
});

twitterbtn.addEventListener('click',()=>{
   if(quote.innerText){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} ${author.innerText}`);
   }
})
