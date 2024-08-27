
function encriptar() {
    let texto = document.getElementById("texto-entrada").value;
    let btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.style.display = "block";

    if (texto === "") {
        alert("Por favor ingrese un texto");
        return;
    }

    if (validarTexto(texto)) {
        alert("Por favor ingrese un texto en minusculas sin acentos");
        return;
    }

    let desplazamiento = 3;
    let resultado = document.querySelector(".con_texto");

    let sinTexto = document.querySelector(".sin_texto");
    sinTexto.style.display = "none";

    // Aquí se guarda el texto cifrado en una nueva variable `textoCifrado`
    let textoCifrado = texto.split('').map(caracter => {
        let codigo = caracter.charCodeAt(0);

        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        }

        // Si no es una letra, devolver el carácter original
        return caracter;
    }).join('');

    resultado.textContent = textoCifrado;


}

function validarTexto(texto) {

    // validar que el texto solo contenga letras y este en minusculas y que no tenga acentos
    if (!/^[a-z]*$/.test(texto)) {
        return true;
    }

    return false;


}

function desencriptar() {
    let texto = document.getElementById("texto-entrada").value;
    let btnCopiar = document.getElementById("btn-copiar");
    btnCopiar.style.display = "block";


    if (texto === "") {
        alert("Por favor ingrese un texto");
        return;
    }

    if (validarTexto(texto)) {
        alert("Por favor ingrese un texto en minusculas sin acentos");
        return;
    }

    let desplazamiento = 3;
    let resultado = document.querySelector(".con_texto");

    let sinTexto = document.querySelector(".sin_texto");
    sinTexto.style.display = "none";



    let textoDecifrado = texto.split('').map(caracter => {
        let codigo = caracter.charCodeAt(0);


        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
        }

        // Si no es una letra, devolver el carácter original
        return caracter;
    }).join('');

    resultado.textContent = textoDecifrado;


}


function copiar() {
    let textoSeleccionado = document.querySelector(".con_texto").textContent;
    
        navigator.clipboard.writeText(textoSeleccionado)
    .then(() => {
        console.log('Texto copiado al portapapeles');
        alert('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
    
    alert("Texto copiado: " + textoCifrado.value);
}