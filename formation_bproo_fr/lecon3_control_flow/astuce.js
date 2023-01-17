// 1. Comment ajuster conditionnellement des propietes a un objet nous 
// allons voir comment utiliser l'operateur de propagation Spread Operator ... 

let condition = false;

let personne = {
    id: 1,
    nom: 'Kouayep',
    ... (condition && {age: 26})
};

console.log(personne);

// 2. Verifiez si une propriete existe dans un objet, nous allons voir comment utiliser le mot cle IN 
// pour Verifier si un objet contient une propriete

let personne1 = {
    nom: 'Djomo',
    salaire: 100000
};

console.log('age' in personne1);
console.log('salaire' in personne1);

// 3. Comment ajouter un nom de proprietes de facon dynamique dans un objet JavaScript

const dynamic = 'favorite';
let item = {
    nom: 'Biscuit',
    [dynamic]: 'chocolat'
}

console.log(item);

// 4. Comment destructurer les proprietes d'un objet JavaSript

const person = { id: 1, nom: 'Djomo eric'};
const { id, nom } = person;
console.log(person);
console.log(nom);

let { id: identifiant} = person;
let nom_prop = 'nom';
let { [nom_prop]: name} = person;
console.log(identifiant);
console.log(name);


// 5. Fusion nulle, ?? Operateur
// 5. Nullish coalescing, ?? Operator

const foo = null ?? 'Hello'; //null ou undefined
console.log(foo); // returns 'Hello'
const bar = 'Not null' ?? 'Hello';
console.log(bar); // returns 'Not null'
const baz = 0 ?? 'Hello';
console.log(baz); //returns 0

// 6. Chainage optionnel(?.)
// 6. Optional chaining(?.)

const book = {
    id: 1,
    title: 'Title',
    author: null
};

console.log(book.author?.age);

console.log(book.author?.address?.city);

const person1 = {
    firstName: 'Haseeb',
    lastName: 'Anwar',
    printName: function () {
        return `${this.firstName} ${this.lastName}`;

    },
};

console.log(person1.printName());
console.log(person1.doesNotExist?.());

// 7. Double exclamation operator !!
// Pour convertir le resultat d'une expression en une booleenne

const greeting = 'Hello there!';
console.log(!!greeting);
const noGreeting = '';
console.log(!!noGreeting);

// 8. Conversions de chaines et d'entiers

// convertir le string en entier
const stringNumber = '874';
console.log(stringNumber);
console.log(+stringNumber);
console.log(typeof +stringNumber);

// convertir l'entier en string
const myString = 25 + '';
console.log(myString);
console.log(typeof myString);


// 9. Verifier les fausses valeurs dans un tableau
// Methodes: filter(), some() et every()

const myArray = [null, false, 'Helle', undefined, 0];
// Methode filter pour enlever toutes les valeurs fausses
const filtered = myArray.filter(Boolean);
console.log(filtered);

// verifier si au moins une valeur est vrai
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy);

// check if all values are truthy 
const allTruthy = myArray.every(Boolean);
console.log(allTruthy);

// 10. Aplatissement des tableaux de tableaux
// 10. Flattening Arrays of Arrays

const monArray = [{ id: 1}, [{ id: 2}], [{ id: 3}]];
console.log(monArray);
const flattedArray = monArray.flat();
console.log(flattedArray);
// plus avancer

const arr = [0, 1, 2, [[[3, 4]]]];
console.log(arr.flat(2));