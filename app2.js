
// event listeners
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const box1 = document.querySelector('.card');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
box1.addEventListener('mouseenter', newBackgroundColor);
box1.addEventListener('keyup', newBackgroundColor);
function newBackgroundColor(e){
    e.preventDefault();
    box1.style.backgroundColor = "blue";  
    box1.addEventListener('mouseleave', () => box1.style.backgroundColor  = 'white');
}

