import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Button({ onClick, buttonType }) {
  return (
    <button className={`${buttonType}-button`} onClick={onClick}>
      {buttonType === "previous" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export default Button;
