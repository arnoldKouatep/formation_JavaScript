const p = document.querySelector('p');
// p.classList.remove('leyy');
// p.classList.remove('lemm');
// console.log(p.classList);

// const mesClasses = ['error', 'succes', 'attention'];

// let index = 0;

// changeClass = () => {
//     if(index > mesClasses.length-1){
//         index = 0;
//         p.setAttribute('class', '');
//     }
//     p.classList.add(mesClasses[index]);
//     console.log(index);
//     index++;
// };

// setInterval(changeClass, 2000);
// console.log(changeClass);
// changeClass();
// changeClass();
// changeClass();

const list_para = document.querySelectorAll('p');

list_para.forEach( (p) => {
    if(p.innerText.includes('erreur')){
        p.classList.add('error');
    }
    if(p.innerText.includes('succes')){
        p.classList.add('succes');
    }
    if(p.innerText.includes('attention')){
        p.classList.add('attention');
    }
});