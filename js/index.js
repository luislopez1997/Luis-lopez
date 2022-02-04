let btn_amburguesa = document.getElementById('btn_amburguesa');
let nav = document.querySelector('nav');

document.addEventListener('click',(e)=>{
    if(e.target.matches('#btn_amburguesa')||e.target.matches('.amburguesa') ){
        nav.classList.toggle('toggle_btn_amburguesa');
    }
    if(e.target.matches('nav')){
        nav.classList.toggle('toggle_btn_amburguesa');
    }
});