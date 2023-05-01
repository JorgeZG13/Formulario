const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const teléfono = document.getElementById("cell");
const correo = document.getElementById("email");
const contraseña = document.getElementById("password");
const contraseña2 = document.getElementById("repeatpassword");
const form = document.getElementById("sii");
const listinputs = document.querySelectorAll(".forinput");


form.addEventListener("click", (e) => {
e.preventDefault();
let condicion = validacionform();
if (condicion){
enviarformulario()
}
});

function validacionform(){
    let condicion = true;
    listinputs.forEach((element) =>{
        element.lastElementChild.innerHTML= "";
    });


if (nombre.value.length <1 || nombre.value.trim() == "") {
   mostrarMensaje("myname", "Nombre no válido*");
   condicion = false;
}

if (apellidos.value.length <1 || apellidos.value.trim() == "") {
    mostrarMensaje("surname", "Apellido no válido*");
    condicion = false;
 }

 if (teléfono.value.length <1 || teléfono.value.trim() == "" || isNaN(teléfono.value)) {
    mostrarMensaje("cell", "Número no válido*");
    condicion = false;
 }

 if (correo.value.length <1 || correo.value.trim() == "") {
    mostrarMensaje("email", "Email no válido*");
    condicion = false;
 }

 if (contraseña.value.length <1 || contraseña.value.trim() == "") {
    mostrarMensaje("password", "Contraseña no válida*");
    condicion = false;
 }

 if (contraseña2.value != contraseña.value ) {
    mostrarMensaje("repeatpassword", "Las contraseñas no coinciden*");
    condicion = false;
 }


function mostrarMensaje(claseinput, mensaje){
    let elemento = document.querySelector(`.${claseinput}`);
    elemento.lastElementChild.innerHTML = mensaje
}}

function enviarformulario(){
    form.reset;
    form.lastElementChild.innerHTML = "Listo!!";
}

const $btnSignIn= document.querySelector('.sign-in-button'),
      $btnSignUp = document.querySelector('.sign-up-button'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});