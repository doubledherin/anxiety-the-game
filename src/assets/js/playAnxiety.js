import annyang from '../lib/annyang.min.js'
import lullaby from '../../assets/sounds/lullaby_music_box.mp3'
import horror from '../../assets/sounds/Horror_tension.mp3'
import test from '../../assets/sounds/testOfMeTalking.m4a'
import morning from '../../assets/sounds/Morning.m4a'

const musicBox = new Audio(lullaby)
const tension = new Audio(horror)
const meTalking = new Audio(test)
const bedRustle = new Audio(morning)

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
