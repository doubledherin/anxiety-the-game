import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="landing">
            <audio data-sound="music-box" src="../assets/sounds/lullaby_music_box.mp3"></audio>
            <audio data-sound="tension" src="../assets/sounds/Horror_tension.mp3"></audio>
            <audio data-sound="test" src="../assets/sounds/testOfMeTalking.m4a"></audio>
            <audio data-sound="cell-alarm" src="../assets/sounds/cell_alarm.wav"></audio>
            <audio data-sound="bed-rustle" src="../assets/sounds/Morning.m4a"></audio>
        </div>
    )
  }
})
