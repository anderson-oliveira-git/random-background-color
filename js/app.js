const colorArray = [
    'red',
    'rgb(66, 245, 149)',
    '#f5da42',
    'tomato',
    'aquamarine',
    'rgb(252, 3, 165)',
    'blue',
]

const btnRandom = document.querySelector('.btn-random');
const color = document.querySelector('.color');
const background = document.querySelector('body');

btnRandom.addEventListener('click', () => {
    let randomNumber = parseInt(Math.random() * colorArray.length);
    color.innerHTML = colorArray[randomNumber];
    background.setAttribute('style', `background-color: ${colorArray[randomNumber]};`);
});