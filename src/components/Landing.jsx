import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="landing">
            <audio data-sound="music-box" src="../sounds/lullaby_music_box.mp3"></audio>
            <audio data-sound="tension" src="../sounds/Horror_tension.mp3"></audio>
            <audio data-sound="test" src="../sounds/testOfMeTalking.m4a"></audio>
            <audio data-sound="cell-alarm" src="../sounds/cell_alarm.wav"></audio>
            <audio data-sound="bed-rustle" src="../sounds/Morning.m4a"></audio>
        </div>
    )
  }
})
