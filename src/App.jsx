import React, { useState } from 'react';
import DrumPad from './DrumPad.jsx';
import ControlPanel from './ControlPanel.jsx';
import Display from './Display.jsx'
import './App.css'

const sounds = [
  { key: 'Q', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3', name: 'Heater 1' },
  { key: 'W', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3', name: 'Heater 2' },
  { key: 'E', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3', name: 'Heater 3' },
  { key: 'A', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3', name: 'Heater 4' },
  { key: 'S', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3', name: 'Heater 6' },
  { key: 'D', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3', name: 'Dsc_Oh' },
  { key: 'Z', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3', name: 'Kick' },
  { key: 'X', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3', name: 'Kick 1' },
  { key: 'C', sound: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3', name: 'Cev' }, 
];



const App = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [display, setDisplay] = useState('');
 
  const playSound = (key) => {
    if (power) {
      const audio = document.getElementById(key);
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play();
      const soundName = sounds.find(sound => sound.key === key).name;
      setDisplay(soundName);
    }
  };

  const togglePower = () => {
    setPower(!power);
  };

  return (
    <div className='drum-machine container' id="drum-machine">
      <div className='row'>
        {sounds.map((sound) => (
          <DrumPad key={sound.key} keyTrigger={sound.key} sound={sound.sound} playSound={playSound} power={power}  />
        ))}
      </div>
      <Display display={display} />
      <ControlPanel power={power} togglePower={togglePower} volume={volume} setVolume= {setVolume} />
      <br />
      <a href='https://github.com/crimson3d'>Hecho por José Antonio Sánchez Fuentes</a>
    </div>
  );

};

export default App;
