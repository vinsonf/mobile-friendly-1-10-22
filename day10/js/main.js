const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

red.addEventListener('mouseenter', () => {
    const index = red.style.zIndex;
    red.style.zIndex = index + 10;
    red.style.backgroundColor = 'purple';
});

green.addEventListener('mouseenter', () => {
    const index = green.style.zIndex;
    green.style.zIndex = index + 10;
})

blue.addEventListener('mouseenter', () => {
    const index = blue.style.zIndex;
    blue.style.zIndex = index + 10;
})