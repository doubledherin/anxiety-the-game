import React from 'react'
import annyang from '../assets/lib/annyang.min.js'
import lullaby from '../assets/sounds/lullaby_music_box.mp3'
import horror from '../assets/sounds/Horror_tension.mp3'

export default React.createClass({
    //
    // getInitalState() {
    //     saidBegin: false,
    //     saidStop: false
    // },

    render() {
        const musicBox = new Audio(lullaby)
            musicBox.loop = true
            musicBox.volume = 0.7
            musicBox.play()

        const tension = new Audio(horror)
            tension.volume = 0.5

        const tensionInterval = setInterval(playTension, 12000)


        function playTension() {
            tension.play()
        }
        const stopIntroSounds = function() {
            musicBox.pause()
            tension.pause()
            clearInterval(tensionInterval)
        }

        if (annyang) {
            var commands = {
                'stop': stopIntroSounds
            };
            annyang.debug();
            annyang.addCommands(commands);
            annyang.start();
        }

        return (
            <div className="landing"></div>
        )
    }
})
