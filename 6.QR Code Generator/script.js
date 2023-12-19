let qrImg = document.querySelector('#qrImg');
let input = document.querySelector('#input');
let btn = document.querySelector('#btn');


btn.addEventListener('click',()=>{
    if(input.value){
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`).then((data)=>{
          qrImg.src = data.url;
        });
    }
})