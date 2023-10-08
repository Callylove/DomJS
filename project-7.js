const colors = ["green", "red", "pink", "orange", "gray", "rgba(133,122,200)", "rgba(121, 100, 150)", "#f15025", "#f2e04f"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})