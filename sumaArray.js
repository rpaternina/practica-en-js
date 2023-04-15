/* Escribir un programa que reciba un arreglo de números y calcule la suma 
de todos los elementos. */
let arreglo = [5,6];
let suma = 0;
for (const i of arreglo) {
    suma = suma + i;
    console.log(suma);
}