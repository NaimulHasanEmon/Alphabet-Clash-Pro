function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split('');
    return alphabets[Math.floor(Math.random() * alphabets.length)];
}

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetGenerate = document.getElementById("current-alphabet");
    currentAlphabetGenerate.innerText = alphabet.toUpperCase();

    // Set background color
    setBackgroundColorInKeyboard(alphabet);
}

function play() {
    // // Hide the home screen by adding the hidden class to the classList
    hideElementById('home-screen');

    // // Show the game screen by removing the hidden class from the classList
    setElementById('play-ground');
    continueGame();
}