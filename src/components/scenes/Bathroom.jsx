import React, { Component } from 'react'

import morning from '../../assets/sounds/Morning.m4a'

const bedRustle = new Audio(morning)

export default class Bathroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saidStop: false,
        }
    }

    componentDidMount() {
        if (annyang) {
            var commands = {
                'stop': () => this.stopBathroomSounds(),
            }
            annyang.debug()
            annyang.addCommands(commands)
            annyang.start()
        }
    }

    stopBathroomSounds() {
        this.setState({ saidStop: true })
        bedRustle.pause()
    }

    render() {
        if (bedRustle.currentTime === 0) {
            bedRustle.volume = 0.7
            bedRustle.play()
        }

        return (
            <div className="bathroom"></div>
        )
    }
}
