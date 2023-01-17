// La portee des variables

let age = 5; // Variable global
console.log(age);

if(true){
    let age = 25; //Variable local
    console.log(age);

    let score = 35;
    console.log('score', score);
}

console.log(age);


let nombres = [12, 4, 65, 0, 957, 29, 78, 1, 23, 887];

for(let i = 0; i < nombres.length; i++){
    let secret = 1;

    if(nombres[i] == secret){
        console.log(`Le secret a ete trouve a l'iteration no: ${i}`);
    }
}


// break et continue

let nombre = [12, 4, 68, 0, 950, 28, 78, 1, 23, 887];

for(let i = 0; i < nombres.length; i++){
    console.log(`Iteration no: ${i}, ${nombre[i]}`);
    if(nombre[i]%2 != 0){
        console.log(nombre[i]);
        break;
    }else{
        continue;
    }

    console.log('test oooooooooo');
}