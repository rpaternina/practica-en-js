/* Escribir un programa que reciba un arreglo de números y determine si 
hay algún número repetido. */

let numeros = [1,1,3,4,5,6,7,6,1,7];
let comparador = 0;
for (let i of numeros) {
    let n = numeros[i];
    if(n === i){
        comparador++;
    }
}
console.log('Hay '+ comparador + ' numero repetidos');