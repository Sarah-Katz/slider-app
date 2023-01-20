import React from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';

function Button({ onClick, buttonType, disabled, autoPlay }) {
    let icon;
    if (buttonType === 'previous') {
        icon = <FaArrowLeft />;
    } else if (buttonType === 'next') {
        icon = <FaArrowRight />;
    } else if (buttonType === "autoPlay") {
      icon = autoPlay ? <FaPause /> : <FaPlay />;
  }

    return (
        <button
            className={`${buttonType}-button ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}>
            {icon}
        </button>
    );
}

export default Button;
