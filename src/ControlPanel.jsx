import React, { useState } from "react";

const ControlPanel = ({ power, togglePower, volume, setVolume }) => {
   return (
    <div className="control-panel">
        <button onClick={togglePower}>{power ? 'Apagar' : 'Encender'}</button>
        <input type="range" min='0' max='1' step='0.01' value={volume} onChange={(e) => setVolume(e.target.value)}/>
    </div>
   );
};

export default ControlPanel;
