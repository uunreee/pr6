'use strict';

// 1
// let dive = document.querySelector('div');
// console.log(dive);
// for(let di of div){
//     alert(di.innerHTML);
// }

console.log(document.querySelector('div'));
console.log(document.querySelector('ul'));
console.log(document.querySelectorAll('li')[1]);

//2
let lits = document.querySelectorAll('li');
for(let lit of lits){
    console.log(lit.innerHTML);
    lit.classList.add('list-item');
    console.log(lit.className);
}

//3
let a = +prompt('Введите цифру', 2);
for(let i = 0; i<a; i++){
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.className = 'square';
    div.style.background = 'red';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.margin = '10px';
    body.append(div);
}

//4
let body = document.querySelector('body');
let form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '10px';
form.style.width = '400px';
let inputName = document.createElement('input');
inputName.placeholder = 'Имя';
let inputEmail = document.createElement('input');
inputEmail.placeholder = 'Почта';
let btn = document.createElement('button');
btn.innerHTML = 'Отправить';
form.append(inputName, inputEmail, btn);
body.append(form);