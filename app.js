// create an element
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText = 'X-Men';
li.classList.add('list-items');
setTimeout (() => li.remove(), 3000);
// event listeners
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const body = document.querySelector('body');
btn1.addEventListener('click', interChanged);
function interChanged(e){
    e.preventDefault();
    console.log(body.lastElementChild);
}
