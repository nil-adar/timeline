import React from 'react';
import './ToggleSwitch.css';
import sunIcon from '../assets/sun.svg.png';
import moonIcon from '../assets/moon.svg.png';

const ToggleSwitch = ({ isNightMode, toggleNightMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isNightMode} onChange={toggleNightMode} />
      <span className="slider"
        style={{
          backgroundImage: `url(${isNightMode ? sunIcon : moonIcon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
