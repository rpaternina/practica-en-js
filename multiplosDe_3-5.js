/* Escribir un programa que imprima los números del 1 al 100. 
Para los múltiplos de 3 debe imprimir "Fizz" en lugar del número, 
para los múltiplos de 5 debe imprimir "Buzz" y para los múltiplos 
de ambos debe imprimir "FizzBuzz". */

let n = 101;
for(let i = 1; i < n; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else{
        console.log(i);
    }
}
