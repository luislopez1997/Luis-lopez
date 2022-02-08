let btn_amburguesa = document.getElementById('btn_amburguesa');
let barra_navegacion = document.querySelector('.barra_navegacion');
let formulario_contacto_enviar = document.getElementById('formulario_contacto_enviar');
/*conexion y desconexion a internet*/
var div = document.createElement('div');
var conectado = '<span>Estas conectado a internet<span/>';
var desconectado = '<span>No tienes conexión a internet<span/>';
var conexion_internet = document.querySelector('.conexion_internet');
document.body.appendChild(div);
formulario_contacto_enviar.addEventListener('click',(e)=>{
   // e.preventDefault();
});
btn_amburguesa.addEventListener('click',(e)=>{
    barra_navegacion.classList.toggle('toggle_btn_amburguesa');
});
/*Desconectado de internet*/
window.addEventListener('offline',()=>{
    div.innerHTML = desconectado;
    div.classList.add('conexion_internet');
    setTimeout(() => {
        div.classList.remove('conexion_internet');
    }, 3000);
});
/*Conectado de internet*/
window.addEventListener('online',()=>{
    div.innerHTML = conectado;
    div.classList.add('conexion_internet');
    div.style.background = 'green';
    setTimeout(() => {
        div.classList.remove('conexion_internet');
        div.style.background = 'red';
    }, 3000);
});
