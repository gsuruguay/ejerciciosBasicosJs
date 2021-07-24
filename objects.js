const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];


//A partir de los objetos originales, obtener los siguientes resultados:
// - edadMadre: Edad de la madre
edadMadre = originalA.madre.edad;

// - objetoParseado: Objeto "originalB" parseado a objeto
objetoParseado = JSON.parse(originalB)

// - existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'
existeClaveMadreA = (originalA.madre) ? true : false;

// - existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'
existeClaveMadreB = (originalB.madre) ? true : false;

// - nombreDelMasJoven: Nombre de la persona mas joven
nombreDelMasJoven = (originalA.edad < objetoParseado.edad) ? nombreDelMasJoven = originalA.nombre : nombreDelMasJoven = objetoParseado.nombre;

// - clavesDelObjeto: Que claves contiene el objeto 'originalA'
clavesDelObjeto = Object.keys(originalA);

console.log("Edad de la Madre:", edadMadre);
console.log("Objeto Parseado:", objetoParseado);
console.log("¿Existe Clave MadreA?:", existeClaveMadreA);
console.log("¿Existe Clave MadreB?:", existeClaveMadreB);
console.log("Nombre del mas joven:", nombreDelMasJoven);
console.log("Claves del objeto originalA:", clavesDelObjeto);