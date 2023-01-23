/*
The Button component takes in 4 props:
- onClick: a callback function that will be executed when the button is clicked
- buttonType: a string that specifies what type of button this is (previous, next, autoPlay)
- disabled: a boolean that determines if the button is disabled or not
- autoPlay: a boolean that determines if the autoplay button should display the play or pause icon
*/

import React from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';

function Button({ onClick, buttonType, disabled, autoPlay }) {
    let icon;
    // determine which icon to display based on the buttonType prop
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
