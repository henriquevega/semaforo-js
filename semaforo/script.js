const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const semaphore = document.getElementById('semaphoreOff');

function semaphoreGreen () {
    semaphore.src = './img/verde.png';
}

green.addEventListener('click',semaphoreGreen);
