import React from 'react';

function AudioButton(props) {
    function playAudio() { 
      let x = document.getElementById("birdQAudio");
      x.play();
    }
  
      return (
        <div>
          <audio id="birdQAudio">
            <source src={props.sound} type="audio/mpeg"></source>
          </audio>
  
          <button onClick={playAudio}>Bird Call/Sound</button>
        </div>
      );
  }

export default AudioButton;