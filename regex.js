const texto = 'Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires';
let textoCensurado = null;

/*
    Utilizando una expresion regular, reemplace todas las letras del texto con "X",
    de manera que se muestre por consola:

    "XXX XXX XXXXX​ XX XXX XXXXXX XXXXXXX XX XX XXXXXXX XX XX XXXXXXXXX XX XXXXXX XXXXX"
 */

let expReg = /[a-zA-Z]/;
let espacio = /\s/;

if (texto.length != 0) {
    textoCensurado = [];

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (expReg.test(letra)) {
            textoCensurado += "X";
        }
        else if (espacio.test(letra)) {
            textoCensurado += " ";
        }
    }
}

console.log(textoCensurado)