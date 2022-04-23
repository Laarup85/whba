const playButton = document.querySelector('.play-button');

const audio = new Audio('./assets/session.mp3');

playButton.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
});