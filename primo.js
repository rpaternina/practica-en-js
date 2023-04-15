//Escribir un programa que reciba un número y determine si es primo o no.

function primo(n){
    if(n === 2 || n === 3){
        console.log('Es primo');
    }else if(n % 2 !== 0){
        console.log('Es primo');
    }else{
        console.log(false);
    }
}

primo(67); 
