let btn_amburguesa = document.getElementById('btn_amburguesa');
let barra_navegacion = document.querySelector('.barra_navegacion');

document.addEventListener('click',(e)=>{
    if(e.target.matches('#btn_amburguesa')||e.target.matches('.amburguesa') ){
        barra_navegacion.classList.toggle('toggle_btn_amburguesa');
    }
    if(e.target.matches('a')){
         barra_navegacion.classList.toggle('toggle_btn_amburguesa');
    }
});
