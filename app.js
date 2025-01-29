import respuestas from "./respuestas.js";

let pantalla = document.querySelector('.pantalla');

bot(`Hola usuario`);

function mostrarMensajes(mensaje){

    let mensajeUsuario = document.createElement('div');
    mensajeUsuario.classList.add('mensaje-usuario');
    mensajeUsuario.innerHTML += mensaje;
    pantalla.appendChild(mensajeUsuario);

    if(respuestas.hasOwnProperty(mensaje)){
        let respuesta = respuestas[mensaje].respuestas;
        let indice = Math.floor(Math.random() * respuesta.length);
        bot(respuesta[indice]);
    }

    return;
}

function bot(mensaje){
    let mensajeBot = document.createElement('div');
    mensajeBot.classList.add('mensaje-bot');
    mensajeBot.innerHTML += mensaje;
    pantalla.appendChild(mensajeBot);

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