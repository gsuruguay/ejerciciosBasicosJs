const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];

let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];


//A partir del arreglo original, obtener los siguientes resultados:

//- indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'
original.forEach(element => {
    if (element == "Amarillo") {
        indiceAmarillo = original.indexOf("Amarillo");
    }
});

//- cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
original.filter(element => (element.toLowerCase().includes("a")) ? cantidadColoresConA++ : 0)

//- arregloSinAzul: El arreglo original sin el valor 'Azul'
arregloSinAzul = original.filter((element) => element !== 'Azul');

//- ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.
ordenadoPorCantidadLetras = original.map(x => x).sort((a,b) => a.length - b.length);

//- arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.
arregloConNuevoColorInicio = ['Blanco'].concat(original);

//- arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.
arregloConNuevoColorFin = original.concat(['Negro']);


console.log("Indice de la ubicacion en el arreglo de 'Amarillo':", indiceAmarillo);

console.log("Cuantos colores hay en el arreglo con la letra 'a':", cantidadColoresConA);

console.log("El arreglo original sin el valor 'Azul':", arregloSinAzul);

console.log("El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre:", ordenadoPorCantidadLetras);

console.log("El arreglo original con un nuevo color al inicio del mismo:", arregloConNuevoColorInicio);

console.log("El arreglo original con un nuevo color al final del mismo:", arregloConNuevoColorFin);