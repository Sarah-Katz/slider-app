import React from 'react';

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            <i className={children === "handlePrevious" ? "fas fa-arrow-left" : "fas fa-arrow-right"} />
        </button>
    );
}

export default Button;
