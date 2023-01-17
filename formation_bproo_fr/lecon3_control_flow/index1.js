// (01) Function par declaration
// Syntax

salutation();

function salutation(){
    console.log('Salut les pros....');
}

salutation();

// (02) Fonction par expression

const ma_variable = function(){
    console.log('Salut encore mes pros de luxe ................');
};

ma_variable();

// (03) Return Function

function surface_rectangle(){
    let longueur = 54;
    let largeur = 36;
    return longueur * largeur;
}

const resultat = surface_rectangle();

console.log(`La surface de mon rectangle est de : ${resultat} m2.`);

// (04) Function with parameters

function Bonjour(p1, p2){
    console.log('Salut', p2, 'et', p1);
}

Bonjour('Janot', 'Stephanie');

function surfaceRect(L, l){
    let result = L*L;
    return result;
}

console.log(`La surface du rect est de: ${surfaceRect(18, 15)} m2`);
console.log(`La surface du rect est de: ${surfaceRect(27, 15)} m2`);
console.log(`La surface du rect est de: ${surfaceRect(28, 20)} m2`);
console.log(`La surface du rect est de: ${surfaceRect(48, 38)} m2`);
console.log(`La surface du rect est de: ${surfaceRect(99, 89)} m2`);

// (05) Arrow Function 

const salutation1 = () => {
    console.log('Salut les pros.........');
}

salutation1();

// const salutation2 = (nom, prenom) => {
//     console.log('Salut', nom, prenom);
// }
const salutation2 = (nom, prenom) => console.log('Salut', nom, prenom);
salutation2('Tagne', 'Eric');

const salutation3 = prenom => console.log('Salut', prenom);
salutation3('Eric');

const salutation4 = (prenom='Eric') => console.log('Salut', prenom);
salutation4('Tagne');
// const surfacerect = (L, l) => {
//     return L*L;
// }

const surfacerect = (L, l) => L*L;

console.log(surfacerect(34, 26));

