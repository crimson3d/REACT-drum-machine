import React, { useEffect } from "react";

const DrumPad = ({ keyTrigger, sound, playSound, power }) => {
  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      playSound(keyTrigger);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <button
      className="drum-pad btn btn-primary m-2"
      onClick={() => playSound(keyTrigger)}
      disabled={!power}
      
    >
      {keyTrigger}
      <audio id={keyTrigger} src={sound}></audio>
    </button>
  );
};

export default DrumPad;
