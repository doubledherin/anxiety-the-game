import React, { Component } from 'react'
import annyang from '../assets/lib/annyang.min.js'
import lullaby from '../assets/sounds/lullaby_music_box.mp3'
import horror from '../assets/sounds/Horror_tension.mp3'

const musicBox = new Audio(lullaby)
const tension = new Audio(horror)
let tensionInterval

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saidStop: false
        }
    }

    componentDidMount() {
        if (annyang) {
            var commands = {
                'stop': () => this.stopIntroSounds()
            }
            annyang.debug()
            annyang.addCommands(commands)
            annyang.start()
        }
    }

    stopIntroSounds() {
        this.setState({ saidStop: true })
        musicBox.pause()
        this.toggleTensionInterval()
    }

    playTension() {
        tension.volume = 0.5
        tension.play()
    }

    toggleTensionInterval() {
        if (!tensionInterval) {
            tensionInterval = setInterval(this.playTension, 12000)
        } else {
            tension.pause()
            clearInterval(tensionInterval)
            tensionInterval = null
        }
    }

    playMusicBox() {
        musicBox.play()
        this.toggleTensionInterval()
    }

    render() {

        if (musicBox.currentTime === 0) {
            musicBox.loop = true
            musicBox.volume = 0.7
            this.playMusicBox()
        }


        return (
            <div className="landing"></div>
        )
    }
}
