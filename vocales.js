/* Escribir un programa que reciba una cadena de caracteres y 
calcule la cantidad de vocales que contiene.*/

let vocales = 'Hola mi nombre es robert y estoy aprendiendo js';
let contadorVocales = 0;
for (let i = 0; i < vocales.length; i++) {
    let letra = vocales[i].toLocaleLowerCase();
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        contadorVocales++;
    }
}

console.log('Hay '+ contadorVocales + ' vocales');