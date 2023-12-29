let showpopup = document.querySelector('.showpopup');
let okay = document.querySelector('.okay');
let popup = document.querySelector('.popup');

showpopup.addEventListener('click',()=>{
    popup.classList.remove('visible');
    popup.classList.add('anima');
    showpopup.classList.add('visible');
})
okay.addEventListener('click',()=>{
    popup.classList.add('visible');
    popup.classList.remove('anima');
    showpopup.classList.remove('visible');
})