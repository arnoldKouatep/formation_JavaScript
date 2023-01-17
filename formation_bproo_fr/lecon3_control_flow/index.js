// Les flux de controle en Javascipt

// La boucle for / For Loop

// for(initialisateur; Condition; incrementeur){
//     corps de la boucle
// }

for(let i = 0; i < 5; i++){
    console.log(`Boucle numero: ${i}`);
}

console.log(`Fin de la boucle........`);

// La boucle while / While Loop 

// initialisateur
// while(condition){
//     expression...
//     incrementateur
// }

    let j = 0;
    while(j<5){
        console.log(`Boucle numero: ${j}`);
        j++;
    }

    console.log('Boucle terminee.........');

    let noms = ['kouayep', 'arnold', 'djomo', 'wilfried'];

    let t = 0;
    while(t < noms.length){
        console.log(`nom miniscule: ${noms[t]}`);
        console.log(`nom majiscule: ${noms[t].toUpperCase()} `);
        console.log('+++++++++++++++++++++++++++++++++++++++++++++');
        t++;
    }
    console.log(`Boucle sur les noms fini.`);

// La boucle do while/ Do While Loop
    let h = 0;
    while(h < noms.length){
        console.log(`nom miniscule: ${noms[h]}`);
        console.log(`nom majiscule: ${noms[h].toUpperCase()} `);
        console.log('+++++++++++++++++++++++++++++++++++++++++++++');
        h++;
    }
    console.log(`Boucle sur les noms fini.`);


// If statement / La condition if

let password = 'secret1234';

if(password === 'secret1234'){
    console.log('Super bon mot de passe.');
}

if(password.length >= 6){
    console.log('Mot de passe bien long.');
}

let heure = 14;
if(heure > 12){
    console.log('Bonsoir a vous');
}


let age = 25;

if(age >= 21){
    console.log('Bien, vous pouvez visiter la plateforme ');
}



// if - else conditions
if(age <= 2){
    console.log('Bonjour bebe');
}else if(age <= 10){
    console.log('Bonjour adolesent');
}else if(age <= 20){
    console.log('Bonjour mineur');
}else if(age <= 60){
    console.log("Bonjour l'homme");
}else if(age <= 90){
    console.log('Bonjour vieux');
}else if(age > 90){
    console.log('Bonjour vieillard');
}else {
    console.log('Bonjour ........');
}

// le switch

let number = 14;

switch(number){
    case 1:
        console.log('Janvier');
        break;
    case 2:
        console.log('Fevrier');
        break;
    case 3:
        console.log('Mars');
        break;
    case 4:
        console.log('Avril');
        break;
    case 5:
        console.log('Mai');
        break;
     case 6:
        console.log('Juin');
        break;
    case 7:
        console.log('Juillet');
        break;
    case 8:
        console.log('Aout');
        break;
    case 9:
        console.log('Septembre');
        break;
    case 10:
        console.log('Octobre');
        break;
    case 11:
        console.log('Novembre');
        break;
    case 12:
        console.log('Decembre');
        break;
    default:
        console.log('Numero invalide');
}