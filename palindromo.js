/* Escribir un programa que reciba una cadena de caracteres y determine 
si es un palíndromo (es decir, si se lee igual de izquierda a derecha que 
de derecha a izquierda). */
let cadena = 'olO';
let mayus = cadena.toUpperCase();
let cadenaInvertida = mayus.split('').reverse().join('');
if(mayus === cadenaInvertida){
    console.log('Es un palindromo');
}else {
    console.log('No es un palindromo');
}
