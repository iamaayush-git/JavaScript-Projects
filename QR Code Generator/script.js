let qrImg = document.querySelector('#qrImg');
let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
function generate(){
  if(input.value){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`).then((data)=>{
      qrImg.src = data.url;
    });
}
}
btn.addEventListener('click',generate);
document.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    generate();
  }
})
