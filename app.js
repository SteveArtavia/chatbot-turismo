import respuestas from "./respuestas.js";

let pantalla = document.querySelector('.pantalla');

bot(`Hola usuario, dime en que puedo ayudarte?`);

function mostrarMensajes(mensaje){

    let mensajeUsuario = document.createElement('div');
    mensajeUsuario.classList.add('mensaje-usuario');
    mensajeUsuario.innerHTML += mensaje;
    pantalla.appendChild(mensajeUsuario);

    mensaje = mensaje.split(' ');

    setTimeout(() => {
        for(let i = 0; i < mensaje.length; i++){
            if(respuestas.hasOwnProperty(mensaje[i])){
                let respuesta = respuestas[mensaje[i]].respuestas;
                let indice = Math.floor(Math.random() * respuesta.length);
                bot(respuesta[indice]);
                
            }else{
                let respuesta = respuestas.predeterminadas.respuestas;
                let indice = Math.floor(Math.random() * respuesta.length);
                bot(respuesta[indice])
            }
        }
    }, 400);

    pantalla.scrollTop = pantalla.scrollHeight;

    return;
}

function bot(mensaje){
    let mensajeBot = document.createElement('div');
    mensajeBot.classList.add('mensaje-bot');
    mensajeBot.innerHTML += mensaje;
    pantalla.appendChild(mensajeBot);

    pantalla.scrollTop = pantalla.scrollHeight;

    return;
}

window.enviarMensaje = function(){
    let mensajeInput = document.getElementById('mensaje-input').value;
    mostrarMensajes(mensajeInput);
    document.getElementById('mensaje-input').value = '';

    return mensajeInput;
}

document.getElementById('mensaje-input').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        enviarMensaje();
    }

    return;
});