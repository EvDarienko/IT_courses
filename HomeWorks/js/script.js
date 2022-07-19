let gameField = document.querySelectorAll('.game-field div');
let fishka = document.querySelector('.fishka');
let cube = document.querySelector('.cube img');
let startButton = document.querySelector('.start-game');

function randomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

startButton.addEventListener('click', (e) => {
    let random = randomNumber(1, 6);
    cube.src = `img/${random}.png`;
    setTimeout(() => {
        for (let i = 0; i < gameField.length; i++) {
            if (gameField[i].innerHTML != '') {
                gameField[i].innerHTML = '';
                if (i + random >= gameField.length - 1) {
                    alert('Congratulations! You won!');
                    gameField[0].innerHTML = fishka.outerHTML;
                    break;
                }
                gameField[i + random].innerHTML = fishka.outerHTML;
                break;
            } 
        }
    }, 400);
})
















