import annyang from '../lib/annyang.min.js'
const musicBox = document.querySelector(`audio[data-sound="music-box"]`)
const tension = document.querySelector(`audio[data-sound="tension"]`)

const playLullaby = function() {

    musicBox.loop = true
    musicBox.volume = 0.7
    musicBox.play()
    const tensionInterval = setInterval(playTension, 12000)
}
const playTension = function() {
    tension.play()
}
const stopIntroSounds = function() {
    musicBox.pause()
    clearInterval(tensionInterval);
}
if (annyang) {
    // Let's define a command.
    var commands = {
        'begin': playLullaby,
        'stop': stopIntroSounds
    };

    // Debug info for the console
    annyang.debug();

    // Initialize annyang with our commands
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
}
