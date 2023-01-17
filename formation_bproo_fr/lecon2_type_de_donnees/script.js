// Une chaine de caractere / String
console.log("Salut les pros");
console.log('Salut les pros des pros');

let prenom = 'Janot';
let nom = "Kouayep";
let surnom = "Arnold"
nom = "Stephanie";
console.log(nom, prenom);


// Concatenation des chaines de caracteres /String concatenation
let nom_complet = nom + ' ' + prenom + '  Djomo';
console.log(nom_complet);
let concat = `Je m'appelle ${prenom} et aussi ${surnom}`;

console.log(concat);

// Obtenir un seul caractere dans une chaine / getting string ccharacters
let letter = prenom[0];
console.log(letter);
// Longueur d'une chaine / String length
let longueur1 = nom_complet.length;
console.log(longueur1);

// Les methodes d'une chaine de caracteres/ String methods

let uper = prenom.toUpperCase();
let low = uper.toLowerCase();
console.log(uper, low);

    // indexOf()
let nom1 = 'kouayep';
console.log(nom1.indexOf('y'));
    // lastIndexOf()
let test = 'anamontana';
console.log(test.lastIndexOf('a'));
    // slice(from, to)
console.log(nom_complet.slice(0, 10));
    // substr(from, number)
console.log(nom_complet.substr(9, 6));
    // replace(this, with)
console.log(nom_complet.replace("Stephanie", "Phany"));
    // concat(str1, str2)
console.log(nom1.concat(' ', prenom));
    // trim()
let salutation = '                      Hello,coucou!    comment tu vas?                    '
console.log(salutation.trim());
    // chartAt(index)
console.log(prenom.charAt(2));
    // split(separateur)
let greetings = 'Hello my Guys';
console.log(greetings.split(' '));
console.log(nom_complet.split(' '));
    // join(array)
let tmp = nom_complet.split(' ');
console.log(tmp.join('-'));

// Les nombres

    // Les operateurs arithmetiques / arithmetique operator
    // +, -, *, /, **, %
    console.log(5+8);
    console.log(45-30);
    console.log(4*6);
    console.log(20/6);
    console.log(5**4);
    console.log(38%3);

    // Ac = Pi * R ** 2
    // P = 2 * Pi * R
    // Ar = L * l

    let rayon = 7;
    let pi = 3.14;
    let longueur = 19; 
    let largeur = 15;

    let surface_cercle = pi * rayon ** 2;
    let surface_rect = longueur * largeur;
    let perimetre_cercle= 2 * pi * rayon;

    let result = `Mon cercle a pour perimetre: ${perimetre_cercle} et pour surface: ${surface_cercle} et mon rectangle a pour surface: ${surface_rect}`;

    console.log(result);
    console.log(surface_cercle);
    console.log(surface_rect);
    console.log(perimetre_cercle);
    // Les operateurs d'incrementation et de decrementation
    // ++ -- += -= *= /=
    let likes = 0;
    likes++;
    likes++;
    likes++;
    likes--;
    likes--;
    console.log(likes);

    let test1 = 10;
    test1 += 2;
    console.log(test1); 
    test1 -= 2;
    console.log(test1); 
    test1 *= 5;
    console.log(test1); 
    test1 /= 5;
    console.log(test1); 


// array -> tableau
    let fruits = ['orange', 'ananas', 'papaye', 'mangues', 'avocat', 'banane']
    fruits[0] = 'mandarines';
    console.log(fruits);

    let array_aleatoire = ['Janot', 'bonbo', 25, true, 'bon', ['a', 2, 8 , ['bonjour', 'hello']]];
    console.log(array_aleatoire);
    console.log(array_aleatoire.length);
    console.log(fruits.length);

    // array methods
    console.log(fruits.concat(array_aleatoire));
    console.log(fruits.join('-'));
    console.log(array_aleatoire.indexOf(true));

    fruits.push('serise', 'orange');
    console.log(fruits);
    fruits.pop();
    fruits.pop();
    console.log(fruits);


// Les variables de types Null ou de types UNDEFINED, NaN (Not a Number)
let age;
console.log(`Mon age est: ${age}, et d'ici 5 ans j'aurais: ${age + 5 }`);

let age1 = null;
console.log(`Mon age est: ${age1}, et d'ici 5 ans j'aurais: ${age1 + 5 }`);


// Les variables de types booleans

console.log(true, false, 'true', 'false');

let email = 'coucodemoi@gmail.com';
let fruit = ['mangue', 'ananas'];

console.log(email.includes('@'));
console.log(email.includes('#'));

console.log(fruit.includes('mangue'));
console.log(fruit.includes('biscuit'));

// Operateurs de comparaisons: ==, !=, >, <, >=, <=

let ages = 26;

console.log(ages == 25);
console.log(ages != 26);
console.log(ages < 30);
console.log(ages > 18);
console.log(ages >= 20);
console.log(ages >= 28);
console.log(ages <= 18);
console.log(ages <= 27);
console.log(ages >= 26);
console.log(ages == '26');


// Les operateurs de comparaisons avec les types

let age2 = 30;
console.log(age2 == '30');
console.log(age2 === '30');
console.log(age2 !== '30');

// Conversion des types de vaiables

let age3 = 40;
let name = '25';
let string_number = String(age3);
let name_int = Number(name);


console.log(string_number, typeof string_number);
console.log(age3, typeof age3);

console.log(age3, string_number);

console.log(name_int, typeof name_int);
console.log(name, typeof name);

let bool = 'true';

console.log(Boolean(bool));
console.log(bool);

let bool1 = 'stephanie';

console.log(Boolean(bool1));
console.log(bool1);

let bool2 = 235;

console.log(Boolean(bool2));
console.log(bool2);

let bool3 = 0;

console.log(Boolean(bool3));
console.log(bool3);