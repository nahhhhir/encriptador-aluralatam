let botonEncriptar = document.getElementById("button-encrypt");
let botonDesencriptar = document.getElementById("button-decrypt");
let botonCopiar = document.getElementById("button-copy");

let botones = document.getElementsByClassName(".button");

let textoEntrada = document.getElementById("input_encrypt");
let textoSalida = document.getElementById("output_decrypt");

let cuerpo = document.querySelector('body');
let removeResultado = document.querySelector(".no_texto");


function habilitarBotones() {
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = false;

}

function habilitarCopiado() {
    botonCopiar.disabled = false;
}


function actualizarPagina() {
    if (textoEntrada.value !== "") {
        removeResultado.remove()
        botonCopiar.style.display = 'block';
    }
    textoEntrada.focus();
}

function myAlert(message) {
    var alert = document.getElementById('msj-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function () {
        alert.style.display = 'none';
    }, 3000); 
}

function focusTextArea() {
    var textarea = document.getElementById("input_encrypt");
    textarea.focus();
}

function encriptarMensaje() {
    if (textoEntrada.value != "") {
        // expresión regular para verificar minúsculas y espacios
        let regExp = /^[a-z\s]+$/;

        if (regExp.test(textoEntrada.value)) {
            let msjEncriptado = textoEntrada.value;
            msjEncriptado = msjEncriptado.replace(/e/gim, "enter");
            msjEncriptado = msjEncriptado.replace(/i/gim, "imes");
            msjEncriptado = msjEncriptado.replace(/a/gim, "ai");
            msjEncriptado = msjEncriptado.replace(/o/gim, "ober");
            msjEncriptado = msjEncriptado.replace(/u/gim, "ufat");
            textoSalida.innerText = msjEncriptado;
            textoSalida.value = msjEncriptado;
            actualizarPagina();
        } else {
            myAlert("El texto debe ser solo letras minúsculas y espacios");
            focusTextArea();
        }
    } else {
        myAlert("Debe ingresar un texto para esta acción");
        focusTextArea();
    }
}


function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        let regExp = /^[a-z\s]+$/;

        if (regExp.test(textoEntrada.value)) {
            let msjDesencriptado = textoEntrada.value;
            msjDesencriptado = msjDesencriptado.replace(/enter/gim, "e");
            msjDesencriptado = msjDesencriptado.replace(/imes/gim, "i");
            msjDesencriptado = msjDesencriptado.replace(/ai/gim, "a");
            msjDesencriptado = msjDesencriptado.replace(/ober/gim, "o");
            msjDesencriptado = msjDesencriptado.replace(/ufat/gim, "u");
            textoSalida.innerHTML = msjDesencriptado;
            textoSalida.value = msjDesencriptado;
            actualizarPagina();
        } else {
            myAlert("El texto debe ser solo letras minúsculas y espacios");
            focusTextArea();
        }
    } else {
        myAlert("Debe ingresar un texto para esta acción");
        focusTextArea();
    }
}

function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        myAlert("Mensaje copiado");
    }
    else {
        myAlert("No existe texto para copiar");
    }
}

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBotones;