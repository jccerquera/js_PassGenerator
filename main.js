// Variables Globales

let cantidad = document.getElementById("cantidad");
let botonGenerar = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar")
let validarcontrasena = document.getElementById("validarcontrasena");

// Desafío 1: Agregar símbolos especiales cómo !@#$%^&*() a la cadena de caracteres para que se creen contraseñas más seguras.
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

// Función: Generar contraseña aleatoria de acuerdo a la cantidad de caracteres indicados.

function generar(){

    // Variables Locales para el if

    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){
        alert("La longitud mínima de caracteres debe ser 8");
    }

    // Variables Locales para el for

    let password = "";

    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    // Desafío 3: Implementar una validación que avise al usuario si la contraseña generada es fuerte o débil (por ejemplo, si no contiene un número, o una letra mayúscula) y que muestre un mensaje donde informe que la contraseña es débil.
    
    const mayuscula = /[A-Z]/.test(password);          // Tiene mayúscula
    const minuscula = /[a-z]/.test(password);          // Tiene minúscula
    const numero = /[0-9]/.test(password);             // Tiene números
    const caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);      // Tiene caracteres especiales

    if (mayuscula && minuscula && numero && caracterEspecial) {
        validarcontrasena.textContent = "Contraseña FUERTE";
    } else if (mayuscula && minuscula) {
        validarcontrasena.textContent = "Contraseña DEBIL";
    }
    
    contraseña.value = password
}

// Desafío 2: Limpiar el campo de la contraseña, agregando un nuevo botón de limpiar.
function limpiar(){
    contraseña.value = "";
    cantidad.value = "";
}


