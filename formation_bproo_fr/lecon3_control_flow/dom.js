// selection de la balise h1
const h1 = document.querySelector('h1');
console.log(h1);

// selection du premier paragraphe
const para = document.querySelector('p');
console.log(para);

// selection d'une classe quelconque
const tes = document.querySelector('.titre');
console.log(tes);

// selection tous les paragraphe
const paras = document.querySelectorAll('p');
console.log(paras[1]);


paras.forEach( para => {
    console.log(para);
});

// Get element by id/ selectionner un element a partir de son id 
const titre1 = document.getElementById('titre-principale');
const titre2 = document.getElementById('titre-secondaire');

console.log(titre1);
console.log(titre2);

// Get element by class/ selectionner un element a partir de sa classe

const paragraph = document.getElementsByClassName('p');
console.log(paragraph);

const element = document.getElementsByClassName('contenu');
console.log(element);

// Get element by tag name/ selectionner un element a partir de son nom de balise

const tags = document.getElementsByTagName('h1');
console.log(tags);


// Manipulation du texte dans les balises

const h = document.querySelector('.erreur');
let text = h.innerText;
const Maj_text = text.toUpperCase();
h.innerText = Maj_text;
console.log(Maj_text);

const div = document.querySelector('.contenu');
const personnes = ['Kouayep', 'Eric', 'Pierre'];

personnes.forEach( personne => {
    div.innerHTML += `<p>${personne}</p>`;
})

console.log(div.innerHTML);

// Ajout de balise dans le code html

// const link = document.createElement('a');
// link.href = 'https://google.com';
// link.innerText = 'Allez a Google';

// const body = document.querySelector('body');
// body.appendChild(link);
// console.log(link);

// get(recuperer) attribute et set attribute(modifier)

const lien = document.querySelector('a');
// const att = lien.getAttribute('href');
// lien.innerText = 'Allez a deepl translator';
// lien.setAttribute('href', 'https://www.deepl.com')

// console.log(att);


const hTitre = document.querySelector('h1');
// hTitre.setAttribute('style', 'color:blue');
// hTitre.setAttribute('style', 'fontSize: 50px');

hTitre.style.color = 'blue';
hTitre.style.fontSize = '90px';
hTitre.style.textTransform = 'upperCase';
console.log(hTitre.style);