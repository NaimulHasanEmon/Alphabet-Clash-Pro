function play() {
    // Hide the home screen by adding the hidden class to the classList
    const home = document.getElementById('home-screen');
    home.classList.add('hidden');

    // Show the game screen by removing the hidden class from the classList
    const game = document.getElementById('play-ground');
    game.classList.remove('hidden');
}