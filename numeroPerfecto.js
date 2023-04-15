/* Escribir un programa que reciba un número y determine si es un número perfecto
(es decir, la suma de sus divisores propios es igual al número).*/
function perfecto(num){
    for(let i = 1; i < num; i++){//lo primero que hice fue recorrer el numero
        if(num < 0){//tiene que ser mayor que 0
            console.log('Tiene que ser mayor que 0');
        }else if(num % i === 0){//debo encontrar los multiplos de ese numero para sumarlos
            console.log(i);//aqui muestro los multiplos del numero para tener la idea
            let suma = i + i;//aqui sumo cada multiplo del numero
            if(suma === num){//si la suma de los multiplos es igual al numero es perfecto
                console.log('Es un numero perfecto');
            }
        }
    }
}
perfecto(8128);