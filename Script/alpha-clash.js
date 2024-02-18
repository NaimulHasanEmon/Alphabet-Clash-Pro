function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split('');
    return alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetGenerate = document.getElementById("current-alphabet");
    currentAlphabetGenerate.innerText = alphabet.toUpperCase();

    // Set background color
    setBackgroundColorInKeyboard(alphabet);
}

function scorePage(current, finalScore) {
    let score = document.getElementById('final-score');
    score.innerText = finalScore;
    removeBackgroundColorInKeyboard(current);
    hideElementById('home-screen');
    hideElementById('play-ground');
    setElementById('score-page');
}

function play() {
    // // Hide the home screen by adding the hidden class to the classList
    hideElementById('home-screen');

    // // Show the game screen by removing the hidden class from the classList
    setElementById('play-ground');
    continueGame();
}

function playAgain() {
    hideElementById("home-screen");
    hideElementById("score-page");
    const lifeTime = document.getElementById('current-life');
    lifeTime.innerText = 5;

    const score = document.getElementById('current-score');
    score.innerText = 0;
    
    setElementById("play-ground");
}

function buttonPress(event) {
    const playerPressed = event.key;

    let currentScore = document.getElementById('current-score');
    const currentAlphabetGenerate = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetGenerate.innerText;
    if (playerPressed.toLowerCase() === currentAlphabet.toLowerCase()) {
        let point = parseInt(currentScore.innerText);
        let newScore = point + 1;
        currentScore.innerText = newScore;
        removeBackgroundColorInKeyboard(playerPressed);
        continueGame();
    }
    else {
        const currentLife = document.getElementById('current-life');
        let lifeTime = parseInt(currentLife.innerText);
        let newLife = lifeTime - 1;
        currentLife.innerText = newLife;
        const current = currentAlphabet.toLowerCase();
        removeBackgroundColorInKeyboard(playerPressed);
        if (newLife === 0) {
            currentLife.innerText = 0;
            scorePage(current, parseInt(currentScore.innerText));
        }
    }
}

document.addEventListener('keyup', buttonPress)