import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isNightMode, toggleNightMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isNightMode} onChange={toggleNightMode} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
