let character = document.getElementById('character');
let block = document.getElementById('block');

function jump() {
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    }, 500);
}
let checkDead = setInterval(function(){
    let characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue('top'));
    let blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));
    if (blockLeft < 200 && blockLeft > 130 &&
        characterTop >= 260) {
            block.style.animation = "none";
            block.style.display = "none";
            alert("Ты проиграл! Нажми OK, чтобы сыграть еще.");
            location.reload();
    }
}, 10);

// Обработчик запуска и рестарта игры

let opening = document.getElementsByClassName('opening');
let ending = document.getElementsByClassName('ending');

function endGame() {
    ending.style.display = 'flex';
}


