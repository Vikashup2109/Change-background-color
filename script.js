const colorBtn = document.querySelector('#clr-btn');
const bodyBkg = document.querySelector('body');

const colors = ['green', 'red', 'blue', 'purple', 'gray', '#3b5998', 'orange'];
colorBtn.addEventListener('click',changeColor);

function changeColor() {
    // bodyBkg.style.backgroundColor = colors[5];
    let random = Math.floor(Math.random()*colors.length)
    bodyBkg.style.backgroundColor = colors[random];
}