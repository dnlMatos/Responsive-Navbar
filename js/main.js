let menuHamb = document.querySelector(".caixa");
let listaMenu = document.querySelector('.listaMenu');
let linha1 = document.querySelector('.burger');

menuHamb.addEventListener('click', ()=>{
    listaMenu.classList.toggle('show'); 
    linha1.classList.toggle('show')   
})

