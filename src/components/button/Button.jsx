import React from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';

function Button({ onClick, buttonType, disabled }) {
    let icon;
    if (buttonType === 'previous') {
        icon = <FaArrowLeft />;
    } else if (buttonType === 'next') {
        icon = <FaArrowRight />;
    } else if (buttonType === 'play') {
        icon = <FaPlay />;
    } else if (buttonType === 'pause') {
        icon = <FaPause />;
    }

    return (
        <button
            className={`${buttonType}-button ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
        </button>
    );
}

export default Button;
